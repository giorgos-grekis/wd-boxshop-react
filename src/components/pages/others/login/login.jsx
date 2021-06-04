import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../../common/breadcrumb';

function Login () {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Porto React Ecommerce - Login Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Login Page</h1>

            <div className="main">
                <div className="page-header custom-page-header bg-gray">
                    <div className="container">
                        <Breadcrumb current="Forgot Password" addClass="border-0" />
                        <h1 className="mb-0">Login</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-8">
                        <div className="col-md-6">
                            <div className="heading">
                                <h2 className="title">Login</h2>
                                <p>If you have an account with us, please log in.</p>
                            </div>

                            <form action="#" className="mb-0">
                                <input type="email" className="form-control" placeholder="Email Address" required />
                                <input type="password" className="form-control" placeholder="Password" required />

                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary">LOGIN</button>
                                    <Link to={ `${process.env.PUBLIC_URL}/pages/password` } className="forget-pass"> Forgot your password?</Link>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div className="heading mt-2 mt-md-0">
                                <h2 className="title">Create An Account</h2>
                                <p>By creating an account with our store, you will be able to visit.</p>
                            </div>

                            <form action="#">
                                <input type="text" className="form-control" placeholder="First Name" required />
                                <input type="text" className="form-control" placeholder="Middle Name" required />
                                <input type="text" className="form-control" placeholder="Last Name" required />
                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mb-5"></div>
            </div>
        </div>
    )
}

export default Login;