import express from 'express';
const router = express.Router();
import admincontroller from '../controller/admin.controller.js';


// (Admin default Sign Up)
router.post('/admin_signIn', admincontroller.adminSignIn);
router.post('/adminResetPassword', admincontroller.adminResetPassword);
router.get('/ViewAllUsers', admincontroller.viewallUsers)



export default router;