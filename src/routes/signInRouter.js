import express from 'express';
import { signInController } from '../controllers';
import auth from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/login', auth.check, signInController.signInUser);

export default router;
