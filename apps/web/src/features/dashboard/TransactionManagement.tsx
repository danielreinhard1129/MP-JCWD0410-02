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

// Define Transaction interface
interface Transaction {
  id: number;
  user: string;
  event: string;
  amount: number;
  status: string;
}

// TransactionForm component
const TransactionForm: React.FC<{
  transaction?: Transaction;
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
  onCancel: () => void;
}> = ({ transaction, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    user: transaction?.user || '',
    event: transaction?.event || '',
    amount: transaction?.amount || 0,
    status: transaction?.status || 'Pending',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="user" value={form.user} onChange={handleChange} placeholder="User" className="mb-2" />
      <Input name="event" value={form.event} onChange={handleChange} placeholder="Event" className="mb-2" />
      <Input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" className="mb-2" />
      <Input name="status" value={form.status} onChange={handleChange} placeholder="Status" className="mb-2" />
      <Button type="submit">Submit</Button>
      <Button type="button" onClick={onCancel}>Cancel</Button>
    </form>
  );
};

const TransactionManagement: React.FC = () => {
  // State management
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, user: 'John Doe', event: 'Summer Concert', amount: 100, status: 'Pending' },
    { id: 2, user: 'Jane Smith', event: 'Tech Conference', amount: 200, status: 'Approved' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // CRUD operations
  const addTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const id = Math.max(...transactions.map(t => t.id), 0) + 1;
    setTransactions([...transactions, { ...newTransaction, id }]);
  };

  const updateTransaction = (updatedTransaction: Transaction) => {
    setTransactions(transactions.map(t => 
      t.id === updatedTransaction.id ? updatedTransaction : t
    ));
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAccept = (id: number) => {
    updateTransaction({ ...transactions.find(t => t.id === id)!, status: 'Approved' });
  };

  const handleReject = (id: number) => {
    updateTransaction({ ...transactions.find(t => t.id === id)!, status: 'Rejected' });
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.user.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    transaction.event.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div>
      <Input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
        className="max-w-sm mb-4"
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4">Add Transaction</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
          </DialogHeader>
          <TransactionForm
            onSubmit={(newTransaction) => {
              addTransaction(newTransaction);
              setEditingTransaction(null);
            }}
            onCancel={() => setEditingTransaction(null)}
          />
        </DialogContent>
      </Dialog>
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
                  <Button className="mr-2" onClick={() => handleReject(transaction.id)}>Reject</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mr-2">Edit</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Transaction</DialogTitle>
                      </DialogHeader>
                      <TransactionForm
                        transaction={transaction}
                        onSubmit={(updatedTransaction) => {
                          updateTransaction({ ...updatedTransaction, id: transaction.id });
                          setEditingTransaction(null);
                        }}
                        onCancel={() => setEditingTransaction(null)}
                      />
                    </DialogContent>
                  </Dialog>
                  <Button onClick={() => deleteTransaction(transaction.id)}>Delete</Button>
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