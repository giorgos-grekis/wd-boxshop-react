import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

//Import Custom Compoenet
import Breadcrumb from '../../common/breadcrumb';
import ExtendedDetail from './common/details/extended-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import SingleTab from './common/tabs/single-tab';
import ExtendedThumbnail from './common/thumbnails/extended-thumbnail';

//Import Utils
import { findProductById } from '../../../utils';

function ExtendedProduct ( props ) {
    let products = props.products;
    let product = findProductById( products, props.productId );

    useLayoutEffect( () => {
        if ( document.querySelector( '.skeleton-body.loaded' ) ) {
            document.querySelector( '.skeleton-body' ).classList.remove( 'loaded' );
        }
    }, [ props.productId ] )

    useEffect( () => {
        let imgLoad = imagesLoaded( ".product-single-gallery" );

        imgLoad.on( "done", function () {
            if ( document.querySelector( '.skeleton-body' ) ) {
                document.querySelector( '.skeleton-body' ).classList.add( 'loaded' );
            }
        } )
    }, [ props.productId ] )

    if ( !product ) return ( window.location = process.env.PUBLIC_URL + "/pages/404" );

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Product Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">
                <Breadcrumb current="Extended" path="Products" />

                <div className="product-single-container product-single-extended product-page skeleton-body skel-shop-products">
                    <div className="container">
                        <ExtendedThumbnail product={ product } />
                        <ExtendedDetail product={ product } link="extended" />
                    </div>
                </div>

                <div className="product-single-row">
                    <div className="single-row-entire" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-1.jpg')` } }></div>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-md-6 col-xl-5">
                                <h5>Enjoy the power</h5>
                                <h2>Start a revolution<br />right now.</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-single-row pr-md-5 " >
                    <div className="single-row-bg" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-2.jpg')` } }></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-5">
                                <h5>Enjoy the silence</h5>
                                <h2>Acoustic Noise<br />Cancelling</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-single-row single-row-reverse pl-md-5" >
                    <div className="single-row-bg" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-3.jpg')` } }></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-6 col-xl-5 offset-xl-7">
                                <h5>Be Amazed</h5>
                                <h2>The most powerfull<br />headphone ever.</h2>
                                <ul>
                                    <li><i className="icon-ok"></i><span>Any Product types that You want - Simple, Configurable</span></li>
                                    <li><i className="icon-ok"></i><span>Downloadable/Digital Products, Virtual Products</span></li>
                                    <li><i className="icon-ok"></i><span>Inventory Management with Backordered items</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-md-3 mb-xl-5"></div>

                <div className="container">
                    <SingleTab addClass="mb-6" product={ product } />
                </div>

                <div className="product-single-video" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-4.jpg')` } }>
                    <div className="container">
                        <h3>Concept Film</h3>
                        <a href="https://www.youtube.com/watch?v=Ph_VkTVmXh4" className="video-btn">
                            Watch <img src={ `${process.env.PUBLIC_URL}/assets/images/products/single/extended/icon-play.png` } alt="play" />
                        </a>
                    </div>
                </div>

                <FeaturedProductsOne type="featured" link="extended" />
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : [],
        productId: props.match.params.id ? props.match.params.id : ''
    }
}

export default connect( mapStateToProps, {} )( ExtendedProduct );