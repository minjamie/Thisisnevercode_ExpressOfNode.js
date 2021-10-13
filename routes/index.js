import express from 'express';
const router = express.Router();

import mainRouter from './mainRouter';
import categoryRouter from './categoryRouter';
import listRouter from './listRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';

router.use('/main', mainRouter);

router.use('/category', categoryRouter);

router.use('/list', listRouter);
router.use('/product', productRouter);

router.use('/account', userRouter);

export default router;
