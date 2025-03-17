const Sidebar2 = () => {
  return (
    <>
      <nav id="sidebar" className="sidebar-wrapper">
        {/* {"{"}/* Sidebar profile starts */}
        <div className="sidebar-profile">
          <img
            src="assets/images/user6.png"
            className="img-shadow img-3x me-3 rounded-5"
            alt="Hospital Admin Templates"
          />
          <div className="m-0">
            <h5 className="mb-1 profile-name text-nowrap text-truncate">
              Nick Gonzalez
            </h5>
            <p className="m-0 small profile-name text-nowrap text-truncate">
              Dept Admin
            </p>
          </div>
        </div>
        <div className="sidebarMenuScroll">
          <ul className="sidebar-menu">
            <li className="active current-page">
              <a href="index.html">
                <i className="ri-home-6-line">
                  <span className="menu-text">Hospital Dashboard</span>
                </i>
              </a>
              <i className="ri-home-6-line"></i>
            </li>
            <i className="ri-home-6-line">
              <li>
                <a href="dashboard2.html">
                  <i className="ri-home-smile-2-line">
                    <span className="menu-text">Medical Dashboard</span>
                  </i>
                </a>
                <i className="ri-home-smile-2-line"></i>
              </li>
              <i className="ri-home-smile-2-line">
                <li>
                  <a href="dashboard3.html">
                    <i className="ri-home-5-line">
                      <span className="menu-text">Dentist Dashboard</span>
                    </i>
                  </a>
                  <i className="ri-home-5-line"></i>
                </li>
                <i className="ri-home-5-line">
                  <li className="treeview">
                    <a href="#!">
                      <i className="ri-stethoscope-line">
                        <span className="menu-text">Doctors</span>
                      </i>
                    </a>
                    <i className="ri-stethoscope-line">
                      <ul className="treeview-menu">
                        <li>
                          <a href="doctor-dashboard.html">Doctors Dashboard</a>
                        </li>
                        <li>
                          <a href="doctors-list.html">Doctors List</a>
                        </li>
                        <li>
                          <a href="doctors-cards.html">Doctors Cards</a>
                        </li>
                        <li>
                          <a href="doctors-profile.html">Doctors Profile</a>
                        </li>
                        <li>
                          <a href="add-doctors.html">Add Doctor</a>
                        </li>
                        <li>
                          <a href="edit-doctors.html">Edit Doctor</a>
                        </li>
                      </ul>
                    </i>
                  </li>
                  <i className="ri-stethoscope-line">
                    <li className="treeview">
                      <a href="#!">
                        <i className="ri-heart-pulse-line">
                          <span className="menu-text">Patients</span>
                        </i>
                      </a>
                      <i className="ri-heart-pulse-line">
                        <ul className="treeview-menu">
                          <li>
                            <a href="patient-dashboard.html">
                              Patients Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="patients-list.html">Patients List</a>
                          </li>
                          <li>
                            <a href="add-patient.html">Add Patient</a>
                          </li>
                          <li>
                            <a href="edit-patient.html">Edit Patient Details</a>
                          </li>
                        </ul>
                      </i>
                    </li>
                    <i className="ri-heart-pulse-line">
                      <li className="treeview">
                        <a href="#!">
                          <i className="ri-nurse-line">
                            <span className="menu-text">Staff</span>
                          </i>
                        </a>
                        <i className="ri-nurse-line">
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
                        </i>
                      </li>
                      <i className="ri-nurse-line">
                        <li className="treeview">
                          <a href="#!">
                            <i className="ri-dossier-line">
                              <span className="menu-text">Appointments</span>
                            </i>
                          </a>
                          <i className="ri-dossier-line">
                            <ul className="treeview-menu">
                              <li>
                                <a href="appointments.html">Appointments</a>
                              </li>
                              <li>
                                <a href="appointments-list.html">
                                  Appointments List
                                </a>
                              </li>
                              <li>
                                <a href="book-appointment.html">
                                  Book Appointment
                                </a>
                              </li>
                              <li>
                                <a href="edit-appointment.html">
                                  Edit Appointment
                                </a>
                              </li>
                            </ul>
                          </i>
                        </li>
                        <i className="ri-dossier-line">
                          <li className="treeview">
                            <a href="#!">
                              <i className="ri-building-2-line">
                                <span className="menu-text">Departments</span>
                              </i>
                            </a>
                            <i className="ri-building-2-line">
                              <ul className="treeview-menu">
                                <li>
                                  <a href="departments-list.html">
                                    Departments List
                                  </a>
                                </li>
                                <li>
                                  <a href="add-department.html">
                                    Add Department
                                  </a>
                                </li>
                                <li>
                                  <a href="edit-department.html">
                                    Edit Department
                                  </a>
                                </li>
                              </ul>
                            </i>
                          </li>
                          <i className="ri-building-2-line">
                            <li className="treeview">
                              <a href="#!">
                                <i className="ri-secure-payment-line">
                                  <span className="menu-text">Accounts</span>
                                </i>
                              </a>
                              <i className="ri-secure-payment-line">
                                <ul className="treeview-menu">
                                  <li>
                                    <a href="income.html">Income</a>
                                  </li>
                                  <li>
                                    <a href="payments.html">Payments</a>
                                  </li>
                                  <li>
                                    <a href="invoices.html">Invoices</a>
                                  </li>
                                  <li>
                                    <a href="invoice-details.html">
                                      Invoice Details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="create-invoice.html">
                                      Create Invoice
                                    </a>
                                  </li>
                                  <li>
                                    <a href="expenses.html">Expenses</a>
                                  </li>
                                </ul>
                              </i>
                            </li>
                            <i className="ri-secure-payment-line">
                              <li className="treeview">
                                <a href="#!">
                                  <i className="ri-group-2-line">
                                    <span className="menu-text">
                                      Human Resources
                                    </span>
                                  </i>
                                </a>
                                <i className="ri-group-2-line">
                                  <ul className="treeview-menu">
                                    <li>
                                      <a href="hr-approvals.html">
                                        HR Approvals
                                      </a>
                                    </li>
                                    <li>
                                      <a href="staff-attendance.html">
                                        Attendance
                                      </a>
                                    </li>
                                    <li>
                                      <a href="staff-leaves.html">
                                        Staff Leaves
                                      </a>
                                    </li>
                                    <li>
                                      <a href="staff-holidays.html">Holidays</a>
                                    </li>
                                  </ul>
                                </i>
                              </li>
                              <i className="ri-group-2-line">
                                <li className="treeview">
                                  <a href="#!">
                                    <i className="ri-money-dollar-circle-line">
                                      <span className="menu-text">
                                        Salaries
                                      </span>
                                    </i>
                                  </a>
                                  <i className="ri-money-dollar-circle-line">
                                    <ul className="treeview-menu">
                                      <li>
                                        <a href="salaries.html">Salary List</a>
                                      </li>
                                      <li>
                                        <a href="payslip.html">Payslip</a>
                                      </li>
                                    </ul>
                                  </i>
                                </li>
                                <i className="ri-money-dollar-circle-line">
                                  <li className="treeview">
                                    <a href="#!">
                                      <i className="ri-hotel-bed-line">
                                        <span className="menu-text">Rooms</span>
                                      </i>
                                    </a>
                                    <i className="ri-hotel-bed-line">
                                      <ul className="treeview-menu">
                                        <li>
                                          <a href="room-statistics.html">
                                            Statistics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="rooms-allotted.html">
                                            Rooms Allotted
                                          </a>
                                        </li>
                                        <li>
                                          <a href="rooms-by-dept.html">
                                            Rooms By Department
                                          </a>
                                        </li>
                                        <li>
                                          <a href="available-rooms.html">
                                            Available Rooms
                                          </a>
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
                                    </i>
                                  </li>
                                  <i className="ri-hotel-bed-line">
                                    <li className="treeview">
                                      <a href="#!">
                                        <i className="ri-car-washing-line">
                                          <span className="menu-text">
                                            Ambulance
                                          </span>
                                        </i>
                                      </a>
                                      <i className="ri-car-washing-line">
                                        <ul className="treeview-menu">
                                          <li>
                                            <a href="ambulance-list.html">
                                              Ambulance List
                                            </a>
                                          </li>
                                          <li>
                                            <a href="add-ambulance.html">
                                              Add Ambulance
                                            </a>
                                          </li>
                                          <li>
                                            <a href="edit-ambulance.html">
                                              Edit Ambulance
                                            </a>
                                          </li>
                                          <li>
                                            <a href="ambulance-call-list.html">
                                              Ambulance Call List
                                            </a>
                                          </li>
                                        </ul>
                                      </i>
                                    </li>
                                    <i className="ri-car-washing-line">
                                      <li>
                                        <a href="events.html">
                                          <i className="ri-calendar-line">
                                            <span className="menu-text">
                                              Event Management
                                            </span>
                                          </i>
                                        </a>
                                        <i className="ri-calendar-line"></i>
                                      </li>
                                      <i className="ri-calendar-line">
                                        <li>
                                          <a href="gallery.html">
                                            <i className="ri-tent-line">
                                              <span className="menu-text">
                                                Gallery
                                              </span>
                                            </i>
                                          </a>
                                          <i className="ri-tent-line"></i>
                                        </li>
                                        <i className="ri-tent-line">
                                          <li>
                                            <a href="news.html">
                                              <i className="ri-news-line">
                                                <span className="menu-text">
                                                  News &amp; Updates
                                                </span>
                                              </i>
                                            </a>
                                            <i className="ri-news-line"></i>
                                          </li>
                                          <i className="ri-news-line">
                                            <li className="treeview">
                                              <a href="#!">
                                                <i className="ri-color-filter-line">
                                                  <span className="menu-text">
                                                    UI Elements
                                                  </span>
                                                </i>
                                              </a>
                                              <i className="ri-color-filter-line">
                                                <ul className="treeview-menu">
                                                  <li>
                                                    <a href="alerts.html">
                                                      Alerts
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="avatars.html">
                                                      Avatars
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="badges.html">
                                                      Badges
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="buttons.html">
                                                      Buttons
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="button-groups.html">
                                                      Button Groups
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="cards.html">
                                                      Cards
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="advanced-cards.html">
                                                      Advanced Cards
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="dropdowns.html">
                                                      Dropdowns
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="list-items.html">
                                                      List Items
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="progress.html">
                                                      Progress Bars
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="placeholders.html">
                                                      Placeholders
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="spinners.html">
                                                      Spinners
                                                    </a>
                                                  </li>
                                                </ul>
                                              </i>
                                            </li>
                                            <i className="ri-color-filter-line">
                                              <li className="treeview">
                                                <a href="#!">
                                                  <i className="ri-notification-badge-line">
                                                    <span className="menu-text">
                                                      Jquery Components
                                                    </span>
                                                  </i>
                                                </a>
                                                <i className="ri-notification-badge-line">
                                                  <ul className="treeview-menu">
                                                    <li>
                                                      <a href="accordions.html">
                                                        Accordions
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a href="carousel.html">
                                                        Carousel
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a href="modals.html">
                                                        Modals
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a href="popovers.html">
                                                        Popovers
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a href="tabs.html">
                                                        Tabs
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a href="tooltips.html">
                                                        Tooltips
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </i>
                                              </li>
                                              <i className="ri-notification-badge-line">
                                                <li className="treeview">
                                                  <a href="#!">
                                                    <i className="ri-terminal-window-line">
                                                      <span className="menu-text">
                                                        Forms
                                                      </span>
                                                    </i>
                                                  </a>
                                                  <i className="ri-terminal-window-line">
                                                    <ul className="treeview-menu">
                                                      <li>
                                                        <a href="form-inputs.html">
                                                          Form Inputs
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="form-checkbox-radio.html">
                                                          Checkbox &amp; Radio
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="form-file-input.html">
                                                          File Input
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="form-validations.html">
                                                          Validations
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="date-time-pickers.html">
                                                          Date Time Pickers
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="form-masks.html">
                                                          Input Masks
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a href="form-tags.html">
                                                          Input Tags
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </i>
                                                </li>
                                                <i className="ri-terminal-window-line">
                                                  <li>
                                                    <a href="tables.html">
                                                      <i className="ri-table-line">
                                                        <span className="menu-text">
                                                          Tables
                                                        </span>
                                                      </i>
                                                    </a>
                                                    <i className="ri-table-line"></i>
                                                  </li>
                                                  <i className="ri-table-line">
                                                    <li className="treeview">
                                                      <a href="#!">
                                                        <i className="ri-bar-chart-line">
                                                          <span className="menu-text">
                                                            Graphs
                                                          </span>
                                                        </i>
                                                      </a>
                                                      <i className="ri-bar-chart-line">
                                                        <ul className="treeview-menu">
                                                          <li>
                                                            <a href="apex.html">
                                                              Apex Graphs
                                                            </a>
                                                          </li>
                                                          <li>
                                                            <a href="morris.html">
                                                              Morris Graphs
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </i>
                                                    </li>
                                                    <i className="ri-bar-chart-line">
                                                      <li>
                                                        <a href="maps.html">
                                                          <i className="ri-road-map-line">
                                                            <span className="menu-text">
                                                              Vector Maps
                                                            </span>
                                                          </i>
                                                        </a>
                                                        <i className="ri-road-map-line"></i>
                                                      </li>
                                                      <i className="ri-road-map-line">
                                                        <li>
                                                          <a href="icons.html">
                                                            <i className="ri-send-plane-2-line">
                                                              <span className="menu-text">
                                                                Icons
                                                              </span>
                                                            </i>
                                                          </a>
                                                          <i className="ri-send-plane-2-line"></i>
                                                        </li>
                                                        <i className="ri-send-plane-2-line">
                                                          <li>
                                                            <a href="settings.html">
                                                              <i className="ri-settings-5-line">
                                                                <span className="menu-text">
                                                                  Account
                                                                  Settings
                                                                </span>
                                                              </i>
                                                            </a>
                                                            <i className="ri-settings-5-line"></i>
                                                          </li>
                                                          <i className="ri-settings-5-line">
                                                            <li>
                                                              <a href="typography.html">
                                                                <i className="ri-font-size">
                                                                  <span className="menu-text">
                                                                    Typography
                                                                  </span>
                                                                </i>
                                                              </a>
                                                              <i className="ri-font-size"></i>
                                                            </li>
                                                            <i className="ri-font-size">
                                                              <li className="treeview">
                                                                <a href="#!">
                                                                  <i className="ri-login-circle-line">
                                                                    <span className="menu-text">
                                                                      Login/Signup
                                                                    </span>
                                                                  </i>
                                                                </a>
                                                                <i className="ri-login-circle-line">
                                                                  <ul className="treeview-menu">
                                                                    <li>
                                                                      <a href="login.html">
                                                                        Login
                                                                      </a>
                                                                    </li>
                                                                    <li>
                                                                      <a href="signup.html">
                                                                        Signup
                                                                      </a>
                                                                    </li>
                                                                    <li>
                                                                      <a href="forgot-password.html">
                                                                        Forgot
                                                                        Password
                                                                      </a>
                                                                    </li>
                                                                    <li>
                                                                      <a href="reset-password.html">
                                                                        Reset
                                                                        Password
                                                                      </a>
                                                                    </li>
                                                                  </ul>
                                                                </i>
                                                              </li>
                                                              <i className="ri-login-circle-line">
                                                                <li>
                                                                  <a href="page-not-found.html">
                                                                    <i className="ri-alert-line">
                                                                      <span className="menu-text">
                                                                        Page Not
                                                                        Found
                                                                      </span>
                                                                    </i>
                                                                  </a>
                                                                  <i className="ri-alert-line"></i>
                                                                </li>
                                                                <i className="ri-alert-line">
                                                                  <li>
                                                                    <a href="maintenance.html">
                                                                      <i className="ri-auction-line">
                                                                        <span className="menu-text">
                                                                          Maintenance
                                                                        </span>
                                                                      </i>
                                                                    </a>
                                                                    <i className="ri-auction-line"></i>
                                                                  </li>
                                                                  <i className="ri-auction-line">
                                                                    <li className="treeview">
                                                                      <a href="#!">
                                                                        <i className="ri-dropdown-list">
                                                                          <span className="menu-text">
                                                                            Menu
                                                                            Level
                                                                          </span>
                                                                        </i>
                                                                      </a>
                                                                      <i className="ri-dropdown-list">
                                                                        <ul className="treeview-menu">
                                                                          <li>
                                                                            <a href="#!">
                                                                              Level
                                                                              One
                                                                              Link
                                                                            </a>
                                                                          </li>
                                                                          <li>
                                                                            <a href="#!">
                                                                              Level
                                                                              One
                                                                              Menu
                                                                              <i className="ri-arrow-right-s-line"></i>
                                                                            </a>
                                                                            <i className="ri-arrow-right-s-line">
                                                                              <ul className="treeview-menu">
                                                                                <li>
                                                                                  <a href="#!">
                                                                                    Level
                                                                                    Two
                                                                                    Link
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a href="#!">
                                                                                    Level
                                                                                    Two
                                                                                    Menu
                                                                                    <i className="ri-arrow-right-s-line"></i>
                                                                                  </a>
                                                                                  <i className="ri-arrow-right-s-line">
                                                                                    <ul className="treeview-menu">
                                                                                      <li>
                                                                                        <a href="#!">
                                                                                          Level
                                                                                          Three
                                                                                          Link
                                                                                        </a>
                                                                                      </li>
                                                                                      <li>
                                                                                        <a href="#!">
                                                                                          Level
                                                                                          Three
                                                                                          Link
                                                                                        </a>
                                                                                      </li>
                                                                                    </ul>
                                                                                  </i>
                                                                                </li>
                                                                                <i className="ri-arrow-right-s-line"></i>
                                                                              </ul>
                                                                              <i className="ri-arrow-right-s-line"></i>
                                                                            </i>
                                                                          </li>
                                                                          <i className="ri-arrow-right-s-line">
                                                                            <i className="ri-arrow-right-s-line">
                                                                              <li>
                                                                                <a href="#!">
                                                                                  Level
                                                                                  One
                                                                                  Link
                                                                                </a>
                                                                              </li>
                                                                            </i>
                                                                          </i>
                                                                        </ul>
                                                                        <i className="ri-arrow-right-s-line">
                                                                          <i className="ri-arrow-right-s-line"></i>
                                                                        </i>
                                                                      </i>
                                                                    </li>
                                                                    <i className="ri-dropdown-list">
                                                                      <i className="ri-arrow-right-s-line">
                                                                        <i className="ri-arrow-right-s-line">
                                                                          <li>
                                                                            <a href="default.html">
                                                                              <i className="ri-send-plane-line">
                                                                                <span className="menu-text">
                                                                                  External
                                                                                  Link
                                                                                </span>
                                                                              </i>
                                                                            </a>
                                                                            <i className="ri-send-plane-line"></i>
                                                                          </li>
                                                                          <i className="ri-send-plane-line">
                                                                            <li>
                                                                              <a href="#!">
                                                                                <i className="ri-exchange-line">
                                                                                  <span className="menu-text">
                                                                                    Chip
                                                                                  </span>
                                                                                  <span className="badge bg-primary ms-auto">
                                                                                    6
                                                                                  </span>
                                                                                </i>
                                                                              </a>
                                                                              <i className="ri-exchange-line"></i>
                                                                            </li>
                                                                            <i className="ri-exchange-line">
                                                                              <li>
                                                                                <a href="#!">
                                                                                  <i className="ri-ticket-line">
                                                                                    <span className="menu-text">
                                                                                      Badge
                                                                                    </span>
                                                                                    <span className="badge border border-primary text-primary ms-auto">
                                                                                      Chip
                                                                                    </span>
                                                                                  </i>
                                                                                </a>
                                                                                <i className="ri-ticket-line"></i>
                                                                              </li>
                                                                              <i className="ri-ticket-line">
                                                                                <li>
                                                                                  <a
                                                                                    href="#!"
                                                                                    className="disabled"
                                                                                  >
                                                                                    <i className="ri-magic-line">
                                                                                      <span className="menu-text">
                                                                                        Disabled
                                                                                        Link
                                                                                      </span>
                                                                                    </i>
                                                                                  </a>
                                                                                  <i className="ri-magic-line"></i>
                                                                                </li>
                                                                                <i className="ri-magic-line"></i>
                                                                              </i>
                                                                            </i>
                                                                          </i>
                                                                        </i>
                                                                      </i>
                                                                    </i>
                                                                  </i>
                                                                </i>
                                                              </i>
                                                            </i>
                                                          </i>
                                                        </i>
                                                      </i>
                                                    </i>
                                                  </i>
                                                </i>
                                              </i>
                                            </i>
                                          </i>
                                        </i>
                                      </i>
                                    </i>
                                  </i>
                                </i>
                              </i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </i>
                  </i>
                </i>
              </i>
            </i>
          </ul>
          <i className="ri-arrow-right-s-line">
            <i className="ri-arrow-right-s-line">
              <i className="ri-send-plane-line">
                <i className="ri-exchange-line">
                  <i className="ri-ticket-line">
                    <i className="ri-magic-line"></i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </div>
        <i className="ri-arrow-right-s-line">
          <i className="ri-arrow-right-s-line">
            <i className="ri-send-plane-line">
              <i className="ri-exchange-line">
                <i className="ri-ticket-line">
                  <i className="ri-magic-line">
                    <div className="sidebar-contact">
                      <p className="fw-light mb-1 text-nowrap text-truncate">
                        Emergency Contact
                      </p>
                      <h5 className="m-0 lh-1 text-nowrap text-truncate">
                        0987654321
                      </h5>
                      <i className="ri-phone-line"></i>
                    </div>
                    <i className="ri-phone-line"></i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </i>
      </nav>
      <i className="ri-arrow-right-s-line">
        <i className="ri-send-plane-line">
          <i className="ri-exchange-line">
            <i className="ri-ticket-line">
              <i className="ri-magic-line">
                <i className="ri-phone-line"></i>
              </i>
            </i>
          </i>
        </i>
      </i>
    </>
  );
};

export default Sidebar2;
