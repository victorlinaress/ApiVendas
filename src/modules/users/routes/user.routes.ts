import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UsersController from '../controller/UsersController';
import isAuthenticated from '../middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

// rota para listar todos os usuários, tem que estar autenticado
usersRouter.get('/', isAuthenticated, usersController.index);

// rota para criar um novo usuário, com validação de entrada
usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(), // validação para a senha
    },
  }),
  usersController.create,
);

export default usersRouter;
