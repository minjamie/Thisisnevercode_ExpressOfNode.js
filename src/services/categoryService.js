import { categoryDao } from '../models';

const getCategory = async () => {
  const category = await categoryDao.getCategory();
  return category;
};

export default { getCategory };
