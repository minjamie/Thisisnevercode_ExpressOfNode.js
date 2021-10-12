import { listService } from '../services';

const getList = async (req, res) => {
  const id = req.params.id;
  const list = await listService.getList(id);
  res.status(200).json({
    msg: 'SUCCESS',
    list,
  });
};

export default { getList };
