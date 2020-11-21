const firebase = require("firebase/app");
require("firebase/firestore")
require("firebase/auth")

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

firebase.initializeApp(firebaseConfig);
firebase.auth().signInWithEmailAndPassword(process.env.FIREBASE_USER, process.env.FIREBASE_PASS)
    .then(user => {
        console.log('Signed into firebase')
    }).catch(error => {
        console.log(error)
    })
const db = firebase.firestore()

let stages = ['Big Fans', 'Block Party', 'Dizzy Heights', 'Door Dash', 'Egg Scramble', 'Egg Siege', 
'Fall Ball', 'Fall Mountain', 'Fruit Chute', 'Gate Crash', 'Hex A Gone', 'Hit Parade', 'Hoarders', 
'Hoopsie Daisy', 'Hoopsie Legends', 'Knight Fever', 'Jinxed', 'Jump Club', 'Jump Showdown', 
'Perfect Match', 'Rock N Roll', 'Roll Out', 'Royal Fumble', 'See Saw', 'Slime Climb', 'Tail Tag', 
'Team Tail Tag', 'The Whirlygig', 'Tip Toe']

exports.apiTest = async (req, res, next) => {
    let body = ''
    const snapshot = await db.collection('test').get();
    snapshot.forEach((doc) => {
        body += doc.data().first
    });
    res.status(200).json({
        body: 'This is a Server API Test ' + body + ' test'
    });
};

exports.leaderboard = async (req, res, next) => {
    let crownLeaders = await db.collection('users').orderBy('crowns', 'desc').limit(10).get();
    if (crownLeaders.empty) {
        res.status(404).json({
            message: 'Crown leaderboard not found'
        })
        return
    }
    let crownArray = []
    crownLeaders.forEach(user => {
        crownArray.push(user.data())
    })
    let goldLeaders = await db.collection('users').orderBy('numGold', 'desc').limit(10).get();
    if (goldLeaders.empty) {
        res.status(404).json({
            message: 'Gold leaderboard not found'
        })
        return
    }
    let goldArray = []
    goldLeaders.forEach(user => {
        goldArray.push(user.data())
    })
    console.log('Leaderboard found')
    res.status(200).json({
        crownArray,
        goldArray
    })
}
exports.saveRound = async (req, res, next) => {
    let body = req.body
    let userId = body.userId
    let stage = body.stage
    let medal = body.medal
    let qualified = body.qualified
    let roundNum = body.roundNum
    let createdAt = new Date().toISOString()
    let gameId = body.gameId
    const addRound = await db.collection('rounds').add({
        userId,
        stage,
        medal,
        qualified,
        roundNum,
        createdAt,
        gameId
    })
    if (addRound) {
        console.log('Added document with ID: ' + addRound.id)
        res.status(201).json({
            result: 'SUCCESS',
            message: 'Round saved',
        })
    } else {
        res.status(500).json({
            result: 'ERROR',
            message: 'Round not saved'
        })
    }
}

exports.undo = async (req, res, next) => {
    let body = req.body
    let gameId = body.gameId.data
    let deleteRounds = await db.collection('rounds').where('gameId', '==', gameId).get()
    if (!deleteRounds.empty) {
        deleteRounds.forEach(round => {
            round.ref.delete()
        })
        console.log('Game Deleted with ID: '+ gameId)
        res.status(204).json({
            result: 'SUCCESS',
            message: 'Game deleted',
        })        
    } else {
        console.log(error);
        res.status(500).json({
            result: 'ERROR',
            message: 'Game delete failed'
        })        
    }
}

exports.updateUser = async (req, res, next) => {
    let body = req.body;
    let numRounds = body.numRounds;
    let numCrowns = body.crowns;
    let numFinals = body.numFinals;
    let numGold = body.numGold;
    let numSilver = body.numSilver;
    let numBronze = body.numBronze;
    let userId = body.userId
    let user_ref = db.collection('users').doc(userId);
    await user_ref.update({
        "roundsPlayed": firebase.firestore.FieldValue.increment(numRounds),
        "crowns": firebase.firestore.FieldValue.increment(numCrowns),
        "gamesPlayed": firebase.firestore.FieldValue.increment(1),
        "numFinals": firebase.firestore.FieldValue.increment(numFinals),
        "numGold": firebase.firestore.FieldValue.increment(numGold),
        "numSilver": firebase.firestore.FieldValue.increment(numSilver),
        "numBronze": firebase.firestore.FieldValue.increment(numBronze)
    })
        .then(() => {
            console.log('Updated user')
            res.status(201).json({
                result: 'SUCCESS',
                message: 'User updated',
            })
        }).catch((error) => {
            console.log(error);
            res.status(500).json({
                result: 'ERROR',
                message: 'User not updated'
            })
        });
}

exports.getUser = async (req, res, next) => {
    let userId = req.query.userId
    console.log(userId)
    if (userId) {
        let user = await db.collection('users').doc(userId).get();
        if (user.exists) {
            let roundsData = {}
            let promises = stages.map(async stage => {
                let rounds = await db.collection('rounds').where('userId', '==', userId).where('stage', '==', stage).get()
                if (!rounds.empty) {
                    let playedCount = 0
                    let qualifiedCount = 0
                    let goldCount = 0
                    let silverCount = 0
                    let bronzeCount = 0
                    rounds.forEach((round) => {
                        thisData = round.data()
                        playedCount++
                        if (thisData.qualified) {
                            qualifiedCount++
                        }
                        if (thisData.medal == 'Gold') {
                            goldCount++
                        } else if (thisData.medal == 'Silver') {
                            silverCount++
                        } else if (thisData.medal == 'Bronze') {
                            bronzeCount++
                        }
                    })
                    roundsData[stage] = {
                        stage: stage,
                        playedCount,
                        qualifiedCount,
                        goldCount,
                        silverCount,
                        bronzeCount
                    }
                }
            })
            Promise.all(promises).then(() => {
                let userData = user.data()
                console.log('User found with ID: ' + userId)
                res.status(200).json({
                    userData,
                    roundsData
                })
            })
        } else {
            console.log('User not found with ID: ' + userId);
            res.status(404).json({
                result: 'ERROR',
                message: 'User not found'
            })
        }
    }
}