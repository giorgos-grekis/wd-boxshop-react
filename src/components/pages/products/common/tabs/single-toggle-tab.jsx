import React from 'react';
import { Link } from 'react-router-dom';
import { SlideToggle } from 'react-slide-toggle';

function SingleToggleTab () {

    return (
        <div className="product-single-collapse" id="productAccordion">
            <SlideToggle>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="product-collapse-panel">
                            <h3 className="product-collapse-title">
                                <Link data-toggle="collapse" to="#" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ toggleState.toLowerCase() }>Description</Link>
                            </h3>
                            <div className="product-collapse-body collapse show" ref={ setCollapsibleElement }>
                                <div className="collapse-body-wrapper">
                                    <div className="product-desc-content">
                                        <img src={ `${process.env.PUBLIC_URL}/assets/images/products/single/product-img.jpg` } alt="desc" className="float-right" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <ul>
                                            <li><i className="icon-ok"></i><span>Any Product types that You want - Simple, Configurable</span></li>
                                            <li><i className="icon-ok"></i><span>Downloadable/Digital Products, Virtual Products</span></li>
                                            <li><i className="icon-ok"></i><span>Inventory Management with Backordered items</span></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <div className="feature-box feature-box-simple text-center">
                                                    <i className="icon-star"></i>

                                                    <div className="feature-box-content">
                                                        <h3>Dedicated Service</h3>
                                                        <p>Consult our specialists for help with an order, customization, or design advice</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-4">
                                                <div className="feature-box feature-box-simple text-center">
                                                    <i className="icon-reply"></i>

                                                    <div className="feature-box-content">
                                                        <h3>Free Returns</h3>
                                                        <p>We stand behind our goods and services and want you to be satisfied with them.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-4">
                                                <div className="feature-box feature-box-simple text-center">
                                                    <i className="icon-paper-plane"></i>

                                                    <div className="feature-box-content">
                                                        <h3>International Shipping</h3>
                                                        <p>Currently over 50 countries qualify for express international shipping.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </SlideToggle>

            <SlideToggle collapsed={ true }>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="product-collapse-panel">
                            <h3 className="product-collapse-title">
                                <Link className={ toggleState.toLowerCase() } data-toggle="collapse" to="#" onClick={ ( e ) => { e.preventDefault(); onToggle(); } }>Tags</Link>
                            </h3>
                            <div className="product-collapse-body" ref={ setCollapsibleElement }>
                                <div className="collapse-body-wrapper">
                                    <div className="product-tags-content">
                                        <form action="#">
                                            <h4>Add Your Tags:</h4>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-sm" required />
                                                <input type="submit" className="btn btn-primary" value="Add Tags" />
                                            </div>
                                        </form>
                                        <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </SlideToggle>

            <SlideToggle collapsed={ true }>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="product-collapse-panel">
                            <h3 className="product-collapse-title">
                                <Link className={ toggleState.toLowerCase() } data-toggle="collapse" to="#" onClick={ ( e ) => { e.preventDefault(); onToggle(); } }>Reviews</Link>
                            </h3>

                            <div className="product-collapse-body" ref={ setCollapsibleElement }>
                                <div className="collapse-body-wrapper">
                                    <div className="product-reviews-content">
                                        <div className="collateral-box">
                                            <ul>
                                                <li>Be the first to review this product</li>
                                            </ul>
                                        </div>

                                        <div className="add-product-review">
                                            <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
                                            <p>How do you rate this product? *</p>

                                            <form action="#">
                                                <table className="ratings-table">
                                                    <thead>
                                                        <tr>
                                                            <th>&nbsp;</th>
                                                            <th>1 star</th>
                                                            <th>2 stars</th>
                                                            <th>3 stars</th>
                                                            <th>4 stars</th>
                                                            <th>5 stars</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Quality</td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_1" value="1" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_2" value="2" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_3" value="3" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_4" value="4" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_5" value="5" className="radio" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Value</td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_1" value="1" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_2" value="2" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_3" value="3" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_4" value="4" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_5" value="5" className="radio" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Price</td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_1" value="1" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_2" value="2" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_3" value="3" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_4" value="4" className="radio" />
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_5" value="5" className="radio" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="form-group">
                                                    <label>Nickname <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Summary of Your Review <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label>Review <span className="required">*</span></label>
                                                    <textarea cols="5" rows="6" className="form-control form-control-sm"></textarea>
                                                </div>

                                                <input type="submit" className="btn btn-primary" value="Submit Review" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </SlideToggle>
        </div>
    )
}

export default SingleToggleTab;


