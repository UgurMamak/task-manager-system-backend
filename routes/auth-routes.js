const express = require('express');
const {login,register,updateUser,userImgUpdate,logout
} = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/register',register);
router.post('/updateUser',updateUser);
router.post('/userImgUpdate',userImgUpdate);

module.exports = {
    routes: router
}


