import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function SingleTabScroll () {
    const onLinkClick = ( e ) => {
        e.currentTarget.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.classList.add( "active" );
    }

    return (
        <div className="product-single-tabs scrolling-box">
            <div className="sticky-header">
                <ul className="nav nav-tabs container nav-border-anim" role="tablist">
                    <AnchorLink className="nav-link active" href="#product-desc-content" offset="100" onClick={ onLinkClick }>Description</AnchorLink>
                    <AnchorLink className="nav-link" href="#product-size-content" offset="100" onClick={ onLinkClick }>Size Guide</AnchorLink>
                    <AnchorLink className="nav-link" href="#product-tags-content" offset="100" onClick={ onLinkClick }>Tags</AnchorLink>
                    <AnchorLink className="nav-link" href="#product-reviews-content" offset="100" onClick={ onLinkClick }>Reviews</AnchorLink>
                </ul>
            </div>

            <div className="tab-pane show" id="product-desc-content">
                <div className="product-desc-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    <ul>
                        <li><i className="icon-ok"></i><span>Any Product types that You want - Simple, Configurable</span></li>
                        <li><i className="icon-ok"></i><span>Downloadable/Digital Products, Virtual Products</span></li>
                        <li><i className="icon-ok"></i><span>Inventory Management with Backordered items</span></li>
                    </ul>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>

            <div className="tab-pane show" id="product-size-content">
                <div className="product-size-content">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/products/single/body-shape.png` } alt="body shape" />
                        </div>

                        <div className="col-md-8">
                            <table className="table table-size">
                                <thead>
                                    <tr>
                                        <th>SIZE</th>
                                        <th>CHEST (in.)</th>
                                        <th>WAIST (in.)</th>
                                        <th>HIPS (in.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>XS</td>
                                        <td>34-36</td>
                                        <td>27-29</td>
                                        <td>34.5-36.5</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>36-38</td>
                                        <td>29-31</td>
                                        <td>36.5-38.5</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>38-40</td>
                                        <td>31-33</td>
                                        <td>38.5-40.5</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>40-42</td>
                                        <td>33-36</td>
                                        <td>40.5-43.5</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>42-45</td>
                                        <td>36-40</td>
                                        <td>43.5-47.5</td>
                                    </tr>
                                    <tr>
                                        <td>XLL</td>
                                        <td>45-48</td>
                                        <td>40-44</td>
                                        <td>47.5-51.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-pane show" id="product-tags-content">
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

            <div className="tab-pane show" id="product-reviews-content">
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
    )
}

export default SingleTabScroll;