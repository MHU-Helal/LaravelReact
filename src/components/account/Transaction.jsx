import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

const Transaction = () => {
  console.clear();
    const [accounts, setAccounts] = useState([{

  }]);

  useEffect(() => {
    axios.get('https://helal.devdelwar.com/laravel/public/api/accounts')
      .then(resp => {
        console.clear();
        // console.log(resp.data);
        setAccounts(resp.data);  // Correctly updating the state
      })
      .catch(error => {
        console.error("There was an error fetching the accounts:", error);
      });
  }, []); // Empty dependency array ensures this runs only once, like componentDidMount.


  const [formData, setFormData] = useState({
    voucher_ref: "",
    transaction_date: "",
    account_id: "",
    description: "",
    debit: "",
    credit: "",
    transaction_against_id: "",
    t_a_description: "",
    t_a_debit: "",
    t_a_credit: "",
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://helal.devdelwar.com/laravel/public/api/transactions', formData, {
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      console.log('Response:', response.data);
      // You can handle success here (e.g., show a success message)
    })
    .catch((error) => {
      console.error('Error:', error);
      // You can handle errors here (e.g., show an error message)
    });
    
    // console.log(formData);
    

    // Handle form submission logic (e.g., send data to API)
  };

  return (
    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
      <div className="row mb-3">
        <label htmlFor="voucher_ref" className="col-sm-2 col-form-label">
          Voucher Ref
        </label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            name="voucher_ref"
            id="voucher_ref"
            placeholder="Voucher Ref"
            value={formData.voucher_ref}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="transaction_date" className="col-sm-2 col-form-label">
          Transaction Date
        </label>
        <div className="col-sm-4">
          <input
            type="date"
            className="form-control"
            name="transaction_date"
            id="transaction_date"
            placeholder="Transaction Date"
            value={formData.transaction_date}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* First Account */}
      <div className="row mb-3">
        <label htmlFor="account_id" className="col-sm-2 col-form-label">
          Debit Account
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            name="account_id"
            id="account_id"
            value={formData.account_id}
            onChange={handleChange}
          >
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.code}-{account.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-sm-2">
          <input
            className="form-control"
            name="description"
            id="description"
            placeholder="Narration"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            name="debit"
            id="debit"
            placeholder="Debit"
            value={formData.debit}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            name="credit"
            id="credit"
            placeholder="Credit"
            value={formData.credit}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Second Account */}
      <div className="row mb-3">
        <label
          htmlFor="transaction_against_id"
          className="col-sm-2 col-form-label"
        >
        Credit Account
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            name="transaction_against_id"
            id="transaction_against_id"
            value={formData.transaction_against_id}
            onChange={handleChange}
          >
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.code}-{account.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-sm-2">
          <input
            className="form-control"
            name="t_a_description"
            id="t_a_description"
            placeholder="Narration"
            value={formData.t_a_description}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            name="t_a_debit"
            id="t_a_debit"
            placeholder="Debit"
            value={formData.t_a_debit}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            name="t_a_credit"
            id="t_a_credit"
            placeholder="Credit"
            value={formData.t_a_credit}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default Transaction;
