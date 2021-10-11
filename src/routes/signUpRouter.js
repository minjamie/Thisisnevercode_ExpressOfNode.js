import express from 'express';
import { signUpController } from '../controllers';

const router = express.Router();

router.get('/', signUpController.signUpUser);

export default router;
