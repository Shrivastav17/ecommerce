import express from 'express';
import { addProductFunction,showProductFunction,deleteProductFunction,updateProductFunction,showCatwiseProduct,showBrwiseProduct } from '../controllers/product.controller.js'
import { showProductByIdFunction } from '../controllers/productnew.controller.js';



const productRouter = express.Router();

productRouter.post('/add-product',addProductFunction)

productRouter.get('/show-product',showProductFunction)
productRouter.get('/show-product/:proid',showProductByIdFunction)

productRouter.delete('/delete-product/:userid',deleteProductFunction)

productRouter.put('/update-product/:userid',updateProductFunction)

productRouter.get('/show-catwise-product/:categoryid',showCatwiseProduct)

productRouter.get('/show-brwise-product/:brandid',showBrwiseProduct)

export default productRouter;