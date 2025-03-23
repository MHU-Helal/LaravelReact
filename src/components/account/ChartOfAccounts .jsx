import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChartOfAccounts = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    useEffect(() => {
        axios
            .get("https://helal.devdelwar.com/laravel/public/api/chartOfAccounts") // Adjust the URL based on your API
            .then((response) => {
                setGroups(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Garments Manufacturing ERP</h2>
            <h2>Chart of Accounts</h2>

            <table className="table table-striped table-dark mx-auto">
                <thead>
                    <tr>
                        <th>Account Code</th>
                        <th>Account Name</th>
                    </tr>
                </thead>
                <tbody className='text-start'>
                    {groups?.map((group) => (
                        <React.Fragment key={group.code}>
                            {/* Group Header */}
                            <tr className="table-primary">
                                <td><strong>{group.code}</strong></td>
                                <td><strong>{group.name} ({group.code})</strong></td>
                            </tr>

                            {/* Accounts under the group */}
                            {group.accounts?.map((account) => (
                                <tr key={account.code}>
                                    <td>{account.code}</td>
                                    <td>{account.name} ({account.code})</td>
                                </tr>
                            ))}

                            {/* Children of the group */}
                            {group.children?.map((child) => (
                                <React.Fragment key={child.code}>
                                    <tr className="table-secondary">
                                        <td><strong>{child.code}</strong></td>
                                        <td><strong>{child.name} ({child.code})</strong></td>
                                    </tr>

                                    {/* Accounts under the child group */}
                                    {child.accounts?.map((account) => (
                                        <tr key={account.code}>
                                            <td>{account.code}</td>
                                            <td>{account.name} ({account.code})</td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChartOfAccounts;
