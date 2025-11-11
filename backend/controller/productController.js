import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";


export const addProduct = async (req, res) => {
  try {
    console.log("Received files:", req.files);

    if (!req.files || !req.files.image1) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const image1 = await uploadOnCloudinary(req.files.image1[0].path);
    const image2 = req.files.image2 ? await uploadOnCloudinary(req.files.image2[0].path) : null;
    const image3 = req.files.image3 ? await uploadOnCloudinary(req.files.image3[0].path) : null;
    const image4 = req.files.image4 ? await uploadOnCloudinary(req.files.image4[0].path) : null;

    const productData = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      category: req.body.category,
      subCategory: req.body.subCategory,
      sizes: JSON.parse(req.body.sizes || "[]"),
      bestseller: req.body.bestseller === "true",
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    console.error("AddProduct error:", error.message);
    res.status(500).json({ message: `AddProduct error: ${error.message}` });
  }
};


export const listProduct = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (error) {
    console.error("ListProduct error:", error.message);
    res.status(500).json({ message: `ListProduct error: ${error.message}` });
  }
};


export const removeProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product removed successfully" });
  } catch (error) {
    console.error("RemoveProduct error:", error.message);
    res.status(500).json({ message: `RemoveProduct error: ${error.message}` });
  }
};
