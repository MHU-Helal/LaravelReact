import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Journals = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch transactions from API
  useEffect(() => {
    axios.get('http://localhost/LaravelTeamProject/public/api/journal') // Adjust the URL based on your API
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

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
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Voucher Ref</th>
              <th>Transaction Date</th>
              <th>Account ID</th>
              <th>Description</th>
              <th>Transaction Against</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.voucher_ref}</td>
                <td>{transaction.transaction_date}</td>
                <td>{transaction.account_id}</td>
                <td>{transaction.description}</td>
                <td>{transaction.transaction_against}</td>
                <td>{transaction.debit}</td>
                <td>{transaction.credit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Journals;
