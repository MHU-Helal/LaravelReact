import React, { useState } from 'react';

// Predefined data for patients and services
const patients = [
  { id: '1', name: 'Md. Raqeebul Islam', phone: '123-456-7890', email: 'raqeebul@email.com' },
  { id: '2', name: 'Md. Rana', phone: '987-654-3210', email: 'rana@email.com' },
  { id: '3', name: 'Md. Kader', phone: '987-654-3210', email: 'kader@email.com' },
  { id: '4', name: 'Md. Ashiq', phone: '987-654-3210', email: 'Ashiq@email.com' },
  { id: '5', name: 'Md. Shohag', phone: '987-654-3210', email: 'Shohag@email.com' },
];

const services = [
  { id: '1', service_name: 'Consultation', description: 'General consultation with the doctor', cost: 100 },
  { id: '2', service_name: 'Surgery', description: 'Minor and major surgical procedures', cost: 500 },
  { id: '3', service_name: 'General Checkup', description: 'Routine health checkup', cost: 200 },
  { id: '4', service_name: 'X-Ray', description: 'Radiology imaging for diagnostic purposes', cost: 150 },
];

const DummyInvoice = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [billTotal, setBillTotal] = useState(0);
  const [showInvoice, setShowInvoice] = useState(false);

  const handlePatientChange = (e) => {
    const id = e.target.value;
    setPatientId(id);
    const patient = patients.find((patient) => patient.id === id);
    setPatientData(patient || null);
  };

  const handleAddService = (e) => {
    const serviceId = e.target.value;
    const service = services.find((s) => s.id === serviceId);
    if (service && !selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
      setBillTotal((prevTotal) => prevTotal + service.cost);
    }
  };

  const handleRemoveService = (serviceId) => {
    const updatedServices = selectedServices.filter((s) => s.id !== serviceId);
    const removedService = selectedServices.find((s) => s.id === serviceId);
    setSelectedServices(updatedServices);
    setBillTotal((prevTotal) => prevTotal - removedService.cost);
  };

  const handleProcessInvoice = () => {
    setShowInvoice(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
    setPatientId('');
    setPatientData(null);
    setSelectedServices([]);
    setBillTotal(0);
  };

  return (
    <div className="container mt-5">
      {!showInvoice ? (
        <>
          <div className="card mb-4">
            <div className="card-header">
              <h5>Create Invoice</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Patient ID</label>
                <select
                  className="form-select"
                  value={patientId}
                  onChange={handlePatientChange}
                >
                  <option value="">Select Patient</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name}
                    </option>
                  ))}
                </select>
              </div>

              {patientData && (
                <div className="mb-3">
                  {/* <h6>Patient Details:</h6> */}
                  <p>Name: {patientData.name}</p>
                  <p>Phone: {patientData.phone}</p>
                  <p>Email: {patientData.email}</p>
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Add Services</label>
                <select
                  className="form-select"
                  onChange={handleAddService}
                  defaultValue=""
                >
                  <option value="" disabled>Select Service</option>
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
                          <td>{service.description}</td>
                          <td>${service.cost}</td>
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
        </>
      ) : (
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h5 className='text-center'>Final Invoice For {patientData.name} </h5>
          </div>
          <div className="card-body">
            <h6>Patient Details:</h6>
            <p>Name: {patientData.name}</p>
            <p>Phone: {patientData.phone}</p>
            <p>Email: {patientData.email}</p>

            <h6>Selected Services:</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {selectedServices.map((service) => (
                  <tr key={service.id}>
                    <td>{service.service_name}</td>
                    <td>{service.description}</td>
                    <td>${service.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h6 className='text-right'>Total Amount: ${billTotal}</h6>
            <button
              className="btn btn-danger  mx-auto"
              onClick={handleCloseInvoice}
            >
              Close Invoice
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DummyInvoice;
