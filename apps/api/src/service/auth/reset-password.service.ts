import { hashPassword } from '@/lib/bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resetPasswordService = async (
  userId: string,
  password: string,
) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id: parseInt(userId, 10) },
    });

    if (!user) {
      throw new Error('Account not found');
    }

    const hashedPassword = await hashPassword(password);

    await prisma.user.update({
      where: { id: parseInt(userId, 10) },
      data: {
        password: hashedPassword,
      },
    });

    return {
      message: 'Reset password success',
    };
  } catch (error) {
    throw error;
  }
};