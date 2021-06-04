import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';

//Import Custom Component
import CheckoutProgessBar from '../common/checkout-progress-bar';
import ShippingForm from '../common/shipping-form';
import ShippingMethods from '../common/shipping-methods';
import OrderSummary from '../common/order-summary';
import Breadcrumb from '../../../common/breadcrumb';

Modal.setAppElement( '#root' );

function ShippingTwo () {
    const [ open, setOpen ] = useState( false );

    const openModal = ( e ) => {
        e.preventDefault();
        setOpen( true );
    }

    const closeModal = ( e ) => {
        e.preventDefault();
        setOpen( false );
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Checkout Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Checkout Page</h1>

            <div className="main">
                <Breadcrumb current="Checkout" addClass="mb-2" />

                <div className="container">
                    <CheckoutProgessBar />

                    <div className="row">
                        <div className="col-lg-8">
                            <ul className="checkout-steps">
                                <li>
                                    <h2 className="step-title">Shipping Address</h2>

                                    <div className="shipping-step-addresses">
                                        <div className="shipping-address-box active">
                                            <address>
                                                Desmond Mason <br />
                                            123 Street Name, City Name <br />
                                            Los Angeles, California 03100 <br />
                                            United States <br />
                                            (123) 456-7890 <br />
                                            </address>

                                            <div className="address-box-action clearfix">
                                                <Link to="#" className="btn btn-sm btn-link">
                                                    Edit
                                            </Link>

                                                <Link to="#" className="btn btn-sm btn-outline-secondary float-right">
                                                    Ship Here
                                            </Link>
                                            </div>
                                        </div>
                                        <div className="shipping-address-box">
                                            <address>
                                                Susan Mason <br />
                                            123 Street Name, City Name <br />
                                            Los Angeles, California 03100 <br />
                                            United States <br />
                                            (123) 789-6150 <br />
                                            </address>

                                            <div className="address-box-action clearfix">
                                                <Link to="#" className="btn btn-sm btn-link">
                                                    Edit
                                            </Link>

                                                <Link to="#" className="btn btn-sm btn-outline-secondary float-right">
                                                    Ship Here
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="#" className="btn btn-sm btn-outline-secondary btn-new-address" onClick={ openModal }>+ New Address</Link>
                                </li>

                                <li>
                                    <ShippingMethods />
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <OrderSummary />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-steps-action">
                                <Link to={ `${process.env.PUBLIC_URL}/pages/checkout/review` } className="btn btn-primary float-right">NEXT</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6"></div>
            </div>

            <Modal
                isOpen={ open }
                onRequestClose={ closeModal }
                shouldFocusAfterRender={ false }
                contentLabel="Shipping Address Modal"
                className="shipping-popup"
                id="shipping-address-form"
                overlayClassName="cart-modal-overlay"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form action="#" style={ { marginBottom: '0' } }>
                            <div className="modal-header">
                                <h3 className="modal-title" id="addressModalLabel">Shipping Address</h3>
                                <button type="button" className="close" onClick={ closeModal } aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <ShippingForm />
                                <div className="form-group-custom-control">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="address-save" />
                                        <label className="custom-control-label" htmlFor="address-save">Save in Address book</label>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-link btn-sm" onClick={ closeModal }>Cancel</button>
                                <button type="submit" className="btn btn-primary btn-sm">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ShippingTwo;