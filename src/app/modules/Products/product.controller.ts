import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createNewProduct = async(req:Request,res:Response)=>{
  
    try {
        const product = req.body.data;
        const result = await ProductService.createNewProductData(product)
        res.status(200).json({
            success:true,
            message:"Product created successfully!",
            data:result
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something is wrong",
            error:error
        })
    }
}
const getAllProduct=async(req:Request,res:Response)=>{

   
    try {
        const result = await ProductService.getAllProductsData()
        res.status(200).json({
            success:true,
            message:"Product fetched successfully!",
            data:result
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something is wrong",
            error:error
        })
    }
}   
const getProductById = async(req:Request,res:Response)=>{
    try {
        const {productId} = req.params
        const result = await ProductService.getProductDataById(productId)
        res.status(200).json({
            success:true,
            message:"Products fetched successfully!",
            data:result
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something is wrong",
            error:error
        })
    }
}
const updateProductById = async(req:Request,res:Response)=>{
    try {
        const {productId} = req.params
        const updateProductData = req.body
        const result = await ProductService.updateProductDataById(productId,updateProductData)   
        res.status(200).json({
            success:true,
            message:"Product updated successfully!",
            data:result
        })   
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:error
        })
    }
}
const deleteProductById =async(req:Request,res:Response)=>{
    try {
        const {productId} = req.params 
        const result = await ProductService.deleteProductDataById(productId)
        res.status(200).json({
            success:true,
            message:"Product deleted successfully!",
            data:result
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:error
        })
    }
}
const searchProductById=async(req:Request,res:Response)=>{
    try {
        const searchTerm = req.query.searchTerm as string
        console.log(searchTerm)
        const result = await ProductService.searchProductDataById(searchTerm)
        res.status(200).json({
            success:true,
            message:`Products matching search term ${searchTerm} fetched successfully!`,
            data:result
        })        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something wen wrong",
            error:error
        })
    }
}

export const ProductControllers ={
    createNewProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    searchProductById
}