import { listDao } from '../models';

const getSort = async () => {
  const product = await sortDao.getSort();
  return product;
};

export default { getSort };
