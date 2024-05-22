import { ProductModel } from "../Products/product.model"
import { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const postOrderData =async(order:TOrder)=>{


    const result= await OrderModel.create(order)
    return result
}

const getAllOrdersData = async(query:object)=>{

        const result = await OrderModel.find(query)

        console.log(result)
        return result
        
   
}
export const OrderService ={
    postOrderData,
    getAllOrdersData
}