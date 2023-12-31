import { useFirestore } from "../../hooks/useFirestore";

import styles from "./Home.module.css";

function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore("transactions");
  console.log(response);
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => {
        return (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>₹{transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>✗</button>
          </li>
        );
      })}
    </ul>
  );
}
export default TransactionList;
