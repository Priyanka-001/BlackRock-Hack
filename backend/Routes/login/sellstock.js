const express = require('express');
const router = express.Router();
const { sellPoints } = require('../../controllers/sellstock');
const {jwtAuthMiddleware} =require('../../jwt')

router.post('/sellstock', jwtAuthMiddleware, sellPoints);

module.exports = router;
