import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UsersController from '../controller/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

// Rota para listar todos os usuários
usersRouter.get('/', usersController.index);

// Rota para criar um novo usuário, com validação de entrada
usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(), // Validação para a senha
    },
  }),
  usersController.create
);

export default usersRouter;
