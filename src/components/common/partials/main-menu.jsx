// done

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MainMenu ( props ) {
    const [ path, setPath ] = useState( "" );
    const { showBlog = false } = props;

    useEffect( () => {
        setPath( window.location.href );
    } )

    useEffect( () => {
        let mainNav = document.querySelector( ".header .main-nav .menu" );
        if ( mainNav.querySelector( ".active" ) )
            mainNav.querySelector( ".active" ).classList.remove( "active" );
    }, [] )

    return (
        <nav className="main-nav">
            <ul className="menu sf-js-enabled sf-arrows">
                <li className={ path === process.env.PUBLIC_URL + '/' ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/` } title='αρχική'></Link></li>
                <li className={ path.indexOf( "categories/" ) > -1 ? 'active' : '' }>
                    {/* βελάκι κάτω = sf-with-ul , το βάζω στο className to <Link>*/}
                    <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="">ΣΥΣΚΕΥΕΣ</Link>
                    <div className="megamenu">
                        <div className="row row-sm">
                            <div className="col-lg-4">
                                <Link to="#" className="nolink">VARIATION 1</Link>
                                <ul className="submenu">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }>Fullwidth Banner</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/boxed-slider` }>Boxed Slider Banner</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/boxed-image` }>Boxed Image Banner</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/sidebar-left` }>Left Sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/sidebar-right` }>Right Sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/flex-grid` }>products Flex Grid</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/horizontal-filter1` }>Horizontal Filter1</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/horizontal-filter2` }>Horizontal Filter2</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <Link to="#" className="nolink">VARIATION 2</Link>
                                <ul className="submenu">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/list` }>products List Item Types</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/infinite-scroll` }>Ajax Infinite Scroll</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/3cols` }>3 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/4cols` }>4 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/5cols` }>5 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/6cols` }>6 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/7cols` }>7 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/8cols` }>8 Columns products</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 image-container">
                                <img className="products-promo" src={ `${process.env.PUBLIC_URL}/assets/images/menu-banner-2.jpg` } width="380" height="614" alt="Menu banner" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className={ path.indexOf( "products/" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/products/default/1` } className="">ΑΞΕΣΟΥΑΡ</Link>
                    <div className="megamenu">
                        <div className="row row-sm">
                            <div className="col-lg-4">
                                <Link to={ `${process.env.PUBLIC_URL}/products/horizontal/1` } className="nolink">Variations 1</Link>
                                <ul className="submenu">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/horizontal/1` }>Horizontal Thumbnails</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/vertical/1` }>Vertical Thumbnails</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/zoom/1` }>Inner Zoom</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/cart-sticky/1` }>Addtocart Sticky</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/accordion/1` }>Accordion Tabs</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sticky-tab/1` }>Sticky Tabs</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/simple/1` }>Simple products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sidebar-left/1` }>With Left Sidebar</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4">
                                <Link to={ `${process.env.PUBLIC_URL}/products/default/1` } className="nolink">products Layout Types</Link>
                                <ul className="submenu">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/default/1` }>Default Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/extended/1` }>Extended Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/full-width/1` }>Full Width Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/grid/1` }>Grid Images Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sticky-both/1` }>Sticky Both Side Info</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sticky-info/1` }>Sticky Right Side Info</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 image-container">
                                <img className="products-promo" src={ `${process.env.PUBLIC_URL}/assets/images/menu-banner-1.jpg` } width="380" height="614" alt="Menu banner" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className={ `sf-with-ul ${path.indexOf( "pages/" ) > -1 ? 'active' : ''}` }>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/cart` } className="">B STOCK</Link>
                    <ul>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/cart` }>Shopping Cart</Link></li>
                        <li>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/one` } className="sf-with-ul">Checkout</Link>
                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/one` }>Checkout Shipping</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/two` }>Checkout Shipping 2</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/checkout/review` }>Checkout Review</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/dashboard/board` } className="sf-with-ul">Dashboard</Link>
                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/dashboard/board` }>Dashboard</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/dashboard/account` }>My Account</Link></li>
                            </ul>
                        </li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About Us</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/blog` } className="sf-with-ul">Blog</Link>
                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/blog` }>Blog</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/single/2` }>Blog Post</Link></li>
                            </ul>
                        </li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/wishlist` }>Wishlist</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` } className="login-link">Login</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/password` }>Forgot Password</Link></li>
                    </ul>
                </li>
                {
                    showBlog ?
                        <li><Link className="d-none d-xl-inline-block" to={ `${process.env.PUBLIC_URL}/pages/blog` }>Blog</Link></li>
                        : ""
                }
                {/* <li>
                    <a href="https://1.envato.market/DdLk5" rel="noopener noreferrer" target="_blank">
                        Buy Porto!
                    {
                            showBlog ?
                                <span className="tip tip-hot tip-top tip-right">Hot</span>
                                : ""
                        }
                    </a>
                </li> */}
            </ul>
        </nav>
    )

}

export default MainMenu;