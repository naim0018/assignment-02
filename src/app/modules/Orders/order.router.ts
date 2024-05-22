import express from 'express'
import { OrderController } from './order.controller'
const router = express.Router()
//Order Router
router.post('/',OrderController.postOrder)
router.get('/',OrderController.getAllOrders)
export const OrderRoute = router