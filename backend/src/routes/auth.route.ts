import express from 'express';
import { signup, login ,checkAuth} from '../controllers/auth.controller';
import { authentication } from '../middleware/auth.middleware';

const router=express.Router();

router.post('/signup',signup)

router.post('/login',login)

router.get('/checkAuth',authentication,checkAuth)




export default router;