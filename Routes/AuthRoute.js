import express from 'express';
import { loginuser, registerUser } from '../Controllers/AuthController.js';

const router = express.Router()


router.post('/register', registerUser)
router.post('/login', loginuser)



// testing route

// router.get('/', async(req, res) => {res.send("Auth Route")});

export default router;