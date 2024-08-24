import prisma from '../../prisma';
import { hashPassword } from '../../lib/bcrypt';

export const updateProfile = async (
  userId: number,
  updates: Partial<{
    name: string;
    image: string;
    password: string;
  }>
) => {
  try {
    const { name, image, password } = updates;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }
    const data: Partial<{ name: string; image: string; password: string }> = {};
    if (name) {
      data.name = name;
    }
    if (image) {
      data.image = image;
    }
    if (password) {
      const hashedPassword = await hashPassword(password);
      data.password = hashedPassword;
    }
    await prisma.user.update({
      where: { id: userId },
      data,
    });
  } catch (error) {
    throw error;
  }
};