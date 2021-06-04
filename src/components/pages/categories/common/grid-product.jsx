import React from 'react';
import { connect } from 'react-redux';

// Import Custom Component
import ProductTypeOne from '../../../features/product/product-type-one';
import ProductTypeTwo from '../../../features/product/product-type-two';

// Import Utils
import { shopFilterProducts } from '../../../../utils';

function GridProduct ( props ) {
    const { displayCount, curPage, cols = 4, productType = "" } = props;
    let subClass = getClass( cols );
    let products = props.products;
    products = shopFilterProducts( products, props.filter );

    function getClass ( cols ) {
        let subClass = "";
        if ( cols === 4 ) {
            subClass = "col-xl-3";
        } else if ( cols === 5 ) {
            subClass = "col-xl-5col";
        } else if ( cols === 6 ) {
            subClass = "col-xl-2";
        } else if ( cols === 7 ) {
            subClass = "col-xl-7col";
        } else if ( cols === 8 ) {
            subClass = "col-xl-8col";
        }

        return subClass;
    }

    console.log(props, 'grid-product-react')
    console.log(products, 'grid-products')
    

    return (
        <div className={ `product-group ${productType === "flex-grid" && props.type === "grid" ? "row mx-0 divide-line up-effect" : ( "row row-sm position-relative " + ( props.type === "list" ? "product-intro list-style" : "" ) )} ` }>
            {
                products.length === 0 ?
                    <h4 className="mt-3 ml-4 text-dark mb-4" style={ { fontWeight: 400 } }><i className="fas fa-info-circle text-primary mr-2"></i>No products were found matching your selection.</h4>
                    : ''
            }
            {
                props.type === "grid" ?
                    products.slice( ( curPage - 1 ) * displayCount, curPage * displayCount ).map( ( product, index ) => (
                        productType === "flex-grid" ?
                            <>
                                <div className="skel-pro skel-pro-grid col-6 col-sm-4 col-lg-3 "></div>

                                <ProductTypeOne
                                    addClass="col-6 col-sm-4 col-lg-3 inner-quickview inner-icon"
                                    isImageLoad={ false }
                                    product={ product }
                                    key={ "flex-grid" + index }
                                />
                            </>
                            :
                            <div className={ `col-6 col-md-4 ${subClass}` } key={ "grid" + index }>
                                <div className="skel-pro skel-pro-grid"></div>

                                <ProductTypeOne
                                    addClass="inner-quickview inner-icon"
                                    isImageLoad={ false }
                                    noAction={ cols > 4 ? true : false }
                                    product={ product }
                                />
                            </div>
                    ) )
                    :
                    products.slice( ( curPage - 1 ) * displayCount, curPage * displayCount ).map( ( product, index ) => (
                        <React.Fragment key={ "list" + index }>
                            <div className="skel-pro skel-pro-list"></div>

                            <ProductTypeTwo
                                addClass="col-6 col-sm-12 left-details product-list"
                                isImageLoad={ false }
                                product={ product }
                            />
                        </React.Fragment>
                    ) )
                    
            }
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        filter: state.filter ? state.filter : [],
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps )( GridProduct );

