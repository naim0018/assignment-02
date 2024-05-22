import { Request, Response } from "express";
import { ProductService } from "./product.service";
import ZProductSchema from "./product.validation";

//Create Product
const createNewProduct = async (req: Request, res: Response) => {
  try {
    const { data: product } = req.body;

    //Product Validation with zod
    const zodParseData = ZProductSchema.parse(product);

    const result = await ProductService.createNewProductData(zodParseData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is wrong",
      error: error,
    });
  }
};
//Get All Product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await ProductService.getAllProductsData(
      searchTerm as string
    );
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is wrong",
      error: error,
    });
  }
};
//Get Product By Id
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getProductDataById(productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is wrong",
      error: error,
    });
  }
};
//Update Product By Id
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateProductData = req.body;
    const result = await ProductService.updateProductDataById(
      productId,
      updateProductData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};
//Delete Product By Id
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProductDataById(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

//exported all route
export const ProductControllers = {
  createNewProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
