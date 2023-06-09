const express = require('express');
const router = express.Router();
const admincontroller = require('../controller/admin.controller');


// (Admin default Sign Up)
router.post('/admin_signIn', admincontroller.adminSignIn);
router.post('/adminResetPassword', admincontroller.adminResetPassword);
router.get('/ViewAllUsers', admincontroller.viewallUsers)



module.exports = router;