import { listService } from '../services';

const getList = async (req, res) => {
  const list = await listService.getList();
  res.status(200).json({
    msg: 'SUCCESS',
    list,
  });
};

export default { getList };
