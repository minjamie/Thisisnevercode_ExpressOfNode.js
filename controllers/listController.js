import { listService } from '../services';

const getList = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await listService.getList(id);
    res.status(200).json({
      LIST_DATA: {
        category: 'SHOES',
        product,
      },
    });
  } catch (err) {
    console.log(err);
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
      msg: message,
    });
  }
};

export default { getList };
