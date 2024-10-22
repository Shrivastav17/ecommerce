import express from 'express';
import { addUser,addCategory,addBrand } from '../controllers/auth.controller.js';

const authRouter = express.Router()

authRouter.post('/add-user', addUser)
authRouter.post('/add-category', addCategory)
authRouter.post('/add-brand', addBrand)

export default authRouter