import React, { useState } from 'react';
import ReactScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';

//Import Custom Component
import ProductTypeTwo from '../../../features/product/product-type-two';
import ProductTypeOne from '../../../features/product/product-type-one';

//Import Utils
import { shopFilterProducts } from '../../../../utils';

function InfiniteProduct ( props ) {
    const [ infiniteTotal, setInfiniteTotal ] = useState( 12 );
    let products = props.products;
    let total = infiniteTotal;
    products = shopFilterProducts( products, props.filter );

    const fetchData = () => {
        if ( total < props.products.length ) {
            // a fake async api call
            setTimeout( () => {
                setInfiniteTotal( total + 3 );
            }, 2000 );
        }
    }

    return (
        <ReactScroll
            dataLength={ infiniteTotal } //This is important field to render the next data
            next={ fetchData }
            hasMore={ infiniteTotal >= products.length ? false : true }
            style={ { overflow: 'visible' } }
            loader={ <div className="loader">
                <div className="bounce-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div> }>

            <div className={ `row row-sm position-relative ${props.type === "list" ? "product-intro" : ""}` }>
                {
                    props.type === "grid" ?
                        products.slice( 0, total ).map( ( product, index ) => (
                            <div className={ `col-6 col-md-3 fadeInDownShorter` } style={ { animationDuration: 1 + 's' } } key={ "ProductTypeOne" + index }>
                                <div className="skel-pro skel-pro-grid"></div>

                                <ProductTypeOne
                                    addClass="inner-quickview inner-icon"
                                    isImageLoad={ false }
                                    product={ product }
                                />
                            </div>
                        ) )
                        :
                        products.slice( 0, total ).map( ( product, index ) => (
                            <div className="col-6 col-sm-12 fadeInDownShorter" style={ { animationDuration: 1 + 's' } } key={ "ProductTypeOne" + index } >
                                <div className="skel-pro skel-pro-grid"></div>

                                <ProductTypeTwo
                                    addClass="left-details product-list mb-4"
                                    isImageLoad={ false }
                                    product={ product }
                                />
                            </div>
                        ) )
                }
            </div>
        </ReactScroll>
    )
}

const mapStateToProps = ( state ) => {
    return {
        filter: state.filter ? state.filter : [],
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps )( InfiniteProduct );