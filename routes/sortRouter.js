import express from 'express';
import { sortController } from '../controllers';

const router = express.Router();

router.get('/', sortController.getSort);

export default router;
