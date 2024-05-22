import express from 'express'
import { OrderController } from './order.controller'
const router = express.Router()

router.post('/',OrderController.postOrder)
router.get('/',OrderController.getAllOrders)
export const OrderRoute = router