import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "http://localhost/00ERP/ReviveMe2.1/"

const DoctorCRUD = () => {
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        specialty: '',
        phone: '',
        email: '',
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(baseURL + '/api/reactdoctor'); // Replace with your API endpoint
            setDoctors(response.data.react_doctors);
        } catch (error) {
            console.error('Error fetching doctors:', error);
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
                await axios.post(baseURL + `/api/reactdoctor/update/`, formData);
            } else {
                await axios.post(baseURL + '/api/reactdoctor', formData);
            }
            fetchDoctors();
            setFormData({ name: '', specialty: '', phone: '', email: '' });
            setEditingId(null);
        } catch (error) {
            console.error('Error saving doctor:', error);
        }
    };

    const handleEdit = (doctor) => {
        setEditingId(doctor.id);
        setFormData({
            id: doctor.id,
            name: doctor.name,
            specialty: doctor.specialty,
            phone: doctor.phone,
            email: doctor.email,
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(baseURL + `/api/reactdoctor/delete/${id}`);
            fetchDoctors();
        } catch (error) {
            console.error('Error deleting doctor:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card mb-4">
                <div className="card-header">
                    <h5>{editingId ? 'Edit Doctor' : 'Add Doctor'}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Specialty</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Specialty"
                                name="specialty"
                                value={formData.specialty}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
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
                    <h5>Doctors</h5>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Specialty</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor.id}>
                                    <td>{doctor.id}</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>{doctor.phone}</td>
                                    <td>{doctor.email}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-secondary btn-sm me-2"
                                            onClick={() => handleEdit(doctor)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(doctor.id)}
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

export default DoctorCRUD;