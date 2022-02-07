import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificatinAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificatinAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationsRepository.create({ name, description });

  }
}

export { CreateSpecificationService };
