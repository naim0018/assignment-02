import { z } from "zod";


const SVariantsSchema = z.object({
    type: z.string().min(1),
    value: z.string().min(1)
});


const SInventorySchema = z.object({
    quantity: z.number().int(),
    inStock: z.boolean()
});

//Product validation with zod
const ZProductSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().positive(),
    category: z.string().min(1),
    tags: z.array(z.string()),
    variants: z.array(SVariantsSchema),
    inventory: SInventorySchema
});

export default ZProductSchema

