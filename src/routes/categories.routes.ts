import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories.ts';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  // const { file }= request;
  // console.log(file);
  // return response.send();
  // return response.send();
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
