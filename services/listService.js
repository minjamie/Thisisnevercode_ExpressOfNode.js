import { listDao } from '../models';

const getList = async (id) => {
  const list = await listDao.getList(id);
  return list;
};

export default { getList };
