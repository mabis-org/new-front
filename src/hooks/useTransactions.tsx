import { createContext, useContext, useEffect, useState } from "react";
import { ITransactionInput } from "../interfaces/ITransactionInput";
import { ITransactionProps } from "../interfaces/ITransactionProps";
import { ITransactionsContextData } from "../interfaces/ITransactionsContextData";
import { ITransactionsProviderProps } from "../interfaces/ITransactionsProviderProps";
import { api } from "../services/api";

const TransactionsContext = createContext<ITransactionsContextData>(
    {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {

    const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions')
           .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: ITransactionInput) {
        const response = await api.post('/transactions', { 
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data;
        setTransactions([ ...transactions, transaction ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }} >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
}