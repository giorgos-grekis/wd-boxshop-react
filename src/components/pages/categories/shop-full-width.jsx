import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import imagesLoaded from 'imagesloaded';

// Import Custom Component
import Breadcrumb from '../../common/breadcrumb';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';
// import TopBanner from '../../features/banner/top-banner';
import Pagination from '../../features/pagination';
import GridProduct from './common/grid-product';
import ShopSidebar from './common/shop-sidebar';
import ToolBox from './common/tool-box';
import HomeBannerOther from '../../home/home-banner-other';
import DemoData from '../../../mock-data/data.json';

function FullWidth () {
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
                <title>Box Shop - Σελίδα Κατηγόριες Προϊόντων</title>
            </Helmet>

            <h1 className="d-none">Box Shop - Σελίδα Κατηγόριες Προϊόντων</h1>

            <div className="main">
                {/* <TopBanner /> */}

                <Breadcrumb current="Full Width" path="Categories" />

                <div className="container category-container">
                    <div className="row row-sm">
                        <div className="col-lg-9 col-xl-10 skeleton-body skel-shop-products">
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
                                count={ productCount }
                                displayCount={ displayCount }
                                layout={ layout }
                                changeDisplay={ onChangeDisplayCount }
                                curPage={ onChangeCurPage }
                            />
                        </div>

                        <SidebarToggle />

                        <aside className="sidebar-shop col-lg-3 col-xl-2 order-lg-first mobile-sidebar">
                            <ShopSidebar isWomen={ true } />
                        </aside>
                    </div>
                </div>

                <div className="mb-5"></div>

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

export default FullWidth;