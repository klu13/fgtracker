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