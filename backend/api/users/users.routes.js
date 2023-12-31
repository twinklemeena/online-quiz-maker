const express = require('express');
const userController = require('./users.controllers');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:userId', userController.getUser);
router.put('/:userId', userController.updateUser);

// Add other user-related routes as needed

module.exports = router;
