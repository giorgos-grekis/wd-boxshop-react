import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import imagesLoaded from 'imagesloaded';

// Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import TopBanner from '../../features/banner/top-banner';
import Pagination from '../../features/pagination';
import GridProduct from './common/grid-product';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';
import HorizontalToolBoxTwo from './common/horizontal-toolbox-two';
import ShopSidebar from './common/shop-sidebar';

function HorizontalFilterTwo () {
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
                <div className="category-banner-container bg-gray">
                    <TopBanner />
                </div>

                <Breadcrumb current="Filter 2" path="Categories" />

                <div className="container category-container">
                    <HorizontalToolBoxTwo
                        displayCount={ displayCount }
                        gridType={ gridType }
                        changeDisplay={ onChangeDisplayCount }
                    />

                    <div className="products-body">
                        <div className="skeleton-body skel-shop-products">
                            <GridProduct curPage={ curPage }
                                cols={ 4 }
                                displayCount={ displayCount }
                                type={ layout }
                                productCount={ onChangeProductCount }
                            />

                            <Pagination
                                count={ productCount }
                                displayCount={ displayCount }
                                layout={ layout }
                                changeDisplay={ onChangeDisplayCount }
                                curPage={ onChangeCurPage }
                            />
                        </div>

                        <SidebarToggle />

                        <aside className="sidebar-shop filter-two d-lg-none order-lg-first mobile-sidebar">
                            <ShopSidebar link="filterTwo" />
                        </aside>
                    </div>
                </div>

                <div className="mb-5"></div>
            </div>
        </>
    )
}

export default HorizontalFilterTwo;