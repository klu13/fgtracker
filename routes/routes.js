const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/apiTest', controllers.apiTest);
router.get('/leaderboard', controllers.leaderboard)

module.exports = router;