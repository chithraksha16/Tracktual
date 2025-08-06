import express from 'express';
import { signup, login ,logout,checkAuth} from '../controllers/auth.controller';
import { authentication } from '../middleware/auth.middleware';

const router=express.Router();

router.post('/signup',signup)

router.post('/login',login)

router.get('/checkAuth',authentication,checkAuth)

router.post('/logout',authentication,logout)



export default router;