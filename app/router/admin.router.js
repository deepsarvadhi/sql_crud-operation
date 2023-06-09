const express = require('express');
const router = express.Router();
const admincontroller = require('../controller/admin.controller');

router.post('/admin_signIn', admincontroller.adminSignIn)



module.exports = router;