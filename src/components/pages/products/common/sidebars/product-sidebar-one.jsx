import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlideToggle } from 'react-slide-toggle';
import StickyBox from 'react-sticky-box'

//import Custom Component
import WidgetBanner from '../../../../features/banner/widget-banner';
import FeaturedProductsTwo from '../product-groups/featured-products-two';

//import Utils
import { stickyContentHandle, setStickyValues } from '../../../../../utils';

function ProductSidebarOne ( props ) {
    const { addClass = "col-lg-3 col-xl-2" } = props;

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    return (
        <aside className={ `sidebar-product mobile-sidebar ${addClass}` }>
            <StickyBox className="sticky-sidebar" offsetTop={ 100 }>
                <div className="sidebar-wrapper">
                    <FeaturedProductsTwo />

                    <SlideToggle collapsed={ false }>
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="widget pb-0 overflow-hidden">
                                    <h3 className="widget-title">
                                        <Link to="#" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ `h-auto ${toggleState.toLowerCase()}` }>Custom HTML Block</Link>
                                    </h3>

                                    <div ref={ setCollapsibleElement }>
                                        <div className="widget-body">
                                            <h4 className="widget-subtitle">This is a custom sub-title.</h4>

                                            <p>Lorem ipsum dolor ist amet, consec tetur elitad adipiscing Cras non placerat mi.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SlideToggle>

                    <WidgetBanner src="assets/images/demo/banners/banner-sidebar.jpg" addClass="pb-5 pt-4" />
                </div>
            </StickyBox>
        </aside>
    )
}


export default ProductSidebarOne;