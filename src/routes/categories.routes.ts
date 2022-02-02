import { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
// import CreateCourseService from './CreateCourseService';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  categories.push({
    name,
    description,
    id: uuidv4(),
  });
  return response.send(201);
});
// categoriesRoutes.post('/categories', (request, response) => {
// }){
//   CreateCourseService.execute({
//     name: 'Nodejs',
//     duration: 10,
//     educator: 'Dani'
//   });

//   return response.send(200);
// }

export { categoriesRoutes };
