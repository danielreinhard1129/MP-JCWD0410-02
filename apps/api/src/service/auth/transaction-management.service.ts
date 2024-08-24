import { PrismaClient } from '@prisma/client';
import prisma from '@/prisma';

const prismaClient = new PrismaClient();

type AcceptPaymentBody = {
  paymentId: string;
};

type RejectPaymentBody = {
  paymentId: string;
};

type ViewPaymentProofsBody = {
  transactionId: string;
};

export const acceptPaymentService = async (body: AcceptPaymentBody) => {
  const payment = await prisma.transaction.update({
    where: { id: parseInt(body.paymentId) },
    data: { status: 'ACCEPTED' },
  });
  return { message: 'Payment accepted successfully', payment };
};

export const rejectPaymentService = async (body: RejectPaymentBody) => {
  const payment = await prisma.transaction.update({
    where: { id: parseInt(body.paymentId) },
    data: { status: 'REJECTED' },
  });
  return { message: 'Payment rejected successfully', payment };
};

export const viewPaymentProofsService = async (body: ViewPaymentProofsBody) => {
  const paymentProofs = await prisma.transaction.findMany({
    where: { status: 'PENDING', id: parseInt(body.transactionId) },
    include: { user: true, event: true },
  });
  return paymentProofs;
};

export const getAllTransactionsService = async () => {
  return await prismaClient.transaction.findMany();
};

export const getTransactionByIdService = async (id: string) => {
  return await prismaClient.transaction.findUnique({
    where: { id: parseInt(id) },
  });
};

export const createTransactionService = async (data: any) => {
  return await prismaClient.transaction.create({
    data: data,
  });
};

export const updateTransactionService = async (id: string, data: any) => {
  return await prismaClient.transaction.update({
    where: { id: parseInt(id) },
    data: data,
  });
};

export const deleteTransactionService = async (id: string) => {
  return await prismaClient.transaction.delete({
    where: { id: parseInt(id) },
  });
};