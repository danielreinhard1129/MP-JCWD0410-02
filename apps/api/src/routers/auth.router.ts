import { AuthController } from '@/controllers/auth.controller';
// import { SampleController } from '@/controllers/sample.controller';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', (req, res) => this.authController.register);
    this.router.post('/login', (req, res) => this.authController.login);
  }

  getRouter(): Router {
    return this.router;
  }
}
