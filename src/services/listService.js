import { listDao } from '../models';

const getList = async () => {
  const list = await listDao.getList();
  return list;
};

export default { getList };
