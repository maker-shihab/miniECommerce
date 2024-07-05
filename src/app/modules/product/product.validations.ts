import { z } from 'zod';

const variantSchema = z.object({
  type: z.string().min(1, { message: 'Type is required' }),
  value: z.string().min(1, { message: 'Value is required' }),
});
const inventorySchema = z.object({
  quantity: z.number().min(0, { message: 'Quantity must be 0 or more' }),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.string().min(1, { message: 'Category is required' }),
  tags: z.array(z.string().min(1, { message: 'Tag cannot be empty' })),
  variants: z
    .array(variantSchema)
    .nonempty({ message: 'At least one variant is required' }),
  inventory: inventorySchema,
});

export default productValidationSchema;
