import React from 'react'

const TopBar = () => {
    return (
        <>
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
                        {/* <img src="assets/images/logo.svg" className="logo" alt="Medicare Admin Template" /> */}
                        <h3 className='text-white mt-2'>Revive<span style={{color:'OrangeRed'}}>Me</span></h3>
                    </a>
                    <a href="index.html" className="d-lg-none d-md-block">
                        {/* <img src="assets/images/logo-sm.svg" className="logo" alt="Medicare Admin Template" /> */}
                        <h3 className='text-white mt-2'>Revive<span style={{color:'OrangeRed'}}>Me</span></h3>
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
                        {/* <div className="dropdown">
                            <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="assets/images/flags/1x1/fr.svg" className="header-country-flag" alt="Bootstrap Dashboards" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-mini">
                                <div className="country-container">
                                    <a href="index.html" className="py-2">
                                        <img src="assets/images/flags/1x1/us.svg" alt="Admin Panel" />
                                    </a>
                                    <a href="index.html" className="py-2">
                                        <img src="assets/images/flags/1x1/in.svg" alt="Admin Panels" />
                                    </a>
                                    <a href="index.html" className="py-2">
                                        <img src="assets/images/flags/1x1/br.svg" alt="Admin Dashboards" />
                                    </a>
                                    <a href="index.html" className="py-2">
                                        <img src="assets/images/flags/1x1/tr.svg" alt="Admin Templatess" />
                                    </a>
                                    <a href="index.html" className="py-2">
                                        <img src="assets/images/flags/1x1/gb.svg" alt="Google Admin" />
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* Select country dropdown ends */}
                        {/* Notifications dropdown starts */}
                        <div className="dropdown">
                            {/* <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ri-list-check-3" />
                                <span className="count-label warning" />
                            </a> */}
                            <div className="dropdown-menu dropdown-menu-end dropdown-300">
                                <h5 className="fw-semibold px-3 py-2 text-primary">Activity</h5>
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
                                                                <img src="assets/images/products/1.jpg" className="img-shadow img-3x rounded-1" alt="Hospital Admin Templates" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                23 invoices have been paid to the MediCare Labs.
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
                                                                <img src="assets/images/products/2.jpg" className="img-shadow img-3x rounded-1" alt="Hospital Admin Templates" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                28 new surgical equipments have been purchased.
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
                                                                <img src="assets/images/products/8.jpg" className="img-shadow img-3x rounded-1" alt="Hospital Admin Templates" />
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
                                                                <img src="assets/images/products/9.jpg" className="img-shadow img-3x rounded-1" alt="Hospital Admin Templates" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                Requested for 6 new vehicles for medical emergency. .
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
                                    <a href="javascript:void(0)" className="btn btn-primary">View all</a>
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
                                    <a href="javascript:void(0)" className="btn btn-primary">View all</a>
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
                                <h5 className="fw-semibold px-3 py-2 text-primary">Messages</h5>
                                {/* Scroll starts */}
                                <div className="scroll300">
                                    {/* Messages list starts */}
                                    <div className="p-3">
                                        <div className="d-flex py-2">
                                            <img src="assets/images/user3.png" className="img-shadow img-3x me-3 rounded-5" alt="Hospital Admin Templates" />
                                            <div className="m-0">
                                                <h6 className="mb-1 fw-semibold">Nick Gonzalez</h6>
                                                <p className="mb-1">
                                                    Appointed as a new President 2014-2025
                                                </p>
                                                <p className="small m-0 opacity-50">Today, 07:30pm</p>
                                            </div>
                                        </div>
                                        <div className="d-flex py-2">
                                            <img src="assets/images/user1.png" className="img-shadow img-3x me-3 rounded-5" alt="Hospital Admin Templates" />
                                            <div className="m-0">
                                                <h6 className="mb-1 fw-semibold">Clyde Fowler</h6>
                                                <p className="mb-1">
                                                    Congratulate, James for new job.
                                                </p>
                                                <p className="small m-0 opacity-50">Today, 08:00pm</p>
                                            </div>
                                        </div>
                                        <div className="d-flex py-2">
                                            <img src="assets/images/user4.png" className="img-shadow img-3x me-3 rounded-5" alt="Hospital Admin Templates" />
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
                                    <a href="javascript:void(0)" className="btn btn-primary">View all</a>
                                </div>
                                {/* View all button ends */}
                            </div>
                        </div>
                    </div>
                    {/* Header actions ends */}
                    {/* Header user settings starts */}
                    <div className="dropdown ms-2">
                        <a id="userSettings" className="dropdown-toggle d-flex align-items-center" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="avatar-box">MH<span className="status busy" /></div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end shadow-lg">
                            <div className="px-3 py-2">
                                <span className="small">Admin</span>
                                <h6 className="m-0">M.Helal</h6>
                            </div>
                            <div className="mx-3 my-2 d-grid">
                                <a href="login.html" className="btn btn-danger">Logout</a>
                            </div>
                        </div>
                    </div>
                    {/* Header user settings ends */}
                </div>
                {/* App header actions ends */}
            </div>
            {/* App header ends */}

        </>
    )
}

export default TopBar