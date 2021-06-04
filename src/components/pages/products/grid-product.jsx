import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

//Import Custom Compoenet
import Breadcrumb from '../../common/breadcrumb';
import GridDetail from './common/details/grid-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import GridThumbnail from './common/thumbnails/grid-thumbnail';
import SingleTab from './common/tabs/single-tab';

//Import Utils
import { findProductById } from '../../../utils';

function GridProduct ( props ) {
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
                <Breadcrumb current="Grid" path="Products" />

                <div className="container">
                    <div className="product-single-container product-single-grid product-page skeleton-body skel-shop-products">
                        <div className="row">
                            <div className="col-lg-8">
                                <GridThumbnail product={ product } />
                            </div>

                            <div className="col-lg-4">
                                <GridDetail product={ product } link="grid" />
                            </div>
                        </div>
                    </div>

                    <SingleTab product={ product } addClass="mt-1 mt-md-0" />
                </div>

                <FeaturedProductsOne type="featured" addClass="bg-white" link="grid" />

                <div className="mb-lg-3"></div>
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

export default connect( mapStateToProps, {} )( GridProduct );