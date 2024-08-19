import { PrismaClient } from "@prisma/client";


let prisma;

if (process.env.NODE_ENV == "production") {
    prisma = new PrismaClient();
} else {
    const globalObject = globalThis as { [Key: string]: any };
    if (!globalObject.prisma) {
        globalObject.prisma = new PrismaClient();
    } else {
        prisma = globalObject.prisma;
    }
}

export { prisma };