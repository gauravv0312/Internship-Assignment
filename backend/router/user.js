const express = require('express');
const router = express.Router();

const{postUserDetailes,getUserDetails} = require('../controller/userController');


router.route('/post').post(postUserDetailes);
router.route('/user').get(getUserDetails);

module.exports = router;