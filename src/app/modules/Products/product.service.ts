import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const getAllProductsData =async()=>{
  
    const result = await ProductModel.find()
    return result
  
}

const createNewProductData=async(value:TProduct)=>{
    
        const result = await ProductModel.create(value)
        return result
   
}

const getProductByIdData=async(id:string)=>{
    
        const findProduct = await ProductModel.findOne({_id:id})
        return findProduct
    

}
export const ProductService ={
    getAllProductsData,
    createNewProductData,
    getProductByIdData
}