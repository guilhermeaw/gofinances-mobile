import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import api from '../services/api';

interface Transaction {
  id: string;
  title: string;
  type: string;
  value: number;
  created_at?: Date;
  category: {
    title: string;
  };
}

interface TransactionContext {
  transactions: Transaction[];
  addTransaction(transaction: Omit<Transaction, 'id'>): void;
}

const TransactionContext = createContext<TransactionContext | null>(null);

const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = useCallback(async () => {
    const response = await api.get('/transactions');

    setTransactions(response.data.transactions);
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  const addTransaction = useCallback(
    async (transaction: Transaction) => {
      const response = await api.post('/transactions', {
        title: transaction.title,
        value: transaction.value,
        type: transaction.type,
        category: transaction.category.title,
      });

      setTransactions([response.data, ...transactions]);
    },
    [transactions],
  );

  const value = useMemo(
    () => ({
      addTransaction,
      loadTransactions,
      transactions,
    }),
    [addTransaction, transactions, loadTransactions],
  );

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

function useTransaction(): TransactionContext {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error(`useTransaction must be used within a TransactionProvider`);
  }

  return context;
}

export { TransactionProvider, useTransaction };
