import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TrialBalance = ({ startDate, endDate }) => {
    const [trialBalance, setTrialBalance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [startDateState, setStartDateState] = useState(startDate);
    const [endDateState, setEndDateState] = useState(endDate);

    //  console.clear();
      useEffect(() => {
        axios
          .get("https://helal.devdelwar.com/laravel/public/api/trialBalance") // Adjust the URL based on your API
          .then((response) => {
            setTrialBalance(response.data);
            console.log(response.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      }, []);


    const handlePrint = () => {
        window.print();
    };

    const handleFilter = (e) => {
        e.preventDefault();
        // You can call your API to filter the data by startDateState and endDateState
        // For example, redirect or trigger a request with filtered data
        console.log(`Filtering by dates: ${startDateState} to ${endDateState}`);
    };

    const totalDebit = trialBalance.reduce((sum, account) => sum + account.total_debit, 0);
    const totalCredit = trialBalance.reduce((sum, account) => sum + account.total_credit, 0);
    const totalBalance = trialBalance.reduce((sum, account) => sum + account.balance, 0);

    let debit = 0;
    let credit = 0;

    return (
        <div className="container">
            <h2 className="mb-4">Trial Balance</h2>

            {/* <form onSubmit={handleFilter} className="mb-3 trialController">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="start_date">Start Date</label>
                        <input
                            type="date"
                            id="start_date"
                            name="start_date"
                            className="form-control"
                            value={startDateState}
                            onChange={(e) => setStartDateState(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="end_date">End Date</label>
                        <input
                            type="date"
                            id="end_date"
                            name="end_date"
                            className="form-control"
                            value={endDateState}
                            onChange={(e) => setEndDateState(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-end">
                        <button type="submit" className="btn btn-primary">Filter</button>
                       
                        <button type="button" onClick={handlePrint} className="btn btn-danger ml-2">
                            Print
                        </button>
                    </div>
                </div>
            </form> */}

            {/* <div className="card">
                <div className="card-body"> */}
                    <table className="table table-bordered w-75 mx-auto">
                        <thead className="table-dark">
                            <tr className='text-center'>
                                <th>Account Code</th>
                                <th>Account Name</th>
                                <th>Total Debit</th>
                                <th>Total Credit</th>
                                {/* <th>Balance</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {trialBalance[0]?.map((account) => {
                                debit += Number(account.total_debit);
                                credit += Number(account.total_credit);
                                return (

                                <tr key={account.code}>
                                <td className='text-center'>{account.code}</td>
                                <td>{account.name}</td>
                                <td className='text-end'>{Number(account.total_debit).toFixed(2)} ৳</td>
                                <td className='text-end'>{Number(account.total_credit).toFixed(2)} ৳</td>
                                {/* <td>{Number(account.balance).toFixed(2)}</td> */}
                            </tr>
                                )
                            })}
                        </tbody>
                        <tfoot className="table-secondary">
                            <tr>
                                <th colSpan="2" className='text-end'>Total = </th>
                                <th className='text-end'>{debit} ৳</th>
                                <th className='text-end'>{credit} ৳</th>
                                {/* <th>{totalBalance.toFixed(2)}</th> */}
                            </tr>
                        </tfoot>
                    </table>
                {/* </div>
            </div> */}
        </div>
    );
};

export default TrialBalance;
