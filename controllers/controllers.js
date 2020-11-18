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

exports.leaderboard = async (req, res, next) => {
    let crownLeaders = await db.collection('users').orderBy('crowns', 'desc').limit(20).get();
    if (crownLeaders.empty) {
        res.status(404).json({
            message: 'Leaderboard not found'
        })
        return
    }
    let crownArray = []
    crownLeaders.forEach(user => {
        crownArray.push(user.data())
    })
    console.log('Leaderboard found')
    res.status(200).json({
        crownArray
    })
}