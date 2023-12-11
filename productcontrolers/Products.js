let Products = require("../models/Project1");
const createProduct = async (req, res, next) => {
  const { name, title, likes, comment, category } = req.body;

  const createdProduct = new Products({
    name,
    title,
    likes,
    comment,
    category,
  });

  try {
    await createdProduct.save();
  } catch (error) {
    console.log("error2..", error);
  }

  res.status(201).json({ product: createdProduct });
};

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Products.find().exec();
  } catch (error) {
    console.log("error is", error);
  }

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
