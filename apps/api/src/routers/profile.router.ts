import { Router } from 'express';
import { ProfileController } from '../controllers/profile.controller';

export class ProfileRouter {
  private router: Router;
  private profileController: ProfileController;
  static getRouter: any;

  constructor() {
    this.profileController = new ProfileController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.patch('/update', this.profileController.updateProfile.bind(this.profileController));
    this.router.post('/reset-password', this.profileController.resetPassword.bind(this.profileController));
  }

  getRouter(): Router {
    return this.router;
  }
}

// Add this line at the end of the file
export const profileRouter = new ProfileRouter();