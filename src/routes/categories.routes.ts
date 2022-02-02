import {Request, Response, Router } from 'express';
import CreateCourseService from './CreateCourseService';

const categoriesRoutes = Router();

categoriesRoutes.post('/categories', (request, response) => {
  
}){
  CreateCourseService.execute({
    name: 'Nodejs',
    duration: 10,
    educator: 'Dani'
  });

  return response.send(200);
}

export {categoriesRoutes};
