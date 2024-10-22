import express from 'express';
import { addCategoryFunction,showCategoryFunction,deleteCategoryFunction,updateCategoryFunction } from '../controllers/category.controller.js'

const categoryRouter = express.Router();

categoryRouter.post('/add-category',addCategoryFunction)

categoryRouter.get('/show-category',showCategoryFunction)

categoryRouter.delete('/delete-category/:userid',deleteCategoryFunction)

categoryRouter.put('/update-category/:userid',updateCategoryFunction)

export default categoryRouter;