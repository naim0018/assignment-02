import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createNewProduct = async(req:Request,res:Response)=>{
    const product = req.body.data;
    const result = await ProductService.createNewProductData(product)
    res.status(200).json({
        success:true,
        message:"Product created successfully!",
        data:result
    })
}

const getAllProducts=async(req:Request,res:Response)=>{

    const result = await ProductService.getAllProductsData()
    res.status(200).json({
        success:true,
        message:"Product retrive successfully!",
        data:result
    })
}   

export const ProductControllers ={
    createNewProduct,
    getAllProducts
}