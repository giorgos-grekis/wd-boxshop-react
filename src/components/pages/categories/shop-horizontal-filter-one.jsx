import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import imagesLoaded from 'imagesloaded';

// Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import TopBanner from '../../features/banner/top-banner';
import Pagination from '../../features/pagination';
import GridProduct from './common/grid-product';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';
import HorizontalToolBoxOne from './common/horizontal-toolbox-one';
import ShopSidebar from './common/shop-sidebar';

function HorizontalFilterOne ( props ) {
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

                <Breadcrumb current="Filter 1" path="Categories" />

                <div className="container category-container">
                    <HorizontalToolBoxOne
                        displayCount={ displayCount }
                        gridType={ gridType }
                        changeDisplay={ onChangeDisplayCount }
                    />

                    <div className="row products-body">
                        <div className="col-xl-10 col-lg-9 main-content skeleton-body skel-shop-products">
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

                        <aside className="sidebar-shop col-lg-3 col-xl-2 order-lg-first mobile-sidebar filter-one">
                            <ShopSidebar addClass="pt-lg-0" />
                        </aside>
                    </div>
                </div>

                <div className="mb-5"></div>
            </div>
        </>
    )
}

export default HorizontalFilterOne;