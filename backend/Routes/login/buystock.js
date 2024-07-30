// const express = require('express');
// const router = express.Router();
// const { buyPoints } = require('../../controllers/buystock');
// const {jwtAuthMiddleware} =require('../../jwt')
const express = require('express');
const router = express.Router();
const { buyPoints } = require('../../controllers/buystock');
const { jwtAuthMiddleware } = require('../../jwt');

router.post('/buystock', jwtAuthMiddleware, buyPoints);


// router.post('/buystock', jwtAuthMiddleware, buyPoints);

module.exports = router;


// module.exports = router;
