import LandingPage from "@/features/landingpage";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Landingpage = async () => {
  const events = await prisma.event.findMany({
    where: {
      startDate: {
        gte: new Date(),
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });

  const serializedEvents = events.map((event) => ({
    ...event,
    startDate: event.startDate.toISOString(),
    endDate: event.endDate.toISOString(),
  }));

  return <LandingPage events={serializedEvents} />;
};

export default Landingpage;
