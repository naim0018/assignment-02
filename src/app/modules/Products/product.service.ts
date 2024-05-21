import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const getAllProductsData =async()=>{
   try {
    const result = await ProductModel.find()
    return result
   } catch (error) {
    console.log(error)
   }
}

const createNewProductData=async(value:TProduct)=>{
    try {
        const result = await ProductModel.create(value)
        return result
    } catch (error) {
        console.log(error)
    }
}
export const ProductService ={
    getAllProductsData,
    createNewProductData,
}