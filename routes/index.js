import express from 'express';
const router = express.Router();

import mainRouter from './mainRouter';
import categoryRouter from './categoryRouter';
import listRouter from './listRouter';
import productRouter from './productRouter';
import sortRouter from './sortRouter';
import signInRouter from './signInRouter';
import signUpRouter from './signUpRouter';

router.use('/main', mainRouter);

router.use('/category', categoryRouter);

router.use('/list', listRouter);
router.use('/product', productRouter);
router.use('/sort', sortRouter);

router.use('/signin', signInRouter);
router.use('/signup', signUpRouter);

export default router;
