import { listDao } from '../models';

const getList = async () => {
  const product = await listDao.getList(id);
  return product;
};

export default { getList };
