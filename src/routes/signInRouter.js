import express from 'express';
import { signInController } from '../controllers';

const router = express.Router();

router.post('/login', signInController.signInUser);

export default router;
