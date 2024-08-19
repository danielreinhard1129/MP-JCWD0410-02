import EventsDetailsPage from "@/features/events/EventDetails";

const EventsDetails = ({ params }: { params: { id: string } }) => {
  return <EventsDetailsPage eventId={Number(params.id)} />;
};

export default EventsDetails;
