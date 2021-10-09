import express from 'express';
import { signInController } from '../controllers';

const router = express.Router();

router.get('/', signInController.signInUser);

export default router;
