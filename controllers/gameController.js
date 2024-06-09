let gameState = require('../models/gameState');

// Initialize a new game
exports.startGame = (req, res) => {
    const { numberOfPlayers, playerNames } = req.body;
    gameState = {
        numberOfPlayers,
        playerNames,
        currentTurn: 0,
        winner: null
    };
    res.status(200).send(gameState);
};

// Get instructions
exports.getInstructions = (req, res) => {
    const instructions = [
        "Component 1: This component allows you to spin the wheel.",
        "Component 2: This component provides bonus points.",
        "Component 3: This component offers a penalty for wrong answers."
    ];
    res.status(200).send(instructions);
};

// Get game state
exports.getGameState = (req, res) => {
    res.status(200).send(gameState);
};

// Declare winner
exports.declareWinner = (req, res) => {
    const { winner } = req.body;
    gameState.winner = winner;
    res.status(200).send(gameState);
};

// Restart game
exports.restartGame = (req, res) => {
    gameState = {
        numberOfPlayers: 0,
        playerNames: [],
        currentTurn: 0,
        winner: null
    };
    res.status(200).send(gameState);
};
