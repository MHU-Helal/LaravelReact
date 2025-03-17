import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../layouts/Footer';

const AddDoc = () => {
  const navigation = useNavigate();
  const [doc, setDoc] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setDoc((prev) => ({
      ...prev,
      [name]: value

    }))
    console.log(doc);

  }

  // alert(doc)
  
  const handleSubmit = ()=>{

    const docsData = new FormData();
    docsData.append('create', 'true')
    docsData.append('name', doc.name)
    docsData.append('email', doc.email)
    docsData.append('phone', doc.phone)
    docsData.append('age', doc.age)
    docsData.append('address', doc.address)
    docsData.append('gender', doc.gender)

    // console.log(docsData);
    

    // doc['create']='true';
    // console.log(doc);
    axios.post("http://localhost/01%20React/React_ERP/src/php/doctorsApi.php", docsData)
      .then(resp => {
        console.log(resp.data);
        navigation("/doctors")
      })
      .catch(error => {
        console.log(error);
      })
  }



  useEffect(() => {
    // handleChange()
  }, [doc])

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
              Add Doctor
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  {/* Custom tabs starts */}
                  <div className="custom-tabs-container">
                    {/* Nav tabs starts */}
                    <ul className="nav nav-tabs" id="customTab2" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA" role="tab" aria-controls="oneA" aria-selected="true"><i className="ri-briefcase-4-line" /> Personal
                          Details</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA" role="tab" aria-controls="twoA" aria-selected="false"><i className="ri-account-pin-circle-line" />
                          Profile and Bio</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" id="tab-threeA" data-bs-toggle="tab" href="#threeA" role="tab" aria-controls="threeA" aria-selected="false"><i className="ri-calendar-check-line" />
                          Availability</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" id="tab-fourA" data-bs-toggle="tab" href="#fourA" role="tab" aria-controls="fourA" aria-selected="false"><i className="ri-lock-password-line" /> Account
                          Details</a>
                      </li>
                    </ul>
                    {/* Nav tabs ends */}
                    {/* Tab content starts */}
                    <div className="tab-content h-350">
                      <div className="tab-pane fade show active" id="oneA" role="tabpanel">
                        {/* Row starts */}
                        <div className="row gx-3">

                          <div className="col-xxl-3 col-sm-6">
                            <div className="mb3">
                              <label className="form-label" htmlFor="a1">Name <span className="text-danger">*</span></label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-account-circle-line" />
                                </span>
                                <input onChange={handleChange} name='name' type="text" className="form-control" id="a1" placeholder="Enter Name" />
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-xxl-3 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="a2">Last Name <span className="text-danger">*</span></label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-account-circle-line" />
                                </span>
                                <input onChange={handleChange} type="text" className="form-control" id="a2" placeholder="Enter Last Name" />
                              </div>
                            </div>
                          </div> */}
                          <div className="col-xxl-3 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="a6">Mobile Number <span className="text-danger">*</span></label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-phone-line" />
                                </span>
                                <input onChange={handleChange} name='phone' type="text" className="form-control" id="a6" placeholder="Enter Mobile Number" />
                              </div>
                            </div>
                          </div>

                          <div className="col-xxl-3 col-lg-3 col-sm-4">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="a3">Age <span className="text-danger">*</span></label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-flower-line" />
                                </span>
                                <input onChange={handleChange} name='age' type="number" className='form-control' />
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-3 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="selectGender1">Gender<span className="text-danger">*</span></label>
                              <div className="m-0">
                                <div className="form-check form-check-inline">
                                  <input onChange={handleChange} className="form-check-input" type="radio" name="gender" id="selectGender1" defaultValue="Male" />
                                  <label className="form-check-label" htmlFor="selectGender1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="gender" id="selectGender2" defaultValue="Female" />
                                  <label className="form-check-label" htmlFor="selectGender2">Female</label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xxl-3 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="a5">Email ID <span className="text-danger">*</span></label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-mail-open-line" />
                                </span>
                                <input onChange={handleChange} name='email' type="email" className="form-control" id="a5" placeholder="Enter Email ID" />
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-6 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="a11">Address</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-projector-line" />
                                </span>
                                <input onChange={handleChange} name='address' type="text" className="form-control" id="a11" placeholder="Enter Address" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Row ends */}
                      </div>
                      <div className="tab-pane fade" id="twoA" role="tabpanel">
                        {/* Row starts */}
                        <div className="row gx-3">
                          <div className="col-sm-2">
                            <div id="dropzone" className="mb-3">
                              <label className="form-label">Upload Profile</label>
                              <form action="https://buybootstrap.com/upload" className="dropzone dz-clickable" id="demo-upload">
                                <div className="dz-message">
                                  <button type="button" className="dz-button">
                                    Click here to upload your photo.</button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <label className="form-label">Write Bio</label>
                            <div id="fullEditor">
                              <h1>Hello,</h1>
                              <br />
                              <p>My name is <strong>Dr. David Kemrin</strong>. Write your bio here.</p>
                            </div>
                          </div>
                        </div>
                        {/* Row ends */}
                      </div>
                      <div className="tab-pane fade" id="threeA" role="tabpanel">
                        {/* Row starts */}
                        <div className="row gx-3">
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="d1">Sun</label>
                              <div className="input-group">
                                <select className="form-select" id="d1">
                                  <option value={0}>From</option>
                                  <option value={1}>7AM</option>
                                  <option value={2}>8AM</option>
                                  <option value={3}>9AM</option>
                                </select>
                                <select className="form-select" id="d1X">
                                  <option value={0}>To</option>
                                  <option value={1}>3PM</option>
                                  <option value={2}>4PM</option>
                                  <option value={3}>5PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="d2">Mon</label>
                              <div className="input-group">
                                <select className="form-select" id="d2">
                                  <option value={0}>From</option>
                                  <option value={1}>7AM</option>
                                  <option value={2}>8AM</option>
                                  <option value={3}>9AM</option>
                                </select>
                                <select className="form-select" id="d2X">
                                  <option value={0}>To</option>
                                  <option value={1}>3PM</option>
                                  <option value={2}>4PM</option>
                                  <option value={3}>5PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="d3">Tue</label>
                              <div className="input-group">
                                <select className="form-select" id="d3">
                                  <option value={0}>From</option>
                                  <option value={1}>7AM</option>
                                  <option value={2}>8AM</option>
                                  <option value={3}>9AM</option>
                                </select>
                                <select className="form-select" id="d3X">
                                  <option value={0}>To</option>
                                  <option value={1}>3PM</option>
                                  <option value={2}>4PM</option>
                                  <option value={3}>5PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="d4">Wed</label>
                              <div className="input-group">
                                <select className="form-select" id="d4">
                                  <option value={0}>From</option>
                                  <option value={1}>7AM</option>
                                  <option value={2}>8AM</option>
                                  <option value={3}>9AM</option>
                                </select>
                                <select className="form-select" id="d4X">
                                  <option value={0}>To</option>
                                  <option value={1}>3PM</option>
                                  <option value={2}>4PM</option>
                                  <option value={3}>5PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="d5">Thu</label>
                              <div className="input-group">
                                <select className="form-select" id="d5">
                                  <option value={0}>From</option>
                                  <option value={1}>7AM</option>
                                  <option value={2}>8AM</option>
                                  <option value={3}>9AM</option>
                                </select>
                                <select className="form-select" id="d5X">
                                  <option value={0}>To</option>
                                  <option value={1}>3PM</option>
                                  <option value={2}>4PM</option>
                                  <option value={3}>5PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="d6">Fri</label>
                              <div className="input-group">
                                <select className="form-select" id="d6">
                                  <option value={0}>From</option>
                                  <option value={1}>7AM</option>
                                  <option value={2}>8AM</option>
                                  <option value={3}>9AM</option>
                                </select>
                                <select className="form-select" id="d6X">
                                  <option value={0}>To</option>
                                  <option value={1}>3PM</option>
                                  <option value={2}>4PM</option>
                                  <option value={3}>5PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="d7">Sat</label>
                              <div className="input-group">
                                <select className="form-select" id="d7">
                                  <option value={0}>From</option>
                                  <option value={1}>7AM</option>
                                  <option value={2}>8AM</option>
                                  <option value={3}>9AM</option>
                                </select>
                                <select className="form-select" id="d7X">
                                  <option value={0}>To</option>
                                  <option value={1}>3PM</option>
                                  <option value={2}>4PM</option>
                                  <option value={3}>5PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Row ends */}
                      </div>
                      <div className="tab-pane fade" id="fourA" role="tabpanel">
                        {/* Row starts */}
                        <div className="row gx-3">
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="u1">User Name</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-account-pin-circle-line" />
                                </span>
                                <input type="text" id="u1" placeholder="Enter username" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="u2">Password</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-lock-password-line" />
                                </span>
                                <input type="password" id="u2" className="form-control" placeholder="Password must be 8-20 characters long." />
                                <button className="btn btn-outline-secondary" type="button">
                                  <i className="ri-eye-line" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="u3">Confirm Password</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ri-lock-password-line" />
                                </span>
                                <input type="password" id="u3" placeholder="Confirm new password" className="form-control" />
                                <button className="btn btn-outline-secondary" type="button">
                                  <i className="ri-eye-off-line" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Row ends */}
                      </div>
                    </div>
                    {/* Tab content ends */}
                  </div>
                  {/* Custom tabs ends */}
                  {/* Card acrions starts */}
                  <div className="d-flex gap-2 justify-content-end mt-4">
                    <a href="doctors-list.html" className="btn btn-outline-secondary">
                      Cancel
                    </a>
                    <a onClick={handleSubmit} className="btn btn-primary">
                      Create Doctor Profile
                    </a>
                  </div>
                  {/* Card acrions ends */}
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

export default AddDoc