import { z } from "zod";

//Order validation with zod
const zOrder = z.object({
    email: z.string().email(), 
    productId: z.string().min(5), 
    price: z.number().positive(), 
    quantity: z.number().int().min(1), 
  });


export default zOrder