// src/controllers/profile.controller.ts

import { Request, Response } from 'express';
import { updateProfile } from '../service/auth/profile.service';

export class ProfileController {
  async updateProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.body.id;
      if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }

      const { name, image, password } = req.body;
      await updateProfile(userId, { name, image, password });

      res.status(200).json({ message: 'Profile update can successfully' });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async resetPassword(req: Request, res: Response): Promise<void> {
    // Implement password reset logic here
    res.status(501).json({ message: 'Password reset not implemented yet' });
  }
}