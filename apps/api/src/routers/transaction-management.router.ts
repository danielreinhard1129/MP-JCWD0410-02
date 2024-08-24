import { Router } from 'express';
import { TransactionManagementController } from '@/controllers/transaction-management.controller';

export class TransactionManagementRouter {
  private router: Router;
  private transactionManagementController: TransactionManagementController;
  static getRouter: any;
    controller: any;

  constructor() {
    this.transactionManagementController = new TransactionManagementController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/accept/:paymentId', this.transactionManagementController.acceptPayment);
    this.router.post('/reject/:paymentId', this.transactionManagementController.rejectPayment);
    this.router.get('/', this.transactionManagementController.getAllTransactions);
    this.router.get('/:id', this.transactionManagementController.getTransactionById);
    this.router.post('/', this.transactionManagementController.createTransaction);
    this.router.patch('/:id', this.transactionManagementController.updateTransaction);
    this.router.delete('/:id', this.transactionManagementController.deleteTransaction);

   //update status dlu berdasar id
   //kirim email
   //
  }

  public getRouter(): Router {
    return this.router;
  }
}