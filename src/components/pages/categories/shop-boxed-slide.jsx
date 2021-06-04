import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import imagesLoaded from 'imagesloaded';

// Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import Carousel from '../../features/carousel';
import Pagination from '../../features/pagination';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';
import GridProduct from './common/grid-product';
import ShopSidebar from './common/shop-sidebar';
import ToolBox from './common/tool-box';

function BoxedSlide () {
    const [ curPage, setCurPage ] = useState( 1 );
    const [ layout, setLayout ] = useState( "grid" );
    const [ productCount, setProductCount ] = useState( 0 );
    const [ displayCount, setDisplayCount ] = useState( 12 );

    useEffect( () => {
        let imgLoad = imagesLoaded( ".product-group" );

        if ( document.querySelector( '.skeleton-body.loaded' ) ) {
            document.querySelector( '.skeleton-body' ).classList.remove( 'loaded' );
        }

        imgLoad.on( "done", function () {
            if ( document.querySelector( '.skeleton-body' ) ) {
                document.querySelector( '.skeleton-body' ).classList.add( 'loaded' );
            }
        } )
    } )

    const gridType = ( layoutParam ) => {
        if ( layout !== layoutParam ) {
            setLayout( layoutParam );
        }
    }

    const onChangeProductCount = ( countParam ) => {
        if ( productCount !== countParam )
            setProductCount( countParam );
    }

    const onChangeCurPage = ( curPageParam ) => {
        if ( curPage !== curPageParam ) {
            setCurPage( curPageParam );
        }
    }

    const onChangeDisplayCount = ( countParam ) => {
        if ( displayCount !== countParam ) {
            setDisplayCount( countParam );
        }
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Product Category Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Category Page</h1>

            <div className="main">
                <Breadcrumb current="Boxed Slide" path="Categories" />

                <div className="container category-container">
                    <div className="row">
                        <div className="col-lg-9 col-xl-10 skeleton-body skel-shop-products">
                            <Carousel addClass="boxed-slider owl-carousel-lazy owl-theme-light" >
                                <div className="category-slide">
                                    <div className="slide-bg owl-lazy" data-src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-top.jpg` } alt="banner" width="870" height="300" ></div>
                                    <div className="banner boxed-slide-content offset-1">
                                        <h2 className="banner-subtitle">check out over <span>200+</span></h2>
                                        <h1 className="banner-title">
                                            INCREDIBLE deals
                                        </h1>
                                        <Link to="#" className="btn btn-primary">Shop Now</Link>
                                    </div>
                                </div>

                                <div className="category-slide">
                                    <div className="slide-bg owl-lazy" data-src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-top.jpg` } alt="banner" width="870" height="300" ></div>
                                    <div className="banner boxed-slide-content offset-1">
                                        <h2 className="banner-subtitle">check out over <span>200+</span></h2>
                                        <h1 className="banner-title">
                                            INCREDIBLE deals
                                        </h1>
                                        <Link to="#" className="btn btn-primary">Shop Now</Link>
                                    </div>
                                </div>
                            </Carousel>

                            <ToolBox
                                displayCount={ displayCount }
                                changeDisplay={ onChangeDisplayCount }
                                gridType={ gridType }
                            />

                            <GridProduct
                                curPage={ curPage }
                                type={ layout }
                                displayCount={ displayCount }
                                productCount={ onChangeProductCount }
                            />

                            <Pagination
                                displayCount={ displayCount }
                                layout={ layout }
                                count={ productCount }
                                changeDisplay={ onChangeDisplayCount }
                                curPage={ onChangeCurPage }
                            />
                        </div>

                        <SidebarToggle />

                        <aside className="sidebar-shop col-lg-3 col-xl-2 order-lg-first mobile-sidebar">
                            <ShopSidebar addClass="pt-lg-0" />
                        </aside>
                    </div>
                </div>

                <div className="mb-5"></div>
            </div>
        </>
    )
}

export default BoxedSlide;