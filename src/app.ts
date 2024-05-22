import express, { Request, Response } from 'express'
import cors from 'cors'
import { ProductRoute } from './app/modules/Products/product.router'
import { OrderRoute } from './app/modules/Orders/order.router'



const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/products',ProductRoute)
app.use('/api/orders',OrderRoute)

app.get('/',(req:Request,res:Response)=>{
    res.send('Product Database Running')
})



export default app