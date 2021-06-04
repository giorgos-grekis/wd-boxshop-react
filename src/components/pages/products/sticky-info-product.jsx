import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import StickyBox from 'react-sticky-box';
import imagesLoaded from 'imagesloaded';

//Import Custom Compoenet
import Breadcrumb from '../../common/breadcrumb';
import SingleDetail from './common/details/single-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import SingleTab from './common/tabs/single-tab';
import InfoThumbnail from './common/thumbnails/info-thumbnail';

//Import Utils
import { findProductById, setStickyValues, stickyContentHandle } from '../../../utils';

function StickyInfoProduct ( props ) {

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
                <Breadcrumb current="Sticky Info" path="Products" />

                <div className="container">
                    <div className="product-single-container product-page skeleton-body skel-shop-products">
                        <div className="row">
                            <InfoThumbnail addClass="col-lg-6" subClass="col-lg-12" product={ product } />

                            <div className="col-lg-6">
                                <StickyBox className="sticky-sidebar" offsetTop={ 100 }>
                                    <SingleDetail product={ product } noSelect={ true } link="sticky-info" />
                                </StickyBox>
                            </div>
                        </div>
                    </div>

                    <SingleTab product={ product } />
                </div>

                <FeaturedProductsOne type="featured" link="sticky-info" />
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

export default connect( mapStateToProps, {} )( StickyInfoProduct );