import express from 'express';
import { signUpController } from '../controllers';
import { signInController } from '../controllers';

const router = express.Router();

router.get('/register', signUpController.createUser);
router.post('/register', signUpController.createUser);
router.post('/login', signInController.signInUser);

export default router;
