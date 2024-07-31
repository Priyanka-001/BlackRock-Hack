// userRoutes.js
const express = require('express');
const router = express.Router();
const { jwtAuthMiddleware } = require('../../jwt');
const { buyPoints} = require('../../controllers/buystock'); // Ensure this path is correct

router.post('/buystock', jwtAuthMiddleware, buyPoints);
//router.post('/sellstock', jwtAuthMiddleware, sellPoints); // Assuming you have a sellPoints function as well

module.exports = router;

