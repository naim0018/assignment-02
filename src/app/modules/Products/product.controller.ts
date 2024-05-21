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
        const result = await ProductService.getProductByIdData(productId)
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

export const ProductControllers ={
    createNewProduct,
    getAllProduct,
    getProductById
}