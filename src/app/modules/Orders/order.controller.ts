import { Request, Response } from "express";
import { OrderService } from "./order.service";
import zOrder from "./order.validation";
import { ProductModel } from "../Products/product.model";
import { ProductService } from "../Products/product.service";


//create Order
const postOrder = async (req: Request, res: Response) => {
  try {
    const { data: orderData } = req.body;

    //Order validation
    const zOrderData = zOrder.parse(orderData);
    //find product using productId
    const product: any = await ProductModel.findById(zOrderData.productId);

    //Inventory validation
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Order not found",
      });
    } else if (zOrderData.quantity > product.inventory.quantity) {
      res.status(404).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    } else {
      //Product inventory checking
      product.inventory.quantity -= zOrderData.quantity;
      product.inventory.inStock = product.inventory.quantity > 0 ? true : false;
      // product update
      await ProductService.updateProductDataById(product.productId, product);
      const result = await OrderService.postOrderData(zOrderData);

      await product.save();
      res.status(200).json({
        success: true,
        message: "Orders created successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Orders could not fetched successfully",
      error: error,
    });
  }
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
