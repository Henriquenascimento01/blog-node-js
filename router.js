import { Router } from 'express';
import CategoriesController from './Controllers/CategoriesController.js';
import HomeController from './Controllers/HomeController.js'

const router = Router();

export default router
    .get('/', HomeController.index)

    .get('/admin/categories/new', CategoriesController.index)
    .get('/categories/create', CategoriesController.insert)