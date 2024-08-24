// // import { SampleController } from '@/controllers/sample.controller';
// import { Router } from 'express';

// export class SampleRouter {
//   private router: Router;
//   private sampleController: SampleController;

//   constructor() {
//     this.sampleController = new SampleController();
//     this.router = Router();
//     this.initializeRoutes();
//   }

//   private initializeRoutes(): void {
//     this.router.get('/', (req, res) => this.sampleController.getSampleDataById);
//     this.router.get('/:id', (req, res) => this.sampleController.getSampleDataById);
//     this.router.post('/', (req, res) => this.sampleController.createSampleData);
//   }

//   getRouter(): Router {
//     return this.router;
//   }
// }
