import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const getAllProductsData =async(searchTerm?:string)=>{
    if(searchTerm){
        // const product = await new ProductModel()
        // const result = product.save()
        console.log(searchTerm)
        const product = await ProductModel.find({ tags: { $in: [searchTerm] } });
        return product
    }else{
        const result = await ProductModel.find()
        return result
    }

  
}
const createNewProductData=async(value:TProduct)=>{
    
        const result = await ProductModel.create(value)
        return result
   
}
const getProductDataById=async(id:string)=>{  
        const findProduct = await ProductModel.findOne({_id:id})
        return findProduct
}
const updateProductDataById = async(id:string,updatedData:TProduct)=>{
    const updateProduct = await ProductModel.findByIdAndUpdate(id,updatedData,{new:true})
    return updateProduct
}
const deleteProductDataById = async(id:string)=>{
    const deleteById = await ProductModel.deleteOne({_id:id})
    return deleteById
}


export const ProductService ={
    getAllProductsData,
    createNewProductData,
    getProductDataById,
    updateProductDataById,
    deleteProductDataById,
}