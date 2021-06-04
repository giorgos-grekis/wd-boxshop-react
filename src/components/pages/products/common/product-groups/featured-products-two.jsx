import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SlideToggle } from 'react-slide-toggle';

//Import Custom Component
import ProductTypeFour from '../../../../features/product/product-type-four';

//Import Utils
import { productFilter } from '../../../../../utils';

function FeaturedProductsTwo ( props ) {
    const { link = "default", type = "featured" } = props;
    let featured = productFilter( props.products, type );

    return (
        <SlideToggle collapsed={ false }>
            {
                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                    <div className="widget overflow-hidden">
                        <h3 className="widget-title">
                            <Link to="#" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ `h-auto ${toggleState.toLowerCase()}` }>RECENTLY VIEWED PRODUCTS</Link>
                        </h3>

                        <div ref={ setCollapsibleElement }>
                            <div className="widget-body">
                                <div className="product-intro">
                                    {
                                        featured.slice( 0, 3 ).map( ( item, index ) => (
                                            <ProductTypeFour addClass="left-details product-widget" link={ link } product={ item } key={ "product-type-4" + index } />
                                        ) )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </SlideToggle>
    )
}

const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : [],
    }
}

export default connect( mapStateToProps, {} )( FeaturedProductsTwo );