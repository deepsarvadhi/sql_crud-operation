const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/user.controller')

router.post('/add_Data', usercontroller.addData);
router.get('/viewUserInfo',usercontroller.viewUserInfo);
router.post('/editUserInfo',usercontroller.editUserInfo);
router.post('/deleteUser',usercontroller.deleteUser);

module.exports = router
