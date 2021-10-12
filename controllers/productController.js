import { productService } from '../services';

const getProduct = async (req, res) => {
  const product = await productService.getProduct();
  res.status(200).json({
    msg: 'SUCCESS',
    product,
  });
};

export default { getProduct };
