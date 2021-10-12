import { sortDao } from '../models';

const getSortByPriceHign = async () => {
  return await sortDao.getSortByPriceHign();
};

const getSortByPriceLow = async () => {
  return await sortDao.getSortByPriceLow();
};

const getSortByRecent = async () => {
  return await sortDao.getSortByRecent();
};

const getProductForList = async () => {
  const test = {
    LIST_DATA: {
      category: 'SHOES',
      products: await sortDao.getProductForList(),
    },
  };
  // return await sortDao.getProductForList();
  return test;
};

export default {
  getSortByPriceHign,
  getSortByPriceLow,
  getSortByRecent,
  getProductForList,
};
