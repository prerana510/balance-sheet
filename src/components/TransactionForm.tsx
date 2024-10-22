import React, { useState } from 'react';

interface TransactionFormProps {
  onAddTransaction: (amount: number, type: 'credit' | 'debit') => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<'credit' | 'debit'>('credit');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount > 0) {
      onAddTransaction(amount, transactionType);
      setAmount(0); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
        required
      />
      <select onChange={(e) => setTransactionType(e.target.value as 'credit' | 'debit')}>
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
