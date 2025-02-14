import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import { Request, Response } from 'express';
import AppError from '@shared/erros/AppErro';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listUser = new ListUserService();
      console.log(request.user.id);
      const users = await listUser.execute();
      return response.json(users);
    } catch (error: unknown) {
      // logando o erro detalhado
      console.error('Erro ao listar usuários:', error);

      // exibindo mensagem genérica
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();

    try {
      // tentando criar o usuário
      const user = await createUser.execute({ name, email, password });
      return response.status(201).json(user); // sucesso ao criar usuário
    } catch (error: unknown) {
      // Logando o erro detalhado para ver mais informações
      console.error('Erro ao criar o usuário:', error);

      if (error instanceof AppError) {
        // erro personalizado
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }

      // se não for um erro esperado, retorna erro genérico
      console.error('Erro inesperado:', error);
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  }
}
