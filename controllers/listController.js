import { listService } from '../services';

const getList = async (req, res) => {
  const product = await listService.getList(id);
  res.status(200).json({
    LIST_DATA: {
      category: 'SHOES',
      product,
    },
  });
};

export default { getList };
