import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationService {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository) { }

  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificatinAlreadyExists = await this.specificationsRepository.findByName(name);

    if (specificatinAlreadyExists) {
      throw new Error('Specification already exists');
    }

    await this.specificationsRepository.create({ name, description });

  }
}

export { CreateSpecificationService };
