import { productService } from '../services';

const getProductBySort = async (req, res) => {
  const { sort } = req.query;
  const product = await productService.getProductBySort(sort);
  res.status(200).send(product);
};

export default {
  getProductBySort,
};
