import { Request, Response } from 'express';
import * as TransactionService from '../service/auth/transaction-management.service'

export class TransactionManagementController {
  async acceptPayment(req: Request, res: Response): Promise<void> {
    try {
      const result = await TransactionService.acceptPaymentService(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error accepting payment' });
    }
  }

  async rejectPayment(req: Request, res: Response): Promise<void> {
    try {
      const result = await TransactionService.rejectPaymentService(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error rejecting payment' });
    }
  }

  async viewPaymentProofs(req: Request, res: Response): Promise<void> {
    try {
      const result = await TransactionService.viewPaymentProofsService(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error viewing payment proofs' });
    }
  }

  async getAllTransactions(req: Request, res: Response): Promise<void> {
    try {
      const transactions = await TransactionService.getAllTransactionsService();
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching transactions' });
    }
  }

  async getTransactionById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const transaction = await TransactionService.getTransactionByIdService(id);
      if (transaction) {
        res.json(transaction);
      } else {
        res.status(404).json({ error: 'Transaction not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching transaction' });
    }
  }

  async createTransaction(req: Request, res: Response): Promise<void> {
    try {
      const newTransaction = await TransactionService.createTransactionService(req.body);
      res.status(201).json(newTransaction);
    } catch (error) {
      res.status(500).json({ error: 'Error creating transaction' });
    }
  }

  async updateTransaction(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const updatedTransaction = await TransactionService.updateTransactionService(id, req.body);
      res.json(updatedTransaction);
    } catch (error) {
      res.status(500).json({ error: 'Error updating transaction' });
    }
  }

  async deleteTransaction(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await TransactionService.deleteTransactionService(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting transaction' });
    }
  }
}