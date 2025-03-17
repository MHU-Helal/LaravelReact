import React from 'react'
import Footer from '../../layouts/Footer'

const BookAppointment = () => {
    
    return (
        <>
            <div className="app-container">
                {/* App hero header starts */}
                <div className="app-hero-header d-flex align-items-center">
                    {/* Breadcrumb starts */}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <i className="ri-home-8-line lh-1 pe-3 me-3 border-end" />
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item text-primary" aria-current="page">
                            Book Appointment
                        </li>
                    </ol>
                    {/* Breadcrumb ends */}
                    {/* Sales stats starts */}
                    <div className="ms-auto d-lg-flex d-none flex-row">
                        <div className="d-flex flex-row gap-1 day-sorting">
                            <button className="btn btn-sm btn-primary">Today</button>
                            <button className="btn btn-sm">7d</button>
                            <button className="btn btn-sm">2w</button>
                            <button className="btn btn-sm">1m</button>
                            <button className="btn btn-sm">3m</button>
                            <button className="btn btn-sm">6m</button>
                            <button className="btn btn-sm">1y</button>
                        </div>
                    </div>
                    {/* Sales stats ends */}
                </div>
                {/* App Hero header ends */}
                {/* App body starts */}
                <div className="app-body">
                    {/* Row starts */}
                    <div className="row gx-3">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Book Appointment</h5>
                                </div>
                                <div className="card-body">
                                    {/* Row starts */}
                                    <div className="row gx-3">
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a1">Patient Name</label>
                                                <input type="text" className="form-control" id="a1" placeholder="Enter fullname" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a2">Patient Email</label>
                                                <input type="email" className="form-control" id="a2" placeholder="Enter email address" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a3">Gender</label>
                                                <select className="form-select" id="a3">
                                                    <option value={0}>Select</option>
                                                    <option value={1}>Male</option>
                                                    <option value={2}>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a4">Age</label>
                                                <input type="number" className="form-control" id="a4" placeholder="Enter age" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a5">Patient Phone</label>
                                                <input type="text" className="form-control" id="a5" placeholder="Enter phone number" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a6">Select Date</label>
                                                <input type="date" className="form-control" id="a6" placeholder="Select date" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a7">Select Time</label>
                                                <input type="time" className="form-control" id="a7" placeholder="Select time" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a8">Speacilist Doctor</label>
                                                <select className="form-select" id="a8">
                                                    <option value={0}>Select</option>
                                                    <option value={1}>Gynecologist</option>
                                                    <option value={2}>Psychiatrists</option>
                                                    <option value={3}>Surgeon</option>
                                                    <option value={4}>Urologist</option>
                                                    <option value={5}>Paediatrician</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="a9">Problem</label>
                                                <textarea className="form-control" id="a9" placeholder="Enter Problem" rows={3} defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="d-flex gap-2 justify-content-end">
                                                <a href="appointments-list.html" className="btn btn-outline-secondary">
                                                    Cancel
                                                </a>
                                                <a href="appointments-list.html" className="btn btn-primary">
                                                    Book Appointment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Row ends */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Row ends */}
                </div>
                {/* App body ends */}
                <Footer/>
            </div>

        </>
    )
}

export default BookAppointment