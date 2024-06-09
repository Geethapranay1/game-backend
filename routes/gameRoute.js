const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.post('/start', gameController.startGame);
router.get('/instructions', gameController.getInstructions);
router.get('/state', gameController.getGameState);
router.post('/winner', gameController.declareWinner);
router.post('/restart', gameController.restartGame);

module.exports = router;
