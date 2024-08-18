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

// Mock data
const transactions = [
  { id: 1, user: 'John Doe', event: 'Summer Concert', amount: 100, status: 'Pending' },
  { id: 2, user: 'Jane Smith', event: 'Tech Conference', amount: 200, status: 'Approved' },
];

const TransactionManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.user.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    transaction.event.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const handleAccept = (id: number) => {
    // accept
    console.log(`Accepting transaction ${id}`);
  };

  const handleReject = (id: number) => {
    // reject
    console.log(`Rejecting transaction ${id}`);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
        className="max-w-sm mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.user}</TableCell>
                <TableCell>{transaction.event}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mr-2">View Proof</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Payment Proof</DialogTitle>
                      </DialogHeader>
                      {/* Add payment proof display */}
                    </DialogContent>
                  </Dialog>
                  <Button className="mr-2" onClick={() => handleAccept(transaction.id)}>Accept</Button>
                  <Button onClick={() => handleReject(transaction.id)}>Reject</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">No transactions found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionManagement;