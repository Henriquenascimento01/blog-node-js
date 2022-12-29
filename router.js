import { Router } from 'express';
import CategoriesController from './app/controllers/CategoriesController.js';
import HomeController from './app/controllers/HomeController.js'


const router = Router();

export default router
    .get('/', HomeController.index)

    .get('/admin/categories/new', CategoriesController.index)
    .post('/categories/create', CategoriesController.insert)