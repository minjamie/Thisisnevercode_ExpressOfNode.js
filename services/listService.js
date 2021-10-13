import { listDao } from '../models';

const getList = async (id) => {
  const product = await listDao.getList(id);
  return product;
};

export default { getList };
