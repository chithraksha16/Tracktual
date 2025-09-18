import express from 'express';
import { signup, login ,checkAuth,signupSchema,loginSchema} from '../controllers/auth.controller';
import { authentication } from '../middleware/auth.middleware';
import { validate } from "../middleware/validate.middleware";



const router=express.Router();

router.post('/signup',validate(signupSchema),signup)

router.post('/login',validate(loginSchema),login)

router.get('/checkAuth',authentication,checkAuth)




export default router;