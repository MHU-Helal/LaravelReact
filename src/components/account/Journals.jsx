import { useEffect, useState } from "react";
import axios from "axios";

const Journals = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch transactions from API
  console.clear();
  useEffect(() => {
    axios
      .get("http://localhost/LaravelTeamProject/public/api/journal") // Adjust the URL based on your API
      .then((response) => {
        setTransactions(response.data);
        console.log(transactions);

        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  console.log(transactions);

  // If loading or error, display a message
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Accounting Journal</h2>

      {/* Transactions Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-dark text-center rounded">
          <thead>
            <tr>
              <th className="w-25">Transaction Date</th>
              <th>Account</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="text-center">{transaction.transaction_date}</td>
                <td className="text-start">{transaction.account.name}</td>
                <td className="text-start">{transaction.description}</td>
                <td className="text-end">{transaction.debit>0? transaction.debit+" ৳": ""}</td>
                <td className="text-end">{transaction.credit>0? transaction.credit+" ৳": ""}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-end fw-bold">
                Balance
              </td>
              <td className="text-end fw-bold">
                {/* Ensure debit is a number */}
                {transactions
                  .reduce(
                    (acc, transaction) =>
                      acc + (Number(transaction.debit) || 0),
                    0
                  )
                  .toFixed(2)} ৳
              </td>
              <td className="text-end fw-bold">
                {/* Ensure credit is a number */}
                {transactions
                  .reduce(
                    (acc, transaction) =>
                      acc + (Number(transaction.credit) || 0),
                    0
                  )
                  .toFixed(2)} ৳
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Journals;
