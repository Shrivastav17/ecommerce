import express from 'express';
import { myfunc } from '../controllers/category-brand.controller.js';

const router = express.Router()

router.get('/',myfunc)

export default router;