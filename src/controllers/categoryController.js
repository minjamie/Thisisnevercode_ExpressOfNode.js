import { categoryService } from '../services';

const getCategory = async (req, res) => {
  const category = await categoryService.getCategory();
  res.status(200).json({
    msg: 'SUCCESS',
    category,
  });
};

export default { getCategory };
