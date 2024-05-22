import { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const postOrderData =async(order:TOrder)=>{
    const result= await OrderModel.create(order)
    return result
}

const getAllOrdersData = async()=>{
    const result = await OrderModel.find()
    return result
}
export const OrderService ={
    postOrderData,
    getAllOrdersData
}