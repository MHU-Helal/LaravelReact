import React from "react";
import Loading from "../layouts/Loading";
import Dashboard from "../layouts/Dashboard";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();

const MainPage = () => {
  return (
    <>
      {/* <Loading /> */}
      {/* Page wrapper starts */}
      <div className="page-wrapper">
        {/* App header starts */}
        <div className="app-header d-flex align-items-center">
          {/* Toggle buttons starts */}
          <div className="d-flex">
            <button className="toggle-sidebar">
              <i className="ri-menu-line" />
            </button>
            <button className="pin-sidebar">
              <i className="ri-menu-line" />
            </button>
          </div>
          {/* Toggle buttons ends */}
          {/* App brand starts */}
          <div className="app-brand ms-3">
            <a href="index.html" className="d-lg-block d-none">
              <NavLink to={"/"}>
                <h3 className="text-white mt-2">
                  Revive<span style={{ color: "OrangeRed" }}>Me</span>
                </h3>
              </NavLink>
              {/* <img src="assets/images/logo.svg" className="logo" alt="Medicare Admin Template" /> */}
            </a>
            <a href="index.html" className="d-lg-none d-md-block">
              <NavLink to={"/"}>
                <h3 className="text-white mt-2">
                  Revive<span style={{ color: "OrangeRed" }}>Me</span>
                </h3>
              </NavLink>
              {/* <img src="assets/images/logo-sm.svg" className="logo" alt="Medicare Admin Template" /> */}
            </a>
          </div>
          {/* App brand ends */}
          {/* App header actions starts */}
          <div className="header-actions">
            {/* Search container starts */}
            {/* <div className="search-container d-lg-block d-none mx-3">
<input type="text" className="form-control" id="searchId" placeholder="Search" />
<i className="ri-search-line" />
</div> */}
            {/* Search container ends */}
            {/* Header actions starts */}
            <div className="d-lg-flex d-none gap-2">
              {/* Select country dropdown starts */}
              <div className="dropdown">
                {/* <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<img src="assets/images/flags/1x1/fr.svg" className="header-country-flag" alt="Bootstrap Dashboards" />
</a> */}
                <div className="dropdown-menu dropdown-menu-end dropdown-mini">
                  <div className="country-container">
                    <a href="index.html" className="py-2">
                      <img
                        src="assets/images/flags/1x1/us.svg"
                        alt="Admin Panel"
                      />
                    </a>
                    <a href="index.html" className="py-2">
                      <img
                        src="assets/images/flags/1x1/in.svg"
                        alt="Admin Panels"
                      />
                    </a>
                    <a href="index.html" className="py-2">
                      <img
                        src="assets/images/flags/1x1/br.svg"
                        alt="Admin Dashboards"
                      />
                    </a>
                    <a href="index.html" className="py-2">
                      <img
                        src="assets/images/flags/1x1/tr.svg"
                        alt="Admin Templatess"
                      />
                    </a>
                    <a href="index.html" className="py-2">
                      <img
                        src="assets/images/flags/1x1/gb.svg"
                        alt="Google Admin"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Select country dropdown ends */}
              {/* Notifications dropdown starts */}
              <div className="dropdown">
                {/* <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<i className="ri-list-check-3" />
<span className="count-label warning" />
</a> */}
                <div className="dropdown-menu dropdown-menu-end dropdown-300">
                  <h5 className="fw-semibold px-3 py-2 text-primary">
                    Activity
                  </h5>
                  {/* Scroll starts */}
                  <div className="scroll300">
                    {/* Activity List Starts */}
                    <div className="p-3">
                      <ul className="p-0 activity-list2">
                        <li className="activity-item pb-3 mb-3">
                          <a href="#!">
                            <h5 className="fw-regular">
                              <i className="ri-circle-fill text-danger me-1" />
                              Invoices.
                            </h5>
                            <div className="ps-3 ms-2 border-start">
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <img
                                    src="assets/images/products/1.jpg"
                                    className="img-shadow img-3x rounded-1"
                                    alt="Hospital Admin Templates"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  23 invoices have been paid to the MediCare
                                  Labs.
                                </div>
                              </div>
                              <p className="m-0 small">10:20AM Today</p>
                            </div>
                          </a>
                        </li>
                        <li className="activity-item pb-3 mb-3">
                          <a href="#!">
                            <h5 className="fw-regular">
                              <i className="ri-circle-fill text-info me-1" />
                              Purchased.
                            </h5>
                            <div className="ps-3 ms-2 border-start">
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <img
                                    src="assets/images/products/2.jpg"
                                    className="img-shadow img-3x rounded-1"
                                    alt="Hospital Admin Templates"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  28 new surgical equipments have been
                                  purchased.
                                </div>
                              </div>
                              <p className="m-0 small">04:30PM Today</p>
                            </div>
                          </a>
                        </li>
                        <li className="activity-item pb-3 mb-3">
                          <a href="#!">
                            <h5 className="fw-regular">
                              <i className="ri-circle-fill text-success me-1" />
                              Appointed.
                            </h5>
                            <div className="ps-3 ms-2 border-start">
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <img
                                    src="assets/images/products/8.jpg"
                                    className="img-shadow img-3x rounded-1"
                                    alt="Hospital Admin Templates"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  36 new doctors and 28 staff members appointed.
                                </div>
                              </div>
                              <p className="m-0 small">06:50PM Today</p>
                            </div>
                          </a>
                        </li>
                        <li className="activity-item">
                          <a href="#!">
                            <h5 className="fw-regular">
                              <i className="ri-circle-fill text-warning me-1" />
                              Requested
                            </h5>
                            <div className="ps-3 ms-2 border-start">
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <img
                                    src="assets/images/products/9.jpg"
                                    className="img-shadow img-3x rounded-1"
                                    alt="Hospital Admin Templates"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  Requested for 6 new vehicles for medical
                                  emergency. .
                                </div>
                              </div>
                              <p className="m-0 small">08:30PM Today</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Activity List Ends */}
                  </div>
                  {/* Scroll ends */}
                  {/* View all button starts */}
                  <div className="d-grid m-3">
                    <a href="javascript:void(0)" className="btn btn-primary">
                      View all
                    </a>
                  </div>
                  {/* View all button ends */}
                </div>
              </div>
              {/* Notifications dropdown ends */}
              {/* Notifications dropdown starts */}
              <div className="dropdown">
                {/* <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<i className="ri-alarm-warning-line" />
<span className="count-label success" />
</a> */}
                <div className="dropdown-menu dropdown-menu-end dropdown-300">
                  <h5 className="fw-semibold px-3 py-2 text-primary">Alerts</h5>
                  {/* Scroll starts */}
                  <div className="scroll300">
                    {/* Alert list starts */}
                    <div className="p-3">
                      <div className="d-flex py-2">
                        <div className="icon-box md bg-info rounded-circle me-3">
                          <span className="fw-bold fs-6 text-white">DS</span>
                        </div>
                        <div className="m-0">
                          <h6 className="mb-1 fw-semibold">Douglass Shaw</h6>
                          <p className="mb-1">
                            Appointed as a new President 2014-2025
                          </p>
                          <p className="small m-0 opacity-50">Today, 07:30pm</p>
                        </div>
                      </div>
                      <div className="d-flex py-2">
                        <div className="icon-box md bg-danger rounded-circle me-3">
                          <span className="fw-bold fs-6 text-white">WG</span>
                        </div>
                        <div className="m-0">
                          <h6 className="mb-1 fw-semibold">Willie Garrison</h6>
                          <p className="mb-1">
                            Congratulate, James for new job.
                          </p>
                          <p className="small m-0 opacity-50">Today, 08:00pm</p>
                        </div>
                      </div>
                      <div className="d-flex py-2">
                        <div className="icon-box md bg-warning rounded-circle me-3">
                          <span className="fw-bold fs-6 text-white">TJ</span>
                        </div>
                        <div className="m-0">
                          <h6 className="mb-1 fw-semibold">Terry Jenkins</h6>
                          <p className="mb-1">
                            Lewis added new doctors training schedule.
                          </p>
                          <p className="small m-0 opacity-50">Today, 09:30pm</p>
                        </div>
                      </div>
                    </div>
                    {/* Alert list ends */}
                  </div>
                  {/* Scroll ends */}
                  {/* View all button starts */}
                  <div className="d-grid m-3">
                    <a href="javascript:void(0)" className="btn btn-primary">
                      View all
                    </a>
                  </div>
                  {/* View all button ends */}
                </div>
              </div>
              {/* Notifications dropdown ends */}
              {/* Messages dropdown starts */}
              <div className="dropdown">
                {/* <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<i className="ri-message-3-line" />
<span className="count-label" />
</a> */}
                <div className="dropdown-menu dropdown-menu-end dropdown-300">
                  <h5 className="fw-semibold px-3 py-2 text-primary">
                    Messages
                  </h5>
                  {/* Scroll starts */}
                  <div className="scroll300">
                    {/* Messages list starts */}
                    <div className="p-3">
                      <div className="d-flex py-2">
                        <img
                          src="assets/images/user3.png"
                          className="img-shadow img-3x me-3 rounded-5"
                          alt="Hospital Admin Templates"
                        />
                        <div className="m-0">
                          <h6 className="mb-1 fw-semibold">Recepsonist</h6>
                          <p className="mb-1">
                            Appointed as a new President 2014-2025
                          </p>
                          <p className="small m-0 opacity-50">Today, 07:30pm</p>
                        </div>
                      </div>
                      <div className="d-flex py-2">
                        <img
                          src="assets/images/user1.png"
                          className="img-shadow img-3x me-3 rounded-5"
                          alt="Hospital Admin Templates"
                        />
                        <div className="m-0">
                          <h6 className="mb-1 fw-semibold">Clyde Fowler</h6>
                          <p className="mb-1">
                            Congratulate, James for new job.
                          </p>
                          <p className="small m-0 opacity-50">Today, 08:00pm</p>
                        </div>
                      </div>
                      <div className="d-flex py-2">
                        <img
                          src="assets/images/user4.png"
                          className="img-shadow img-3x me-3 rounded-5"
                          alt="Hospital Admin Templates"
                        />
                        <div className="m-0">
                          <h6 className="mb-1 fw-semibold">Sophie Michiels</h6>
                          <p className="mb-1">
                            Lewis added new doctors training schedule.
                          </p>
                          <p className="small m-0 opacity-50">Today, 09:30pm</p>
                        </div>
                      </div>
                    </div>
                    {/* Messages list ends */}
                  </div>
                  {/* Scroll ends */}
                  {/* View all button starts */}
                  <div className="d-grid m-3">
                    <a href="javascript:void(0)" className="btn btn-primary">
                      View all
                    </a>
                  </div>
                  {/* View all button ends */}
                </div>
              </div>
            </div>
            {/* Header actions ends */}
            {/* Header user settings starts */}
            <div className="dropdown ms-2">
              <a
                id="userSettings"
                className="dropdown-toggle d-flex align-items-center"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="avatar-box">
                  MH
                  <span className="status busy" />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end shadow-lg">
                <div className="px-3 py-2">
                  <span className="small">Admin</span>
                  <h6 className="m-0">M.Helal</h6>
                </div>
                <div className="mx-3 my-2 d-grid">
                  <a href="login.html" className="btn btn-danger">
                    Logout
                  </a>
                </div>
              </div>
            </div>
            {/* Header user settings ends */}
          </div>
          {/* App header actions ends */}
        </div>
        {/* App header ends */}
        {/* Main container starts */}
        <div className="main-container">
          {/* Sidebar wrapper starts */}
          <nav id="sidebar" className="sidebar-wrapper">
            {/* Sidebar profile starts */}
            <div className="sidebar-profile">
              <img
                src="assets/images/user6.png"
                className="img-shadow img-3x me-3 rounded-5"
                alt="Hospital Admin Templates"
              />
              <div className="m-0">
                <h5 className="mb-1 profile-name text-nowrap text-truncate">
                  Assistant
                </h5>
                <p className="m-0 small profile-name text-nowrap text-truncate">
                  Dept Head
                </p>
              </div>
            </div>
            {/* Sidebar profile ends */}
            {/* Sidebar menu starts */}
            <div className="sidebarMenuScroll">
              <ul className="sidebar-menu">
                <li className="active current-page">
                  {/* <a href="index.html">
<i className="ri-home-6-line" />
<span className="menu-text">Hospital Dashboard</span>
</a> */}
                </li>
                <li>
                  {/* <a href="dashboard2.html">
<i className="ri-home-smile-2-line" />
<span className="menu-text">Medical Dashboard</span>
</a> */}
                </li>
                <li>
                  {/* <a href="dashboard3.html">
<i className="ri-home-5-line" />
<span className="menu-text">Dentist Dashboard</span>
</a> */}
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-stethoscope-line" />
                    <span className="menu-text">Doctors</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      {/* <a href="doctor-dashboard.html">Doctors Dashboard</a> */}
                    </li>
                    <li>
                      <NavLink to={"/doctor"}>Doctors Lists</NavLink>
                      {/* <a href="doctors-list.html">Doctors List</a> */}
                    </li>
                    <li>
                      {/* <a href="doctors-cards.html">Doctors Cards</a> */}
                    </li>
                    <li>
                      {/* <a href="doctors-profile.html">Doctors Profile</a> */}
                    </li>
                    <li>{/* <a href="add-doctors.html">Add Doctor</a> */}</li>
                    <li>{/* <a href="edit-doctors.html">Edit Doctor</a> */}</li>
                  </ul>
                </li>
                <li className="treeview">
                  <a>
                    <i className="ri-heart-pulse-line" />
                    <span className="menu-text">Patients</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      {/* <a href="patient-dashboard.html">Patients Dashboard</a> */}
                    </li>
                    <li>
                      <NavLink to={"/patient"}>Patient Management</NavLink>
                      {/* <a href="patients-list.html">Patients List</a> */}
                    </li>
                    <li>{/* <a href="add-patient.html">Add Patient</a> */}</li>
                    <li>
                      {/* <a href="edit-patient.html">Edit Patient Details</a> */}
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-nurse-line" />
                    <span className="menu-text">Staff</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="staff.html">Staff List</a>
                    </li>
                    <li>
                      <a href="add-staff.html">Add Staff</a>
                    </li>
                    <li>
                      <a href="edit-staff.html">Edit Staff Details</a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-dossier-line" />
                    <span className="menu-text">Appointments</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="appointments.html">Appointments</a>
                    </li>
                    <li>
                      <a href="appointments-list.html">Appointments List</a>
                    </li>
                    <li>
                      <a href="book-appointment.html">Book Appointment</a>
                    </li>
                    <li>
                      <a href="edit-appointment.html">Edit Appointment</a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-building-2-line" />
                    <span className="menu-text">Departments</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="departments-list.html">Departments List</a>
                    </li>
                    <li>
                      <a href="add-department.html">Add Department</a>
                    </li>
                    <li>
                      <a href="edit-department.html">Edit Department</a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-secure-payment-line" />
                    <span className="menu-text">Accounts</span>
                  </a>
                  <ul className="treeview-menu">
                    <li><NavLink to={"/transaction"}>Transaction</NavLink></li>
                    <li><NavLink to={"/journal"}>Journal</NavLink></li>
                    <li>
                      <NavLink to={"/invoice"}>Invoice</NavLink>
                    </li>
                    <li>
                      {/* <a href="invoice-details.html">Invoice Details</a> */}
                    </li>
                    <li>
                      {/* <a href="create-invoice.html">Create Invoice</a> */}
                    </li>
                    <li>{/* <a href="expenses.html">Expenses</a> */}</li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-group-2-line" />
                    <span className="menu-text">Human Resources</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="hr-approvals.html">HR Approvals</a>
                    </li>
                    <li>
                      <a href="staff-attendance.html">Attendance</a>
                    </li>
                    <li>
                      <a href="staff-leaves.html">Staff Leaves</a>
                    </li>
                    <li>
                      <a href="staff-holidays.html">Holidays</a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-money-dollar-circle-line" />
                    <span className="menu-text">Salaries</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="salaries.html">Salary List</a>
                    </li>
                    <li>
                      <a href="payslip.html">Payslip</a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-hotel-bed-line" />
                    <span className="menu-text">Rooms</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="room-statistics.html">Statistics</a>
                    </li>
                    <li>
                      <a href="rooms-allotted.html">Rooms Allotted</a>
                    </li>
                    <li>
                      <a href="rooms-by-dept.html">Rooms By Department</a>
                    </li>
                    <li>
                      <a href="available-rooms.html">Available Rooms</a>
                    </li>
                    <li>
                      <a href="book-room.html">Book Room</a>
                    </li>
                    <li>
                      <a href="add-room.html">Add Room</a>
                    </li>
                    <li>
                      <a href="edit-room.html">Edit Room</a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#!">
                    <i className="ri-car-washing-line" />
                    <span className="menu-text">Ambulance</span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="ambulance-list.html">Ambulance List</a>
                    </li>
                    <li>
                      <a href="add-ambulance.html">Add Ambulance</a>
                    </li>
                    <li>
                      <a href="edit-ambulance.html">Edit Ambulance</a>
                    </li>
                    <li>
                      <a href="ambulance-call-list.html">Ambulance Call List</a>
                    </li>
                  </ul>
                </li>
                {/* <li>
<a href="events.html">
<i className="ri-calendar-line" />
<span className="menu-text">Event Management</span>
</a>
</li>
<li>
<a href="gallery.html">
<i className="ri-tent-line" />
<span className="menu-text">Gallery</span>
</a>
</li>
<li>
<a href="news.html">
<i className="ri-news-line" />
<span className="menu-text">News &amp; Updates</span>
</a>
</li>
<li className="treeview">
<a href="#!">
<i className="ri-color-filter-line" />
<span className="menu-text">UI Elements</span>
</a>
<ul className="treeview-menu">
<li>
<a href="alerts.html">Alerts</a>
</li>
<li>
<a href="avatars.html">Avatars</a>
</li>
<li>
<a href="badges.html">Badges</a>
</li>
<li>
<a href="buttons.html">Buttons</a>
</li>
<li>
<a href="button-groups.html">Button Groups</a>
</li>
<li>
<a href="cards.html">Cards</a>
</li>
<li>
<a href="advanced-cards.html">Advanced Cards</a>
</li>
<li>
<a href="dropdowns.html">Dropdowns</a>
</li>
<li>
<a href="list-items.html">List Items</a>
</li>
<li>
<a href="progress.html">Progress Bars</a>
</li>
<li>
<a href="placeholders.html">Placeholders</a>
</li>
<li>
<a href="spinners.html">Spinners</a>
</li>
</ul>
</li>
<li className="treeview">
<a href="#!">
<i className="ri-notification-badge-line" />
<span className="menu-text">Jquery Components</span>
</a>
<ul className="treeview-menu">
<li>
<a href="accordions.html">Accordions</a>
</li>
<li>
<a href="carousel.html">Carousel</a>
</li>
<li>
<a href="modals.html">Modals</a>
</li>
<li>
<a href="popovers.html">Popovers</a>
</li>
<li>
<a href="tabs.html">Tabs</a>
</li>
<li>
<a href="tooltips.html">Tooltips</a>
</li>
</ul>
</li>
<li className="treeview">
<a href="#!">
<i className="ri-terminal-window-line" />
<span className="menu-text">Forms</span>
</a>
<ul className="treeview-menu">
<li>
<a href="form-inputs.html">Form Inputs</a>
</li>
<li>
<a href="form-checkbox-radio.html">Checkbox &amp; Radio</a>
</li>
<li>
<a href="form-file-input.html">File Input</a>
</li>
<li>
<a href="form-validations.html">Validations</a>
</li>
<li>
<a href="date-time-pickers.html">Date Time Pickers</a>
</li>
<li>
<a href="form-masks.html">Input Masks</a>
</li>
<li>
<a href="form-tags.html">Input Tags</a>
</li>
</ul>
</li>
<li>
<a href="tables.html">
<i className="ri-table-line" />
<span className="menu-text">Tables</span>
</a>
</li>
<li className="treeview">
<a href="#!">
<i className="ri-bar-chart-line" />
<span className="menu-text">Graphs</span>
</a>
<ul className="treeview-menu">
<li>
<a href="apex.html">Apex Graphs</a>
</li>
<li>
<a href="morris.html">Morris Graphs</a>
</li>
</ul>
</li>
<li>
<a href="maps.html">
<i className="ri-road-map-line" />
<span className="menu-text">Vector Maps</span>
</a>
</li>
<li>
<a href="icons.html">
<i className="ri-send-plane-2-line" />
<span className="menu-text">Icons</span>
</a>
</li>
<li>
<a href="settings.html">
<i className="ri-settings-5-line" />
<span className="menu-text">Account Settings</span>
</a>
</li>
<li>
<a href="typography.html">
<i className="ri-font-size" />
<span className="menu-text">Typography</span>
</a>
</li>
<li className="treeview">
<a href="#!">
<i className="ri-login-circle-line" />
<span className="menu-text">Login/Signup</span>
</a>
<ul className="treeview-menu">
<li>
<a href="login.html">Login</a>
</li>
<li>
<a href="signup.html">Signup</a>
</li>
<li>
<a href="forgot-password.html">Forgot Password</a>
</li>
<li>
<a href="reset-password.html">Reset Password</a>
</li>
</ul>
</li>
<li>
<a href="page-not-found.html">
<i className="ri-alert-line" />
<span className="menu-text">Page Not Found</span>
</a>
</li>
<li>
<a href="maintenance.html">
<i className="ri-auction-line" />
<span className="menu-text">Maintenance</span>
</a>
</li>
<li className="treeview">
<a href="#!">
<i className="ri-dropdown-list" />
<span className="menu-text">Menu Level</span>
</a>
<ul className="treeview-menu">
<li>
<a href="#!">Level One Link</a>
</li>
<li>
<a href="#!">
Level One Menu
<i className="ri-arrow-right-s-line" />
</a>
<ul className="treeview-menu">
<li>
    <a href="#!">Level Two Link</a>
</li>
<li>
    <a href="#!">Level Two Menu
        <i className="ri-arrow-right-s-line" />
    </a>
    <ul className="treeview-menu">
        <li>
            <a href="#!">Level Three Link</a>
        </li>
        <li>
            <a href="#!">Level Three Link</a>
        </li>
    </ul>
</li>
</ul>
</li>
<li>
<a href="#!">Level One Link</a>
</li>
</ul>
</li>
<li>
<a href="default.html">
<i className="ri-send-plane-line" />
<span className="menu-text">External Link</span>
</a>
</li>
<li>
<a href="#!">
<i className="ri-exchange-line" />
<span className="menu-text">Chip</span>
<span className="badge bg-primary ms-auto">6</span>
</a>
</li>
<li>
<a href="#!">
<i className="ri-ticket-line" />
<span className="menu-text">Badge</span>
<span className="badge border border-primary text-primary ms-auto">Chip</span>
</a>
</li>
<li>
<a href="#!" className="disabled">
<i className="ri-magic-line" />
<span className="menu-text">Disabled Link</span>
</a>
</li> */}
              </ul>
            </div>
            {/* Sidebar menu ends */}
            {/* Sidebar contact starts */}
            <div className="sidebar-contact">
              <p className="fw-light mb-1 text-nowrap text-truncate">
                Emergency Contact
              </p>
              <h5 className="m-0 lh-1 text-nowrap text-truncate">0987654321</h5>
              <i className="ri-phone-line" />
            </div>
            {/* Sidebar contact ends */}
          </nav>
          {/* Sidebar wrapper ends */}
          {/* App container starts */}
          {/* <Dashboard /> */}
          <div className="app-container">
            <div className="app-body">
              <Outlet />
              {/* App container ends */}
            </div>
            <div className="app-footer bg-white">
              <span>© ReviveMe | {year}</span>
            </div>
          </div>
        </div>
        {/* Main container ends */}
      </div>

      <Helmet>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/moment.min.js"></script>
        <script src="assets/vendor/overlay-scroll/jquery.overlayScrollbars.min.js"></script>
        <script src="assets/vendor/overlay-scroll/custom-scrollbar.js"></script>
        <script src="assets/vendor/apex/apexcharts.min.js"></script>
        <script src="assets/vendor/apex/custom/home/patients.js"></script>
        <script src="assets/vendor/apex/custom/home/treatment.js"></script>
        <script src="assets/vendor/apex/custom/home/available-beds.js"></script>
        <script src="assets/vendor/apex/custom/home/earnings.js"></script>
        <script src="assets/vendor/apex/custom/home/gender-age.js"></script>
        <script src="assets/vendor/apex/custom/home/claims.js"></script>
        <script src="assets/js/custom.js"></script>
      </Helmet>
    </>
  );
};

export default MainPage;
