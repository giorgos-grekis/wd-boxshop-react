import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

//Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import SingleDetail from './common/details/single-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import SingleTab from './common/tabs/single-tab';
import VerticalThumbnail from './common/thumbnails/vertical-thumbnail';

//Import Utils
import { findProductById } from '../../../utils';

function VerticalProduct ( props ) {
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
                <Breadcrumb current="Vertical" path="Products" />

                <div className="container">
                    <div className="product-single-container product-single-default skeleton-body skel-shop-products">
                        <div className="row">
                            <VerticalThumbnail addClass="col-lg-6 col-xl-4" product={ product } />

                            <div className="col-lg-6 col-xl-8">
                                <SingleDetail product={ product } link="vertical" />
                                <SingleTab product={ product } />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-single-video" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-4.jpg')` } }>
                    <div className="container">
                        <h3>Concept Film</h3>
                        <a href="https://www.youtube.com/watch?v=Ph_VkTVmXh4" className="video-btn">
                            Watch <img src={ `${process.env.PUBLIC_URL}/assets/images/products/single/extended/icon-play.png` } alt="play" />
                        </a>
                    </div>
                </div>

                <FeaturedProductsOne type="featured" link="vertical" />
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

export default connect( mapStateToProps, {} )( VerticalProduct );