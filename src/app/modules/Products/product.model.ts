import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariants } from "./product.interface";

const SVariants = new Schema <TVariants>({
    type:{type:String,required:true},
    value:{type:String,required:true}
})
 const SInventory = new Schema <TInventory>({
    quantity:{type:Number,required:true},
    inStock:{type:Boolean,required:true}
})

const ProductSchema = new Schema<TProduct>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tags:[String],
    variants:[SVariants],
    inventory: SInventory,
        
    
})

export const ProductModel = model<TProduct>('Product',ProductSchema)