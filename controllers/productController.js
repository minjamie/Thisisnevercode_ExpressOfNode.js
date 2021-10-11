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
