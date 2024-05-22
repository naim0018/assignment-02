import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const postOrder = async(req:Request,res:Response)=>{
   try {
    const {data:orderData} = req.body
    const result = await OrderService.postOrderData(orderData)
    res.status(200).json({
        success:true,
        message:"Orders fetched successfully",
        data:result
    })
   } catch (error) {
    res.status(500).json({
        success:false,
        message:"Orders could not fetched successfully",
        error:error
    })
   }
}

const getAllOrders = async(req:Request,res:Response)=>{
try {
    const query = req.query
    console.log(query)
    const result = await OrderService.getAllOrdersData(query)
    
    res.status(200).json({
        success:true,
        message:"Orders fetched successfully",
        data:result
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message:"Orders could not fetched successfully",
        error:error
    })
}
}

export const OrderController ={
    postOrder,
    getAllOrders
}