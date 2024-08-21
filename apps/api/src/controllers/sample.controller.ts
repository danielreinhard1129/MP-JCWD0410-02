import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export class SampleController {
  getSampleDataById(
    nextApiReq: NextApiRequest,
    res: Response<any, Record<string, any>>,
  ) {
    throw new Error('Method not implemented.');
  }
  async createSampleData(req: NextApiRequest, res: NextApiResponse) {
    const { name, description, userId } = req.body;
    const sample = await prisma.sample.create({
      data: { name, description, userId: parseInt(userId) },
    });
    return res.json(sample);
  }

  async getSampleData(req: NextApiRequest, res: NextApiResponse) {
    const samples = await prisma.sample.findMany();
    return res.json(samples);
  }

  async getUsers(req: NextApiRequest, res: NextApiResponse) {
    const users = await prisma.user.findMany();
    return res.json(users);
  }

  async getUser(req: NextApiRequest, res: NextApiResponse) {
    const id = parseInt(req.query.id as string);
    const user = await prisma.user.findUnique({ where: { id } });
    return res.json(user);
  }

  async createEvent(req: NextApiRequest, res: NextApiResponse) {
    const { title, description, startDate, endDate, organizerId } = req.body;
    // const event = await prisma.event.create({
    //   data: {
    //     title,
    //     description,
    //     startDate: new Date(startDate),
    //     endDate: new Date(endDate),
    //     organizerId: parseInt(organizerId)
    //   }
    // });
    return res.json(event);
  }

  async getEvents(req: NextApiRequest, res: NextApiResponse) {
    const events = await prisma.event.findMany();
    return res.json(events);
  }

  async getEvent(req: NextApiRequest, res: NextApiResponse) {
    const id = parseInt(req.query.id as string);
    const event = await prisma.event.findUnique({ where: { id } });
    return res.json(event);
  }

  async createTransaction(req: NextApiRequest, res: NextApiResponse) {
    const { userId, eventId, paymentProof } = req.body;
    const transaction = await prisma.transaction.create({
      data: {
        userId: parseInt(userId),
        eventId: parseInt(eventId),
        paymentProof,
      },
    });
    return res.json(transaction);
  }

  async getTransactions(req: NextApiRequest, res: NextApiResponse) {
    const transactions = await prisma.transaction.findMany();
    return res.json(transactions);
  }

  async getTransaction(req: NextApiRequest, res: NextApiResponse) {
    const id = parseInt(req.query.id as string);
    const transaction = await prisma.transaction.findUnique({ where: { id } });
    return res.json(transaction);
  }
}

export default new SampleController();
