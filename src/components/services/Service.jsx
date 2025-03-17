import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "http://localhost/00ERP/ReviveMe2.1/"

const ServiceCRUD = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    service_name: '',
    service_description: '',
    cost: '',
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(baseURL+'api/reactservice'); // Replace with your API endpoint
      setServices(response.data.react_services);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.post(baseURL+`api/reactservice/update/`, formData);
      } else {
        await axios.post(baseURL+'api/reactservice/save/', formData);
      }
      fetchServices();
      setFormData({ id:"", service_name: '', service_description: '', cost: '' });
      setEditingId(null);
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setFormData({
      id: service.id,
      service_name: service.service_name,
      service_description: service.service_description,
      cost: service.cost,
    });
  };

  

  const handleDelete = async (id) => {
    try {
      await axios.get(baseURL+`api/reactservice/delete/${id}`);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-header">
          <h5>{editingId ? 'Edit Service' : 'Add Service'}</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="service_name"
                value={formData.service_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Description"
                name="service_description"
                value={formData.service_description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Cost</label>
              <input
                type="number"
                className="form-control"
                placeholder="Cost"
                name="cost"
                value={formData.cost}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update' : 'Add'}
            </button>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5>Services</h5>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.id}</td>
                  <td>{service.service_name}</td>
                  <td>{service.service_description}</td>
                  <td>{service.cost}</td>
                  <td>
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => handleEdit(service)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(service.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceCRUD;