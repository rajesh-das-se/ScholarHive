import express from 'express'
import { signup, signin, verify} from "../controllers/auth.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";



const router= express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/verify', verifyToken, verify);

export default router;