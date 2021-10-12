import express from 'express';
import { listController } from '../controllers/';

const router = express.Router();

router.get('/:id', listController.getList);

export default router;
