import express from 'express';
const router = express.Router();
import usercontroller from '../controller/user.controller.js';

router.post('/add_Data', usercontroller.addData);
router.get('/viewUserInfo',usercontroller.viewUserInfo);
router.post('/editUserInfo',usercontroller.editUserInfo);
router.post('/deleteUser',usercontroller.deleteUser);

export default router
