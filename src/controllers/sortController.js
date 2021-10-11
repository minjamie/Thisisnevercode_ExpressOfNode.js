import { sortService } from '../services';

const getSort = async (req, res) => {
  const sortProduct = await sortService.getSort();
  res.status(200).json({
    msg: 'SUCCESS',
    sortProduct,
  });
};

export default { getSort };
