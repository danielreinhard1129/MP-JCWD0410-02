import cors from 'cors';
import express, {
  Express,
  json,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express';
import { PORT } from './config';
// import { SampleRouter } from './routers/sample.router';
import { AuthRouter } from './routers/auth.router';
import { ProfileRouter } from './routers/profile.router';
import { TransactionManagementRouter } from './routers/transaction-management.router';



export default class App {
  // getApp(): express.Application {
  //   throw new Error('Method not implemented.');
  
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  public getApp(): Express {
    return this.app;
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send(err.message);
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    // const sampleRouter = new SampleRouter();
    const authRouter = new AuthRouter();
    const profileRouter = new ProfileRouter();
    const transactionManagementRouter = new TransactionManagementRouter();

    const eventRouter = new EventRouter();

    // // this.app.use('/api/samples', sampleRouter.getRouter());
    this.app.use('/api/events', eventRouter.getRouter());
    this.app.use('/api/auth', authRouter.getRouter());
    this.app.use('/api/profile', profileRouter.getRouter());
    this.app.use('/api/transactions', transactionManagementRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }

}
