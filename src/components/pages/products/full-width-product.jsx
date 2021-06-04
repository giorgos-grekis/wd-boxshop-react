import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

//Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import SingleDetail from './common/details/single-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import SingleTab from './common/tabs/single-tab';
// import VerticalThumbnail from './common/thumbnails/vertical-thumbnail';
import HorizontalThumbnail from './common/thumbnails/horizontal-thumbnail';
import HomeBannerOther from '../../home/home-banner-other';
import DemoData from '../../../mock-data/data.json';

//Import Utils
import { findProductById } from '../../../utils';

function FullWidthProduct ( props ) {

    // console.log(props, 'twra')

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
                <title>Box Shop - Product Page </title>
            </Helmet>

            <h1 className="sr-only">Box Shop - Product Page</h1>

            <div className="main">
                <Breadcrumb current="Vertical" path="Products" />

                <div className="container">
                    <div className="product-single-container product-single-default skeleton-body skel-shop-products">
                        <div className="row">
                        <HorizontalThumbnail addClass="col-xl-4 col-md-6" product={ product } />

                            <div className="col-lg-6 col-xl-8">
                                <SingleDetail product={ product } link="vertical" />
                                <SingleTab product={ product } />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="product-single-video" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-4.jpg')` } }>
                    <div className="container">
                        <h3>Concept Film</h3>
                        <a href="https://www.youtube.com/watch?v=Ph_VkTVmXh4" className="video-btn">
                            Watch <img src={ `${process.env.PUBLIC_URL}/assets/images/products/single/extended/icon-play.png` } alt="play" />
                        </a>
                    </div>
                </div> */}

                <FeaturedProductsOne type="featured" link="vertical" />

                {/* add HomeBannerOther */}
                <div className="row row-sm mb-5 container mx-auto text-center">
                        {
                            DemoData.bannerOther.map( ( item, index ) => (
                                <HomeBannerOther banner={ item } key={ index } />
                            ) )
                        }
                </div>
                {/* end of add HomeBannerOther */}

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

export default connect( mapStateToProps, {} )( FullWidthProduct );