import { productDao } from '../models';

const getProductById = async (id) => {
  const product = await productDao.getProductById(id);
  if (product === undefined) {
    const err = new Error('NOT_FOUND');
    err.statusCode = 404;
    throw err;
  }
  return product;
};

export default { getProductById };
