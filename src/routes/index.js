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

router.use('/account', signInRouter);
router.use('/account', signUpRouter, () => {
  app.use((err, req, res, next) => {
    const { statusCode, message } = err;
    console.error(err);
    res.status(statusCode || 500).send(message);
  });
});

export default router;
