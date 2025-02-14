import AppError from '@shared/erros/AppErro';
import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import authConfig from '@config/auth';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.body.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing');
  }

  const [, token] = authHeader.split(' '); // pegar somente o token, e não o tipo dele

  try {
    verify(token, authConfig.jwt.secret);
    return next(); // se o token for válido, seguir em frente
  } catch {
    throw new AppError('Invalid JWT token');
  }
}
