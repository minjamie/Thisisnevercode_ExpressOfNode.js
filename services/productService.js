import { productDao } from '../models';

const getProductBySort = async (sort) => {
  const sortQuery = {
    pricehigh: await productDao.getProductBySort('pricehigh'),
    pricelow: await productDao.getProductBySort('pricelow'),
    recent: await productDao.getProductBySort('recent'),
    trend: await productDao.getProductBySort('trend'),
  };
  return sortQuery[sort];
};

export default { getProductBySort };
