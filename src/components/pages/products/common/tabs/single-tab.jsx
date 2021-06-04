import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function SingleTab ( props ) {
    const { addClass = "", product } = props;

    return (
        <>
            <Tabs className={ `product-single-tabs ${addClass}` } selectedTabClassName="active" selectedTabPanelClassName="show">
                <TabList className="nav nav-tabs nav-border-anim">
                    <Tab className="nav-link">περιγραφη</Tab>
                    <Tab className="nav-link">επιπλεον πληροφορίες</Tab>
                    {/* <Tab className="nav-link">Reviews</Tab> */}
                </TabList>

                <TabPanel className="tab-pane fade">
                    <div className="product-desc-content">
                        <p>{ product.description }</p>
                        <ul>
                            <li><i className="icon-ok"></i><span>Any Product types that You want - Simple, Configurable</span></li>
                            <li><i className="icon-ok"></i><span>Downloadable/Digital Products, Virtual Products</span></li>
                            <li><i className="icon-ok"></i><span>Inventory Management with Backordered items</span></li>
                        </ul>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </TabPanel>

                <TabPanel className="tab-pane fade">
                <div className="product-desc-content">
                  
                        <ul>
                            <li><i className="icon-ok"></i><span>Any Product types that You want - Simple, Configurable</span></li>
                            <li><i className="icon-ok"></i><span>Downloadable/Digital Products, Virtual Products</span></li>
                            <li><i className="icon-ok"></i><span>Inventory Management with Backordered items</span></li>
                            <li><i className="icon-ok"></i><span>Any Product types that You want - Simple, Configurable</span></li>
                            <li><i className="icon-ok"></i><span>Downloadable/Digital Products, Virtual Products</span></li>
                            <li><i className="icon-ok"></i><span>Inventory Management with Backordered items</span></li>
                        </ul>
                        <p>{ product.description }</p>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit veniam deleniti cupiditate culpa reiciendis? </p>
                    </div>
                </TabPanel>

                {/* <TabPanel className="tab-pane fade">
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
                </TabPanel> */}
            </Tabs>
        </>
    );
}

export default SingleTab;

