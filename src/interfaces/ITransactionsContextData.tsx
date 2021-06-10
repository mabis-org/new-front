import { ITransactionInput } from "./ITransactionInput";
import { ITransactionProps } from "./ITransactionProps";

export interface ITransactionsContextData {
    transactions: ITransactionProps[];
    createTransaction: (transaction: ITransactionInput) => Promise<void>;
}