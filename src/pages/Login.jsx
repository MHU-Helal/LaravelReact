import React from 'react'
import { Helmet } from 'react-helmet'

const Login = () => {
    return (
        <>
           
                {/* Container starts */}
                <div className="d-flex align-items-center justify-content-center">
                    {/* Auth wrapper starts */}
                    <div className="auth-wrapper">
                        {/* Form starts */}
                        <form action="https://buybootstrap.com/demos/medflex/medflex-admin-dashboard/index.html">
                            <div className="auth-box">
                                <a href="index.html" className="auth-logo mb-4">
                                    {/* <img src="assets/images/logo-dark.svg" alt="Bootstrap Gallery" /> */}
                                    <h3 className='text-dark mt-2'>Revive<span style={{color:'OrangeRed'}}>Me</span></h3>
                                </a>
                                <h4 className="mb-4">Login</h4>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Your email <span className="text-danger">*</span></label>
                                    <input type="text" id="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="pwd">Your password <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <input type="password" id="pwd" className="form-control" placeholder="Enter password" />
                                        <button className="btn btn-outline-secondary" type="button">
                                            <i className="ri-eye-line text-primary" />
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-3">
                                    <a href="forgot-password.html" className="text-decoration-underline">Forgot password?</a>
                                </div>
                                <div className="mb-3 d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <a href="signup.html" className="btn btn-secondary">Not registered? Signup</a>
                                </div>
                            </div>
                        </form>
                        {/* Form ends */}
                    </div>
                    {/* Auth wrapper ends */}
                </div>
                {/* Container ends */}

            
        </>
    )
}

export default Login