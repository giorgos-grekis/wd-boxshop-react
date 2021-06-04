import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

//Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import SingleDetail from './common/details/single-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import SidebarToggle from './common/sidebars/sidebar-toggle';
import ProductSidebarOne from './common/sidebars/product-sidebar-one';
import SingleTab from './common/tabs/single-tab';
import HorizontalThumbnail from './common/thumbnails/horizontal-thumbnail';

//Import Utils
import { findProductById } from '../../../utils';

function SimpleProduct ( props ) {
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
                <Breadcrumb current="Horizontal" path="Products" />

                <div className="container">
                    <div className="row row-sm">
                        <div className="col-lg-9 col-xl-10">
                            <div className="product-single-container product-single-default skeleton-body skel-shop-products mb-lg-3 mb-0">
                                <div className="row">
                                    <HorizontalThumbnail addClass="col-xl-4 col-md-6" product={ product } />

                                    <div className="col-xl-8 col-md-6">
                                        <SingleDetail product={ product } link="simple" />
                                    </div>
                                </div>
                            </div>

                            <SingleTab product={ product } />
                        </div>

                        <SidebarToggle />
                        <ProductSidebarOne />
                    </div>
                </div>

                <FeaturedProductsOne type="featured" link="simple" />
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

export default connect( mapStateToProps, {} )( SimpleProduct );