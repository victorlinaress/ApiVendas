import { getCustomRepository } from 'typeorm';
import AppError from '@shared/erros/AppErro';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';
import { compare } from 'bcryptjs';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
}

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('incorrect email/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('incorrect email/password combination', 401);
    }



    return user;
  }
}

export default CreateSessionsService;
