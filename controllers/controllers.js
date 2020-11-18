const firebase = require("firebase/app")
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

exports.saveRound = async (req, res, next) => {
    let body = req.body
    let userId = body.userId
    let stage = body.stage
    let medal = body.medal
    let qualified = body.qualified
    let roundNum = body.roundNum
    let createdAt = new Date().toISOString()
    const addRound = await db.collection('rounds').add({
        userId,
        stage,
        medal,
        qualified,
        roundNum,
        createdAt
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