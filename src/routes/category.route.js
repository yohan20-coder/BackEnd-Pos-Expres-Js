import {Router} from 'express';
const categoryRoute = Router();
import { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/kategori.controller.js';
import { autenticate } from '../controllers/error.controller.js';

categoryRoute.get('/categorys', autenticate, getAllCategory);
categoryRoute.get('/categorys/:id', autenticate, getCategoryById);
categoryRoute.post('/categorys', autenticate, createCategory);
categoryRoute.put('/categorys/:id', autenticate, updateCategory);
categoryRoute.delete('/categorys/:id', autenticate, deleteCategory);

export default categoryRoute;
