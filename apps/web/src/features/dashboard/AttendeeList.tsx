import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useDebounce } from '../../hooks/useDebounce';

// Mock data
const attendees = [
  { id: 1, name: 'John Doe', event: 'Summer Concert', tickets: 2, totalPaid: 200 },
  { id: 2, name: 'Jane Smith', event: 'Tech Conference', tickets: 1, totalPaid: 100 },
];

const AttendeeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredAttendees = attendees.filter(attendee => 
    attendee.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    attendee.event.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div>
      <Input
        type="text"
        placeholder="Search attendees..."
        value={searchTerm}
        onChange={handleSearch}
        className="max-w-sm mb-4"
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Tickets</TableHead>
            <TableHead>Total Paid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAttendees.length > 0 ? (
            filteredAttendees.map((attendee) => (
              <TableRow key={attendee.id}>
                <TableCell>{attendee.name}</TableCell>
                <TableCell>{attendee.event}</TableCell>
                <TableCell>{attendee.tickets}</TableCell>
                <TableCell>${attendee.totalPaid}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">No attendees found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AttendeeList;