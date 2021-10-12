import { listDao } from '../models';

const getProduct = async () => {
  const product = await productDao.getProduct();
  return product;
};

export default { getProduct };
