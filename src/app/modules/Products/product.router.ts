import express from 'express'
import { ProductControllers } from './product.controller'
const router = express.Router()

router.post('/',ProductControllers.createNewProduct)
router.get('/',ProductControllers.getAllProduct)
router.get('/:productId',ProductControllers.getProductById)
router.put('/:productId',ProductControllers.updateProductById)
router.delete('/:productId',ProductControllers.deleteProductById)
router.search('/',ProductControllers.searchProductById)


export const ProductRoute = router

