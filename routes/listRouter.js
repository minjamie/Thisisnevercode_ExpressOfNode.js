import express from 'express';
import { listController } from '../controllers/';

const router = express.Router();

router.get('/', listController.getList);

export default router;
