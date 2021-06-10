import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

export function App() {

  const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewModalTransactionOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewModalTransactionOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactinModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}