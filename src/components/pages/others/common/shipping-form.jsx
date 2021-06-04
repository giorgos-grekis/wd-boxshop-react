import React from 'react';

function ShippingForm () {
    return (
        <>
            <div className="form-group required-field">
                <label>First Name </label>
                <input type="text" className="form-control" required />
            </div>

            <div className="form-group required-field">
                <label>Last Name </label>
                <input type="text" className="form-control" required />
            </div>

            <div className="form-group">
                <label>Company </label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group required-field">
                <label>Street Address </label>
                <input type="text" className="form-control" required />
                <input type="text" className="form-control" required />
            </div>

            <div className="form-group required-field">
                <label>City  </label>
                <input type="text" className="form-control" required />
            </div>

            <div className="form-group">
                <label>State/Province</label>
                <div className="select-custom">
                    <select className="form-control">
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                    </select>
                </div>
            </div>

            <div className="form-group required-field">
                <label>Zip/Postal Code </label>
                <input type="text" className="form-control" required />
            </div>

            <div className="form-group">
                <label>Country</label>
                <div className="select-custom">
                    <select className="form-control">
                        <option value="USA">United States</option>
                        <option value="Turkey">Turkey</option>
                        <option value="China">China</option>
                        <option value="Germany">Germany</option>
                    </select>
                </div>
            </div>

            <div className="form-group required-field">
                <label>Phone Number </label>
                <div className="form-control-tooltip">
                    <input type="tel" className="form-control" required />
                    <span className="input-tooltip" data-toggle="tooltip" title="For delivery questions." data-placement="right"><i className="icon-question-circle"></i></span>
                </div>
            </div>
        </>
    );
}

export default ShippingForm;