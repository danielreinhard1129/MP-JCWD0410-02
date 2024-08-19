import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useDebounce } from "../../hooks/useDebounce";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";

// Define the Event type
interface Event {
  id: number;
  name: string;
  date: string;
  capacity?: number;
  availableSeats?: number;
}

// Mock data
const recentEvents: Event[] = [
  { id: 1, name: "Summer Music Festival", date: "2024-09-15", capacity: 1000, availableSeats: 500 },
  { id: 2, name: "Tech Conference 2024", date: "2024-08-22", capacity: 500, availableSeats: 200 },
];

const EventManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = recentEvents.filter((event) =>
    event.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Event</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
            </DialogHeader>
            {/* Add event creation form here */}
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Available Seats</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.capacity}</TableCell>
                <TableCell>{event.availableSeats}</TableCell>
                <TableCell>
                  <Button className="mr-2">Edit</Button>
                  <Button>Create Voucher</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">No events found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EventManagement;