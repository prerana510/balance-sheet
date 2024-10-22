import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import BalanceSheet from './components/BalanceSheet';

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<{ amount: number; type: 'credit' | 'debit' }[]>([]);

  const handleAddTransaction = (amount: number, type: 'credit' | 'debit') => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { amount, type },
    ]);
  };

  return (
    <div className="app">
      <h1>Ledger Account</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <BalanceSheet transactions={transactions} />
    </div>
  );
};

export default App;
