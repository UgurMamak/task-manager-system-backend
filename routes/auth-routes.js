const express = require('express');
const {login,register,updateUser,userImgUpdate
} = require('../controllers/authController');

const router = express.Router();

router.get('/login', login);
router.post('/register',register);
router.post('/updateUser',updateUser);
router.post('/userImgUpdate',userImgUpdate);

module.exports = {
    routes: router
}


