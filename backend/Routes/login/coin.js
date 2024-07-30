// userCoinsRoute.js
const express = require('express');
const router = express.Router();
const { jwtAuthMiddleware } = require('../../jwt'); // Adjust the path as necessary
const coin = require('../../controllers/coin'); // Adjust the path as necessary

// routes
router.get('/getcoin', jwtAuthMiddleware, coin);

module.exports = router;
