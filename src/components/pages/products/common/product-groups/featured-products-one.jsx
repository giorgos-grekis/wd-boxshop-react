import React from 'react';
import { connect } from 'react-redux';

//Import Custom Component
import Carousel from '../../../../features/carousel';
import ProductTypeOne from '../../../../features/product/product-type-one';

//Import Utils
import { productFilter } from '../../../../../utils';

//Import Settings
import { owlSetting1 } from '../../../../../utils/settings';

function FeaturedProductsOne ( props ) {
    const { addClass = "", isContainer = true, link = "default" } = props;
    let featured = productFilter( props.products, props.type );

    return (
        <section className={ `with-border-top ${addClass}` }>
            <div className={ isContainer ? 'container product-panel' : 'product-panel' }>
                <div className="section-title">
                    <h2>Related Products</h2>
                </div>

                <Carousel settings={ owlSetting1 }>
                    {
                        featured.slice( 0, 6 ).map( ( item, index ) => (
                            <ProductTypeOne
                                addClass="inner-quickview inner-icon center-details"
                                hasWishIcon={ false }
                                link={ link }
                                product={ item }
                                key={ "product-type-5" + index }
                            />
                        ) )
                    }
                </Carousel>
            </div>
        </section>
    )
}

const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( FeaturedProductsOne );