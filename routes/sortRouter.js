import express from 'express';
import { sortController } from '../controllers';

const router = express.Router();

router.get(
  '/',
  sortController.getSortByPriceHigh,
  sortController.getSortByPriceLow,
  sortController.getSortByRecent
);

// router.get('/list', sortController.getProductForList);
// router.get('/trending', sortController.getSortByTrending);

export default router;
