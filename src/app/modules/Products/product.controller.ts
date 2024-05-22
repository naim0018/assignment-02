import { Request, Response } from "express";
import { ProductService } from "./product.service";
import ZProductSchema from "./product.validation";

const createNewProduct = async (req: Request, res: Response) => {
  try {

    const {data:product} = req.body;
    console.log({product}) 
 
    const zodParseData = ZProductSchema.parse(product)
    console.log(zodParseData)

    const result = await ProductService.createNewProductData(zodParseData)

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
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
   
    const result = await ProductService.getAllProductsData(searchTerm as string);
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

export const ProductControllers = {
  createNewProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
