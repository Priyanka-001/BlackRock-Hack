const express = require('express');
const router = express.Router();
const {jwtAuthMiddleware} =require('../../jwt')
const {createUser,loginUser,User}=require('../../controllers/user')

//routes
router.post('/signup',createUser);
router.post('/login',loginUser);
router.get('/currentUser', jwtAuthMiddleware, User);


module.exports = router;
