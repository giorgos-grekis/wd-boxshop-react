import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';
import StickyBox from 'react-sticky-box';

//Import Custom Compoenet
import Breadcrumb from '../../common/breadcrumb';
import StickyDetail from './common/details/sticky-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import SingleTab from './common/tabs/single-tab';
import InfoThumbnail from './common/thumbnails/info-thumbnail';
import ProductNav from './common/details/common/product-nav';

//Import Utils
import { findProductById, stickyContentHandle, setStickyValues } from '../../../utils';

function StickyBothProduct ( props ) {
    let products = props.products;
    let product = findProductById( products, props.productId );

    if ( !product ) return ( window.location = process.env.PUBLIC_URL + "/pages/404" );

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

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

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Product Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">
                <Breadcrumb current="Sticky Both" path="Products" />

                <div className="container product-page skeleton-body skel-shop-products">
                    <div className="product-single-container product-both-info mb-0 mb-lg-3">
                        <div className="product-single-details">
                            <div className="product-top-banner position-relative align-items-sm-start">
                                <h1 className="product-title pt-2">{ product.name }</h1>

                                <ProductNav product={ product } link="sticky-both" addClass="mb-0" />
                                <div className="product-single-share mb-1 mb-sm-0">
                                    <div className="social-icons">
                                        <Link to="#" className="social-icon" target="_blank"><i className="icon-facebook"></i></Link>
                                        <Link to="#" className="social-icon" target="_blank"><i className="icon-twitter"></i></Link>
                                        <Link to="#" className="social-icon" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="ratings-container">
                                <div className="product-ratings">
                                    <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                                </div>

                                <Link to="#" onClick={ ( e ) => { e.preventDefault(); } } className="rating-link">{ `( ${product.reviews} Reviews )` }</Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3">
                                <StickyBox className="sticky-sidebar" offsetTop={ 100 }>
                                    <div className="skel-pro skel-sticky"></div>
                                    <div className="product-single-details">
                                        <div className="price-box">
                                            {
                                                product.salePrice ?
                                                    <span className="old-price">${ product.salePrice.toFixed( 2 ) }</span>
                                                    : ""
                                            }
                                            <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                                        </div>

                                        <div className="product-desc mb-0">
                                            <p>{ product.description }</p>
                                        </div>
                                    </div>
                                </StickyBox>
                            </div>

                            <InfoThumbnail addClass="col-lg-6" subClass="col-lg-12" product={ product } />
                            <StickyDetail product={ product } />
                        </div>
                    </div>

                    <SingleTab product={ product } />
                </div>

                <FeaturedProductsOne type="featured" link="sticky-both" />
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

export default connect( mapStateToProps, {} )( StickyBothProduct );