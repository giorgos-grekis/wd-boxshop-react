import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import imagesLoaded from 'imagesloaded';

// Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import TopBanner from '../../features/banner/top-banner';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';
import InfiniteProduct from './common/infinite-product';
import ShopSidebar from './common/shop-sidebar';
import ToolBox from './common/tool-box';

function InfiniteScroll () {
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

                <Breadcrumb current="Infinite Scroll" path="Categories" />

                <div className="container category-container">
                    <div className="row">
                        <div className="col-lg-9 col-xl-10 skeleton-body skel-shop-products">
                            <ToolBox
                                displayCount={ displayCount }
                                gridType={ gridType }
                                changeDisplay={ onChangeDisplayCount }
                            />

                            <InfiniteProduct
                                displayCount={ displayCount }
                                type={ layout }
                                productCount={ onChangeProductCount }
                            />
                        </div>

                        <SidebarToggle />

                        <aside className="sidebar-shop col-lg-3 col-xl-2 order-lg-first mobile-sidebar">
                            <ShopSidebar setPadding="pb-4" />
                        </aside>
                    </div>
                </div>

                <div className="mb-5"></div>
            </div>
        </>
    )
}

export default InfiniteScroll;