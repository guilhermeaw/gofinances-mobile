import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TransactionProvider } from './transaction';

const AppProvider: React.FC = ({ children }) => {
  return (
    <TransactionProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </TransactionProvider>
  );
};

export default AppProvider;
