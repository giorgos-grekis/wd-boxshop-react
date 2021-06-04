import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Account () {
    const [ show, setShow ] = useState( 0 );

    const toggleShow = () => {
        setShow( ( show + 1 ) % 2 );
    }

    return (
        <div>
            <h2>Edit Account Information</h2>

            <form action="#">
                <div className="row">
                    <div className="col-sm-11">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group required-field">
                                    <label htmlFor="acc-name">First Name</label>
                                    <input type="text" className="form-control" id="acc-name" name="acc-name" required />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="acc-mname">First Name</label>
                                    <input type="text" className="form-control" id="acc-mname" name="acc-mname" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group required-field">
                                    <label htmlFor="acc-lastname">Last Name</label>
                                    <input type="text" className="form-control" id="acc-lastname" name="acc-lastname" required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group required-field">
                    <label htmlFor="acc-email">Email</label>
                    <input type="email" className="form-control" id="acc-email" name="acc-email" required />
                </div>

                <div className="form-group required-field">
                    <label htmlFor="acc-password">Password</label>
                    <input type="password" className="form-control" id="acc-password" name="acc-password" required />
                </div>

                <div className="mb-2"></div>

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="change-pass-checkbox" value="1" onChange={ toggleShow } />
                    <label className="custom-control-label" htmlFor="change-pass-checkbox">Change Password</label>
                </div>

                <div id="account-chage-pass" className={ show === 1 ? "show" : "" }>
                    <h3 className="mb-2">Change Password</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group required-field">
                                <label htmlFor="acc-pass2">Password</label>
                                <input type="password" className="form-control" id="acc-pass2" name="acc-pass2" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group required-field">
                                <label htmlFor="acc-pass3">Confirm Password</label>
                                <input type="password" className="form-control" id="acc-pass3" name="acc-pass3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="required text-right">* Required Field</div>
                <div className="form-footer">
                    <Link to="#"><i className="icon-angle-double-left"></i>Back</Link>

                    <div className="form-footer-right">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Account;