import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "http://localhost/00ERP/ReviveMe2.1/"

const Invoice = () => {
    const [patientId, setPatientId] = useState(null);
    const [patientData, setPatientData] = useState(null);
    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [billTotal, setBillTotal] = useState(0);

    useEffect(() => {
        fetchServices();
    }, []);

    useEffect(() => {
        if (patientId) {
            fetchPatientData();
        } else {
            setPatientData(null);
            setPatientId(null)
        }
    }, [patientId]);

    const fetchServices = async () => {
        try {
            const response = await axios.get(baseURL + 'api/reactservice'); // Replace with your API endpoint
            setServices(response.data.react_services);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };
    // console.log(patientId);

    const fetchPatientData = async () => {
        try {
            const response = await axios.get(baseURL + `api/reactpatient/${patientId}`); // Replace with your API endpoint
            setPatientData(response.data.react_patients);
        } catch (error) {
            console.error('Error fetching patient data:', error);
        }
    };

    // console.clear();


    const handleAddService = (serviceId) => {
        // const service = services.find((s) => s.id === parseInt(serviceId));
        // const service = services.find((s) => console.log(s.id));

        const parsedServiceId = serviceId;
        const service = services.find((s) => s.id === parsedServiceId); // Match using the correct data type

        console.log(service);


        if (service && !selectedServices.find((s) => s.id == service.id)) {
            setSelectedServices([...selectedServices, service]);
            setBillTotal((prevTotal) => prevTotal + parseFloat(service.cost));
        }
    };

    //   console.log(selectedServices);


    const handleRemoveService = (serviceId) => {
        const updatedServices = selectedServices.filter((s) => s.id !== serviceId);
        const removedService = selectedServices.find((s) => s.id === serviceId);
        setSelectedServices(updatedServices);
        setBillTotal((prevTotal) => prevTotal - parseFloat(removedService.cost));
    };

    // console.log();


    const handleProcessInvoice = async () => {
        try {
            const billResponse = await axios.post(baseURL + 'api/reactbill/save/', {
                patient_id: patientId,
                doctor_id: '',
                total_amount: parseFloat(billTotal),
                bill_date: '',
            });

            // alert(JSON.stringify(billResponse));
            // console.log('Bill response:', billResponse.data)

            const billId = billResponse.data.bill_id;

            // console.log('Bill ID:', billId);
            // let data = JSON.stringify(selectedServices)
            // await Promise.all(

            //     selectedServices.forEach((service) => {
            //         axios.post(baseURL + 'api/reactbilldetail/save/', {
            //             bill_id: billId,
            //             description: service.service_name,
            //             amount: service.cost,
            //         })
            //     }))

            await Promise.all(
                selectedServices.map((service) => {
                    console.log('Service to save:', service);
                    return axios.post(baseURL + 'api/reactbilldetail/save/', {
                        bill_id: parseInt(billId),
                        description: service.service_name,
                        amount: parseFloat(service.cost),
                    });
                })
            );


            alert('Invoice processed successfully!');
            setPatientId(null);
            setPatientData(null);
            setSelectedServices([]);
            setBillTotal(0);
        } catch (error) {
            console.error('Error processing invoice:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card mb-4">
                <div className="card-header">
                    <h5>Create Invoice</h5>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Patient ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={patientId}
                            onChange={(e) => setPatientId(e.target.value)}
                            placeholder="Enter Patient ID"
                        />
                    </div>

                    {patientData && (
                        <div className="mb-3">
                            <h6>Patient Details:</h6>
                            <p>Name: {patientData[0].name}</p>
                            <p>Phone: {patientData[0].phone}</p>
                            <p>Email: {patientData[0].email}</p>
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="form-label">Add Services</label>
                        <select
                            className="form-select"
                            onChange={(e) => handleAddService(e.target.value)}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Service
                            </option>
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {service.service_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedServices.length > 0 && (
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Services</th>
                                        <th>Description</th>
                                        <th>Cost</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedServices.map((service) => (
                                        <tr key={service.id}>
                                            <td>{service.service_name}</td>
                                            <td>{service.service_description}</td>
                                            <td>{service.cost}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleRemoveService(service.id)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="mt-3">
                        <h6>Total: ${billTotal}</h6>
                        <button
                            className="btn btn-success mt-2"
                            onClick={handleProcessInvoice}
                            disabled={!patientData || selectedServices.length === 0}
                        >
                            Process Invoice
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;