const express = require('express');
const {login,register,updateUser
} = require('../controllers/authController');

const router = express.Router();

router.get('/login', login);
router.post('/register',register);
router.post('/updateUser',updateUser);

module.exports = {
    routes: router
}


