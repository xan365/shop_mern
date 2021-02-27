import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

/*
 * @desc Fetch all products
    @route GET /api/products
    @access Public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/*
 * @desc Fetch single products
    @route GET /api/products/:id
    @access Public
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    // url中是一个id格式，才会404
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProductById, getProducts };
