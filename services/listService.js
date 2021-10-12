import { listDao } from '../models';

const getList = async () => {
  const product = await listDao.getList();
  return product;
};

export default { getList };
