import { NextFunction, Request, Response } from 'express';
import { verify, VerifyOptions } from 'jsonwebtoken';

// Assuming config.ts is in the same directory
import { JWT_SECRET } from '@/config';

interface PayloadToken {
  id: number;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send({
      message: 'token is missing',
    });
  }

  const verifyOptions: VerifyOptions = {
    algorithms: ['HS256'], // or whatever algorithm you're using
  };

  verify(token, JWT_SECRET, verifyOptions, (err, payload) => {
    if (err) {
      if (err instanceof Error && err.name === 'TokenExpiredError') {
        return res.status(403).send({ message: 'token expired' });
      } else {
        return res.status(403).send({ message: 'unauthorized' });
      }
    }

    res.locals.user = payload as PayloadToken;

    next();
  });
};