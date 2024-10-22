import React from 'react';

interface Transaction {
  amount: number;
  type: 'credit' | 'debit';
}

interface BalanceSheetProps {
  transactions: Transaction[];
}

const BalanceSheet: React.FC<BalanceSheetProps> = ({ transactions }) => {
  const totalCredits = transactions
    .filter((t) => t.type === 'credit')
    .reduce((total, t) => total + t.amount, 0);
  const totalDebits = transactions
    .filter((t) => t.type === 'debit')
    .reduce((total, t) => total + t.amount, 0);
  const balance = totalCredits - totalDebits;

  const credits = transactions.filter(t => t.type === 'credit');
  const debits = transactions.filter(t => t.type === 'debit');

  return (
    <div>
      <h2>Balance Sheet</h2>
      <div className="balance-summary">
        <h3>Total Balance: {balance}</h3>
        <h4>Total Credits: {totalCredits}</h4>
        <h4>Total Debits: {totalDebits}</h4>
      </div>
      <div className="transaction-columns">
        <div className="transaction-column">
          <h3>Credits</h3>
          <ul>
            {credits.map((transaction, index) => (
              <li key={index}>
                Credit: {transaction.amount}
              </li>
            ))}
          </ul>
        </div>
        <div className="transaction-column">
          <h3>Debits</h3>
          <ul>
            {debits.map((transaction, index) => (
              <li key={index}>
                Debit: {transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
