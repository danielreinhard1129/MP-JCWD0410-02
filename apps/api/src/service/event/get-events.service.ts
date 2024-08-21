import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination';
import { Prisma } from '@prisma/client';

interface GetEventsQuery extends PaginationQueryParams {
  search: string;
}

export const getEventsService = async (query: GetEventsQuery) => {
  try {
    const { take, page, sortBy, sortOrder, search } = query;

    const whereClause: Prisma.EventWhereInput = {};

    if (search) {
      whereClause.name = {
        contains: search,
      };
    }

    const events = await prisma.event.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
      include: { User: { select: { name: true } } },
    });

    const count = await prisma.event.count();

    return {
      data: events,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
