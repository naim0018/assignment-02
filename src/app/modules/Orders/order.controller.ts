import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";
import zOrder from "./order.validation";

const postOrder = async(req:Request,res:Response)=>{
   try {
    const {data:orderData} = req.body
    const zOrderData = zOrder.parse(orderData)
    const result = await OrderService.postOrderData(zOrderData)
    res.status(200).json({
        success:true,
        message:"Orders created successfully",
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