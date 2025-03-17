import React from 'react'

const InvoiceDetails = () => {
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
                            Invoice Details
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
                    {/* Row start */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                    {/* Row start */}
                                    <div className="row">
                                        <div className="col-xxl-3 col-sm-3 col-12">
                                            <img src="assets/images/logo-dark.svg" alt="Bootstrap Admin Dashboard" className="img-fluid" />
                                        </div>
                                        <div className="col-sm-9 col-12">
                                            <div className="text-end">
                                                <p className="mb-2">
                                                    Invoice - <span className="text-danger">#009</span>
                                                </p>
                                                <p className="mb-2">June 25th 2024</p>
                                                <span className="badge bg-danger">Overdue</span>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-5" />
                                    </div>
                                    {/* Row end */}
                                    {/* Row start */}
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6 col-12">
                                            <h6 className="fw-semibold">Billed To :</h6>
                                            <p className="m-0">
                                                Hamspire Jordan,<br />
                                                8900 Gilsion Ave,<br />
                                                San Francisco, California(CA), 66789
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="text-end">
                                                <h6 className="fw-semibold">Hospital Address :</h6>
                                                <p className="text-end m-0">
                                                    Medicare LTD, 76890 St. <br />
                                                    5000 thomos Street, Suite 980<br />
                                                    Huntsville, Alabama, 87890
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3" />
                                    </div>
                                    {/* Row end */}
                                    {/* Row start */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Description</th>
                                                            <th>Medecine</th>
                                                            <th>No.Of Days</th>
                                                            <th>Amount (Net)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h6>Bootstrap Admin Template</h6>
                                                                <p>
                                                                    Create quality mockups and prototypes and
                                                                    Design mobile based features.
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <h6>Doedlcline</h6>
                                                            </td>
                                                            <td>
                                                                <h6>40</h6>
                                                            </td>
                                                            <td>
                                                                <h6>$7950.00</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>Admin Themes</h6>
                                                                <p>
                                                                    Best Bootstrap Admin Dashboards and Admin
                                                                    Themes
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <h6>Navbpyoxen</h6>
                                                            </td>
                                                            <td>
                                                                <h6>60</h6>
                                                            </td>
                                                            <td>
                                                                <h6>$3690.00</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}>&nbsp;</td>
                                                            <td>
                                                                <p>Subtotal</p>
                                                                <p>Discount</p>
                                                                <p>VAT</p>
                                                                <h5 className="mt-4 text-primary">Total USD</h5>
                                                            </td>
                                                            <td>
                                                                <p>$16890.00</p>
                                                                <p>$60.00</p>
                                                                <p>$95.00</p>
                                                                <h5 className="mt-4 text-primary">$16725.00</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4}>
                                                                <h6 className="text-danger">NOTES</h6>
                                                                <p className="small m-0">
                                                                    We really appreciate your business and if
                                                                    there’s anything else we can do, please
                                                                    let us know! Also, should you need us to
                                                                    add VAT or anything else to this order,
                                                                    it’s super easy since this is a template,
                                                                    so just ask!
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={6} />
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Row end */}
                                    {/* Row start */}
                                    <div className="row">
                                        <div className="col-sm-12 col-12">
                                            <div className="d-flex justify-content-end gap-2">
                                                <button className="btn btn-outline-secondary">
                                                    Download
                                                </button>
                                                <button className="btn btn-outline-secondary">
                                                    Print
                                                </button>
                                                <button className="btn btn-primary">
                                                    Pay Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Row end */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Row end */}
                </div>
                {/* App body ends */}
                {/* App footer starts */}
                <div className="app-footer bg-white">
                    <span>© Medflex admin 2024</span>
                </div>
                {/* App footer ends */}
            </div>

        </>
    )
}

export default InvoiceDetails