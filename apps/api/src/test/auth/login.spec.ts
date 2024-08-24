/// <reference types="jest" />
import { comparePassword } from '@/lib/bcrypt';
import request from 'supertest';
import App from '@/app';
import { ROLE, User } from '@prisma/client';
import express from 'express';

// Mock PrismaClient directly in the test file
const prismaMock = {
  user: {
    findMany: jest.fn(),
    findFirst: jest.fn(),
  },
};

jest.mock('@/lib/bcrypt');
jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn(() => prismaMock)
  };
});

const requestBody = {
  email: 'mock@mail.com',
  password: 'Admin123',
};

const user: User = {
  id: 1,
  name: 'Mock user',
  email: 'mock@mail.com',
  password: 'hashedPassword',
  emailVerified: false,
  image: null,
  token: null,
  role: ROLE.CUSTOMER,
  referralCode: 'string',
  points: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  provider: 'CREDENTIALS'
};

describe('POST /api/auth/login', () => {
  let app: express.Application;

  beforeAll(() => {
    const appInstance = new App();
    app = appInstance.getApp();
  });

  it('should login user successfully', async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce(user);
    (comparePassword as jest.Mock).mockResolvedValueOnce(true);

    const response = await request(app)
      .post('/api/auth/login')
      .send(requestBody);

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it("should return error if email doesn't exist", async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/auth/login')
      .send(requestBody);

    expect(response.status).toBe(500);
    expect(response.text).toBe('Invalid email address');
  });

  it('should return error if password incorrect', async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce(user);
    (comparePassword as jest.Mock).mockResolvedValueOnce(false);

    const response = await request(app)
      .post('/api/auth/login')
      .send(requestBody);

    expect(response.status).toBe(500);
    expect(response.text).toBe('Incorrect password');
  });
});