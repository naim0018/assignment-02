import { Request, Response } from "express";
import { OrderService } from "./order.service";
import zOrder from "./order.validation";
import { ProductModel } from "../Products/product.model";

const postOrder = async (req: Request, res: Response) => {
  const order = zOrder.parse(req.body);
  const productId = order.productId;
  // Find Product
  const product = await ProductModel.findOne({ _id: productId });
  if(!product){
    return res.status(500).json({
      success: false,
      message: "Order not found",
    });
  }
  // Remaining Quantity
  const remainingQuantity =
    (product?.inventory?.quantity as number) - order.quantity;
  if (remainingQuantity < 0) {
    return res.status(500).json({
      success: false,
      message: "Insufficient quantity available in inventory",
    });
  }

  const productInventoryUpdate = await ProductModel.findOneAndUpdate(
    { _id: productId },
    {
      $set: {
        "inventory.quantity": remainingQuantity,
        "inventory.inStock": remainingQuantity>0,
      },
    },
    { new: true }
  );
  const createOrder = await OrderService.postOrderData(req.body);
  res.status(200).json({
    success: true,
    message: "Order created successfully",
    data: createOrder,
  });
};

//get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const result = await OrderService.getAllOrdersData(query);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Orders could not fetched successfully",
      error: error,
    });
  }
};

export const OrderController = {
  postOrder,
  getAllOrders,
};
