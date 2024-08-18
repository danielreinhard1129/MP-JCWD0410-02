import { forgotPasswordService } from '../service/auth/forgot-passsword.service';
import { loginService } from '../service/auth/login.service';
import { registerService } from '../service/auth/register.service';
import { resetPasswordService } from '../service/auth/reset-password.service';
import { NextFunction, Request, Response } from 'express';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginService(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await forgotPasswordService(req.body.email);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await resetPasswordService(
        res.locals.user.id,
        req.body.password,
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  }

