import express, { Request, Response } from 'express'
import cors from 'cors'
import { ProductRoute } from './app/modules/Products/product.router'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/products',ProductRoute)

app.get('/',(req:Request,res:Response)=>{
    res.send('App Get')
})



export default app