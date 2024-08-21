import prisma from '@/prisma';

export const getEventService = async (id: number) => {
  try {
    const blog = await prisma.event.findFirst({
      where: { id },
    });

    if (!blog) {
      throw new Error('Invalid blog id');
    }

    return blog;
  } catch (error) {
    throw error;
  }
};
