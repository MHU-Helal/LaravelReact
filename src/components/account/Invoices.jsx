import React from 'react'

const Invoices = () => {
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
                            Invoices
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
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <small>Select all checkboxes to send an update.</small>
                                        <button className="btn btn-secondary" disabled>Send to everyone</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-outer">
                                        <div className="table-responsive">
                                            <table className="table align-middle m-0">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
                                                            </div>
                                                        </th>
                                                        <th>Invoice No.</th>
                                                        <th>Patient</th>
                                                        <th>Created Date</th>
                                                        <th>Due Date</th>
                                                        <th>Status</th>
                                                        <th>Money Spent</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check1" />
                                                            </div>
                                                        </td>
                                                        <td>#00001</td>
                                                        <td>
                                                            <div className="fw-semibold">Elisa Shah</div>
                                                        </td>
                                                        <td>20/04/2024</td>
                                                        <td>24/04/2024</td>
                                                        <td>$9830.00</td>
                                                        <td>
                                                            <span className="badge bg-success">Paid</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check2" />
                                                            </div>
                                                        </td>
                                                        <td>#00002</td>
                                                        <td>
                                                            <div className="fw-semibold">Ladonna Jones</div>
                                                        </td>
                                                        <td>12/04/2024</td>
                                                        <td>19/04/2024</td>
                                                        <td>$4567.60</td>
                                                        <td>
                                                            <span className="badge bg-warning">Pending</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check3" />
                                                            </div>
                                                        </td>
                                                        <td>#00003</td>
                                                        <td>
                                                            <div className="fw-semibold">Shelly Daniel</div>
                                                        </td>
                                                        <td>11/04/2024</td>
                                                        <td>18/04/2024</td>
                                                        <td>$2908.00</td>
                                                        <td>
                                                            <span className="badge bg-success">Paid</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check4" />
                                                            </div>
                                                        </td>
                                                        <td>#00004</td>
                                                        <td>
                                                            <div className="fw-semibold">Rich Spears</div>
                                                        </td>
                                                        <td>19/04/2024</td>
                                                        <td>21/04/2024</td>
                                                        <td>$3985.00</td>
                                                        <td>
                                                            <span className="badge bg-danger">Overdue</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check5" />
                                                            </div>
                                                        </td>
                                                        <td>#00005</td>
                                                        <td>
                                                            <div className="fw-semibold">Carey Russo</div>
                                                        </td>
                                                        <td>20/04/2024</td>
                                                        <td>25/04/2024</td>
                                                        <td>$8908.00</td>
                                                        <td>
                                                            <span className="badge bg-success">Paid</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check6" />
                                                            </div>
                                                        </td>
                                                        <td>#00006</td>
                                                        <td>
                                                            <div className="fw-semibold">Emmett Montes</div>
                                                        </td>
                                                        <td>19/04/2024</td>
                                                        <td>22/04/2024</td>
                                                        <td>$3452.00</td>
                                                        <td>
                                                            <span className="badge bg-warning">Pending</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check7" />
                                                            </div>
                                                        </td>
                                                        <td>#00007</td>
                                                        <td>
                                                            <div className="fw-semibold">Cheri Trujillo</div>
                                                        </td>
                                                        <td>28/04/2024</td>
                                                        <td>30/05/2024</td>
                                                        <td>$6530.00</td>
                                                        <td>
                                                            <span className="badge bg-success">Paid</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check8" />
                                                            </div>
                                                        </td>
                                                        <td>#00008</td>
                                                        <td>
                                                            <div className="fw-semibold">Hans Hayes</div>
                                                        </td>
                                                        <td>12/05/2024</td>
                                                        <td>27/05/2024</td>
                                                        <td>$6750.00</td>
                                                        <td>
                                                            <span className="badge bg-warning">Pending</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check9" />
                                                            </div>
                                                        </td>
                                                        <td>#00009</td>
                                                        <td>
                                                            <div className="fw-semibold">Dena Ramsey</div>
                                                        </td>
                                                        <td>13/06/2024</td>
                                                        <td>26/06/2024</td>
                                                        <td>$5490.00</td>
                                                        <td>
                                                            <span className="badge bg-warning">Pending</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check m-0">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check10" />
                                                            </div>
                                                        </td>
                                                        <td>#000010</td>
                                                        <td>
                                                            <div className="fw-semibold">Reed Case</div>
                                                        </td>
                                                        <td>02/06/2024</td>
                                                        <td>24/06/2024</td>
                                                        <td>$3379.00</td>
                                                        <td>
                                                            <span className="badge bg-success">Paid</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">
                                                                Send Mail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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

export default Invoices