import express from 'express';
import { addBrandFunction,showBrandFunction,deleteBrandFunction,updateBrandFunction } from '../controllers/brand.controller.js'

const brandRouter = express.Router();

brandRouter.post('/add-brand',addBrandFunction)

brandRouter.get('/show-brand',showBrandFunction)

brandRouter.delete('/delete-brand/:userid',deleteBrandFunction)

brandRouter.put('/update-brand/:userid',updateBrandFunction)

export default brandRouter;