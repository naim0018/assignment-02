import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const OrderSchema = new Schema<TOrder>({
    email:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        require:true
    }
})

export const OrderModel = model('Order',OrderSchema)