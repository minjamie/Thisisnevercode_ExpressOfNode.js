import { productService } from '../services';

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (err) {
    console.log(err);
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
      msg: message,
    });
  }
};

export default { getProductById };
const getProductBySort = async (req, res) => {
  const { sort } = req.query;
  const product = await productService.getProductBySort(sort);
  res.status(200).send(product);
};

export default {
  getProductBySort,
};
