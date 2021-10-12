import { sortService } from '../services';

const getSortByPriceHigh = async (req, res, next) => {
  if (req.query.sort === 'pricehigh') {
    return res.status(200).send(await sortService.getSortByPriceHign());
  }
  next();
};

const getSortByPriceLow = async (req, res, next) => {
  if (req.query.sort === 'pricelow') {
    return res.status(200).send(await sortService.getSortByPriceLow());
  }
  next();
};

const getSortByRecent = async (req, res, next) => {
  if (req.query.sort === 'recent') {
    return res.status(200).send(await sortService.getSortByRecent());
  }
  next();
};

const getSortByTrend = async (req, res, next) => {
  if (req.query.sort === 'trend') {
    return res.status(200).send(await sortService.getSortByTrend());
  }
  next();
};

const getProductForList = async (req, res, next) => {
  return res.status(200).send(await sortService.getProductForList());
};

export default {
  getSortByPriceHigh,
  getSortByPriceLow,
  getSortByRecent,
  getSortByTrend,
  getProductForList,
};
