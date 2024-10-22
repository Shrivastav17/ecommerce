import express from 'express';
import { addProduct,showNewProduct ,showProductByCategory,showProductByBrand} from '../controllers/productnew.controller.js';
const adminRouter = express.Router();

adminRouter
//.post('/add-category',addCategory)
.post('/add-product',addProduct)
.get('/show-newproduct',showNewProduct)
.get('/show-product-by-category/:catid',showProductByCategory)
.get('/show-product-by-brand/:brid',showProductByBrand)

export default adminRouter;