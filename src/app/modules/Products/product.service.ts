import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

//get all product
const getAllProductsData = async (searchTerm?: string) => {
  if (searchTerm) {
    // const product = await new ProductModel()
    // const result = product.save()
   
    const product = await ProductModel.find({ $or: [
        { name: { $regex: searchTerm, $options: 'i' } }, 
        { tags: { $in: [searchTerm] } }, 
        { description: { $regex: searchTerm, $options: 'i' } }
    ] });
    return product;
  } else {
    const result = await ProductModel.find();
    return result;
  }
};
//create new product
const createNewProductData = async (value: TProduct) => {
  const result = await ProductModel.create(value);
  return result;
};
//get Product
const getProductDataById = async (id: string) => {
  const findProduct = await ProductModel.findOne({ _id: id });
  return findProduct;
};
//Update Product
const updateProductDataById = async (id: string, updatedData: TProduct) => {
  const updateProduct = await ProductModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updateProduct;
};
//Delete Product
const deleteProductDataById = async (id: string) => {
  const deleteById = await ProductModel.deleteOne({ _id: id });
  return deleteById;
};

export const ProductService = {
  getAllProductsData,
  createNewProductData,
  getProductDataById,
  updateProductDataById,
  deleteProductDataById,
};
