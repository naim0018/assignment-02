import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";
//Post Order Data
const postOrderData = async (order: TOrder) => {
  
  const result = await OrderModel.create(order);
  return result;
};
//getOrder Data
const getAllOrdersData = async (query: object) => {
  const result = await OrderModel.find(query);
  return result;
};
export const OrderService = {
  postOrderData,
  getAllOrdersData,
};
