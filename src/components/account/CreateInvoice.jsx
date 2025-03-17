import React from 'react'

const CreateInvoice = () => {
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
                            Create Invoice
                        </li>
                    </ol>
                    {/* Breadcrumb ends */}
                    {/* Sales stats starts */}
                    <div className="ms-auto d-lg-flex d-none flex-row">
                        
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
                                    <div className="create-invoice-wrapper">
                                        {/* Row start */}
                                        <div className="row">
                                            <div className="col-sm-6 col-12">
                                                {/* Row start */}
                                                <div className="row">
                                                    <div className="col-sm-12 col-12">
                                                        {/* Form group start */}
                                                        <div className="mb-3">
                                                            <label htmlFor="customerName" className="form-label">Customer Name</label>
                                                            <input type="text" id="customerName" className="form-control" placeholder="Enter Customer Name" />
                                                        </div>
                                                        {/* Form group end */}
                                                    </div>
                                                    <div className="col-sm-6 col-12">
                                                        {/* Form group start */}
                                                        <div className="mb-3">
                                                            <label htmlFor="invNumber" className="form-label">Invoice Number</label>
                                                            <input type="text" id="invNumber" className="form-control" placeholder="Enter Invoice Number" />
                                                        </div>
                                                        {/* Form group end */}
                                                    </div>
                                                    <div className="col-sm-6 col-12">
                                                        {/* Form group start */}
                                                        <div className="mb-3">
                                                            <label htmlFor="dueDate" className="form-label">Due Date</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control datepicker-opens-left" id="dueDate" placeholder="DD/MM/YYYY" />
                                                                <span className="input-group-text">
                                                                    <i className="ri-calendar-2-fill" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Form group end */}
                                                    </div>
                                                    <div className="col-sm-12 col-12">
                                                        {/* Form group start */}
                                                        <div className="mb-2">
                                                            <label htmlFor="msgCustomer" className="form-label">Message</label>
                                                            <textarea rows={3} id="msgCustomer" className="form-control" defaultValue={""} />
                                                        </div>
                                                        {/* Form group end */}
                                                    </div>
                                                </div>
                                                {/* Row end */}
                                            </div>
                                        </div>
                                        {/* Row end */}
                                    </div>
                                    {/* Row start */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-outer">
                                                <table className="table m-0 align-middle">
                                                    <thead>
                                                        <tr>
                                                            <th colSpan={7} className="pt-3 pb-3">
                                                                Items/Products
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Quantity</th>
                                                            <th>Unit</th>
                                                            <th>Price</th>
                                                            <th>VAT</th>
                                                            <th>Amount (Net)</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                {/* Form group start */}
                                                                <select className="form-select" id="prd">
                                                                    <option>Select Product</option>
                                                                    <option>Mobiles</option>
                                                                    <option>Books</option>
                                                                </select>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="m-0">
                                                                    <input type="number" className="form-control" id="qty" />
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="m-0">
                                                                    <input type="text" className="form-control" id="unit" />
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="input-group m-0">
                                                                    <input type="text" className="form-control" id="price" />
                                                                    <span className="input-group-text">
                                                                        <i className="ri-money-dollar-circle-line" />
                                                                    </span>
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="input-group m-0">
                                                                    <input type="text" className="form-control" id="vat" />
                                                                    <span className="input-group-text">%</span>
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="input-group m-0">
                                                                    <input type="text" className="form-control" id="amt" />
                                                                    <span className="input-group-text">
                                                                        <i className="ri-money-dollar-circle-line" />
                                                                    </span>
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                <div className="d-inline-flex gap-1">
                                                                    <button className="btn btn-outline-danger">
                                                                        <i className="ri-delete-bin-line" />
                                                                    </button>
                                                                    <button className="btn btn-outline-success">
                                                                        <i className="ri-edit-box-line" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {/* Form group start */}
                                                                <select className="form-select" id="prd2">
                                                                    <option>Select Product</option>
                                                                    <option>Mobiles</option>
                                                                    <option>Books</option>
                                                                </select>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="m-0">
                                                                    <input type="number" className="form-control" id="qty2" />
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="m-0">
                                                                    <input type="text" className="form-control" id="unit2" />
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="input-group m-0">
                                                                    <input type="text" className="form-control" id="price2" />
                                                                    <span className="input-group-text">
                                                                        <i className="ri-money-dollar-circle-line" />
                                                                    </span>
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="input-group m-0">
                                                                    <input type="text" className="form-control" id="vat2" />
                                                                    <span className="input-group-text">%</span>
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                {/* Form group start */}
                                                                <div className="input-group m-0">
                                                                    <input type="text" className="form-control" id="amt2" />
                                                                    <span className="input-group-text">
                                                                        <i className="ri-money-dollar-circle-line" />
                                                                    </span>
                                                                </div>
                                                                {/* Form group end */}
                                                            </td>
                                                            <td>
                                                                <div className="d-inline-flex gap-1">
                                                                    <button className="btn btn-outline-danger">
                                                                        <i className="ri-delete-bin-line" />
                                                                    </button>
                                                                    <button className="btn btn-outline-success">
                                                                        <i className="ri-edit-box-line" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <button className="btn btn-outline-primary text-nowrap">
                                                                    Add New Row
                                                                </button>
                                                            </td>
                                                            <td colSpan={6}>
                                                                <div className="row justify-content-end">
                                                                    <div className="col-auto">
                                                                        <label className="col-form-label" htmlFor="disc">Discount % of Total Amount</label>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <input type="text" className="form-control" id="disc" placeholder="0%" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={5}>&nbsp;</td>
                                                            <td>
                                                                <p>Subtotal</p>
                                                                <p>Discount</p>
                                                                <p>VAT</p>
                                                                <h5 className="mt-2 text-primary">Total USD</h5>
                                                            </td>
                                                            <td>
                                                                <p>$0.00</p>
                                                                <p>$0.00</p>
                                                                <p>$0.00</p>
                                                                <h5 className="mt-2 text-primary">$0.00</h5>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex justify-content-end gap-2 mt-2">
                                                <button className="btn btn-outline-secondary">
                                                    Save as Draft
                                                </button>
                                                <a href="invoice-list.html" className="btn btn-success">Create Invoice</a>
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

export default CreateInvoice