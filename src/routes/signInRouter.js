import express from 'express';
import { signInController } from '../controllers';

const router = express.Router();

router.post('/', signInController.signInUser);

export default router;
