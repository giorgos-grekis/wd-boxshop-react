import React from 'react';
import { Helmet } from 'react-helmet';

//Import Custom Component
import Breadcrumb from '../../../common/breadcrumb';

function ForgetPassword () {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Porto React Ecommerce - Forget Password Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Forget Password Page</h1>

            <div className="main">
                <div className="page-header custom-page-header bg-gray">
                    <div className="container">
                        <Breadcrumb current="Forgot Password" addClass="border-0" />
                        <h1 className="mb-0">Forgot Password</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="col-lg-6 mx-auto mt-7 mb-7">
                        <div className="heading mb-4">
                            <h2 className="title">Reset Password</h2>
                            <p>Please enter your email address below to receive a password reset link.</p>
                        </div>

                        <form action="#">
                            <div className="form-group required-field">
                                <label htmlFor="reset-email">Email</label>
                                <input type="email" className="form-control" id="reset-email" name="reset-email" required />
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary">Reset My Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;