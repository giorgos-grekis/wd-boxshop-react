import React from 'react';
import { connect } from 'react-redux';

//Import Custom Component
import Carousel from '../features/carousel';
import ProductTypeOne from '../features/product/product-type-one';

//Import Utils
import { productFilter } from '../../utils';

//Import Settings
import { owlSetting3 } from '../../utils/settings';

function ProductCollection ( props ) {
   
    let { title, type } = props;
    let products = productFilter( props.products, type );
  

    return (
        <section className="product-panel">
            <div className="section-title">
                <h2>{ title }</h2>
            </div>

            <Carousel settings={ owlSetting3 }>
                {
                    products.slice( 0, 10 ).map( ( item, index ) => (
                        <ProductTypeOne
                            addClass="inner-quickview inner-icon center-details"
                            product={ item }
                            hasWishIcon={ false }
                            key={ index }
                        />
                    ) )

                  
                }
             
            </Carousel>
        </section>
    )
}



const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( ProductCollection )
