import { getCustomRepository } from 'typeorm';
import AppError from '@shared/erros/AppErro';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExisty = await usersRepository.findByEmail(email);

    if (emailExisty) {
      throw new AppError('email adress already used');
    }
    const user = usersRepository.create({ name, email, password, });
    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
