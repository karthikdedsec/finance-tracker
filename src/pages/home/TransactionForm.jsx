import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid: uid, name: name, amount: amount });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
            type="text"
          />
        </label>
        <label>
          <span>Amount (₹):</span>
          <input
            onChange={(e) => setAmount(e.target.value)}
            required
            value={amount}
            type="number"
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}
export default TransactionForm;
