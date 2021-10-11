import express from 'express';
import { signUpController } from '../controllers';

const router = express.Router();

router.post('/register', signUpController.createUser);

export default router;
