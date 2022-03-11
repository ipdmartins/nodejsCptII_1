import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoryService } from './ListCategoryService';

class ListCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryService = container.resolve(ListCategoryService);

    const all = await listCategoryService.execute();

    return response.json(all);
  }
}

export { ListCategoryController };