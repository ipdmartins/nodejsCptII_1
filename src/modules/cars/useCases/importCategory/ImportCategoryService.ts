import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import fs from 'fs';
import { parse } from 'csv-parse';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class ImportCategoryService {
  // constructor(private categoriesRepository: ICategoriesRepository){}

  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = parse();

    //o pipe lê o arquivo e joga o conteúdo para onde definirmos
    stream.pipe(parseFile);

    parseFile.on('data', async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryService };
