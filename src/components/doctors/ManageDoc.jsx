import React from 'react'
import Footer from '../../layouts/Footer'

const ManageDoc = () => {
  return (
    <>
      {/* App container starts */}
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
              Doctors List
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
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title">Doctors List</h5>
                  <a href="add-doctors.html" className="btn btn-primary ms-auto">Add Doctor</a>
                </div>
                <div className="card-body">
                  {/* Table starts */}
                  <div className="table-responsive">
                    <table id="basicExample" className="table truncate m-0 align-middle">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Doctor Name</th>
                          <th>Designation</th>
                          <th className="text-center">Sun</th>
                          <th className="text-center">Mon</th>
                          <th className="text-center">Tue</th>
                          <th className="text-center">Wed</th>
                          <th className="text-center">Thu</th>
                          <th className="text-center">Fri</th>
                          <th className="text-center">Sat</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#0008</td>
                          <td>
                            <img src="assets/images/user.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Allan Stuart
                          </td>
                          <td>Oncologist</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">9AM-2PM</td>
                          <td className="text-center">9AM-2PM</td>
                          <td className="text-center">9AM-2PM</td>
                          <td className="text-center">9AM-2PM</td>
                          <td className="text-center">9AM-2PM</td>
                          <td className="text-center">9AM-2PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0021</td>
                          <td>
                            <img src="assets/images/user1.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Smith White
                          </td>
                          <td>Neurology</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">3PM-5PM</td>
                          <td className="text-center">3PM-5PM</td>
                          <td className="text-center">3PM-5PM</td>
                          <td className="text-center">3PM-5PM</td>
                          <td className="text-center">3PM-5PM</td>
                          <td className="text-center">3PM-5PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0026</td>
                          <td>
                            <img src="assets/images/user2.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Gilbert Sandoval
                          </td>
                          <td>Cardiologist</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">5PM-9PM</td>
                          <td className="text-center">5PM-9PM</td>
                          <td className="text-center">5PM-9PM</td>
                          <td className="text-center">5PM-9PM</td>
                          <td className="text-center">5PM-9PM</td>
                          <td className="text-center">5PM-9PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0039</td>
                          <td>
                            <img src="assets/images/user3.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Bernardo James
                          </td>
                          <td>Clinical Doctor</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">7AM-9AM</td>
                          <td className="text-center">7AM-9AM</td>
                          <td className="text-center">7AM-9AM</td>
                          <td className="text-center">7AM-9AM</td>
                          <td className="text-center">7AM-9AM</td>
                          <td className="text-center">7AM-9AM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0044</td>
                          <td>
                            <img src="assets/images/user4.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Ronald Sullivan
                          </td>
                          <td>Radiologist</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">3PM-9PM</td>
                          <td className="text-center">3PM-9PM</td>
                          <td className="text-center">3PM-9PM</td>
                          <td className="text-center">3PM-9PM</td>
                          <td className="text-center">3PM-9PM</td>
                          <td className="text-center">3PM-9PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0083</td>
                          <td>
                            <img src="assets/images/user5.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Amelia Bruklin
                          </td>
                          <td>Neurologist</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">6PM-8PM</td>
                          <td className="text-center">6PM-8PM</td>
                          <td className="text-center">6PM-8PM</td>
                          <td className="text-center">6PM-8PM</td>
                          <td className="text-center">6PM-8PM</td>
                          <td className="text-center">6PM-8PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0067</td>
                          <td>
                            <img src="assets/images/user2.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Bshton Cozei
                          </td>
                          <td>Pediatrics</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">4PM-7PM</td>
                          <td className="text-center">4PM-7PM</td>
                          <td className="text-center">4PM-7PM</td>
                          <td className="text-center">4PM-7PM</td>
                          <td className="text-center">4PM-7PM</td>
                          <td className="text-center">4PM-7PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0048</td>
                          <td>
                            <img src="assets/images/user3.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            George Bailey
                          </td>
                          <td>Pediatrics</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0058</td>
                          <td>
                            <img src="assets/images/user4.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Andrea Lalema
                          </td>
                          <td>Dentist</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">8AM-4PM</td>
                          <td className="text-center">8AM-4PM</td>
                          <td className="text-center">8AM-4PM</td>
                          <td className="text-center">8AM-4PM</td>
                          <td className="text-center">8AM-4PM</td>
                          <td className="text-center">8AM-4PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0047</td>
                          <td>
                            <img src="assets/images/user3.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Taylor Melon
                          </td>
                          <td>Therapist</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">9AM-3PM</td>
                          <td className="text-center">9AM-3PM</td>
                          <td className="text-center">9AM-3PM</td>
                          <td className="text-center">9AM-3PM</td>
                          <td className="text-center">9AM-3PM</td>
                          <td className="text-center">9AM-3PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#0082</td>
                          <td>
                            <img src="assets/images/user.png" className="img-shadow img-2x rounded-5 me-1" alt="Medical Admin Template" />
                            Meera Gill
                          </td>
                          <td>Gynecologist</td>
                          <td className="text-center text-danger">NA</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td className="text-center">5PM-8PM</td>
                          <td>
                            <div className="d-inline-flex gap-1">
                              <button className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delRow">
                                <i className="ri-delete-bin-line" />
                              </button>
                              <a href="edit-doctors.html" className="btn btn-outline-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                <i className="ri-edit-box-line" />
                              </a>
                              <a href="doctors-profile.html" className="btn btn-outline-info btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                <i className="ri-eye-line" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Table ends */}
                  {/* Modal Delete Row */}
                  <div className="modal fade" id="delRow" tabIndex={-1} aria-labelledby="delRowLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="delRowLabel">
                            Confirm
                          </h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          Are you sure you want to delete the doctor from list?
                        </div>
                        <div className="modal-footer">
                          <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">No</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Yes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row ends */}
        </div>
        {/* App body ends */}
        <Footer/>
      </div>
      {/* App container ends */}

    </>
  )
}

export default ManageDoc