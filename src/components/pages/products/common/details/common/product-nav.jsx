import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function ProductNav ( props ) {
    const { link = "default", toDefault = false, product, products, addClass = "mb-3" } = props;
    let matchedProducts = products;

    if ( window.location.pathname.indexOf( "extended" ) > -1 || window.location.pathname.indexOf( "grid" ) > -1 ) {
        matchedProducts = products.reduce( ( acc, cur ) => {
            if ( cur.pictures.length >= 3 ) return [ ...acc, cur ];
            else return acc;
        }, [] );
    }

    let index = matchedProducts.indexOf( product );
    const prevProduct = matchedProducts[ index - 1 ],
        nextProduct = matchedProducts[ index + 1 ];

    return (
        <div className={ `product-nav d-flex ${addClass}` }>
            <div className="product-prev">
                {
                    prevProduct ?
                        <Link to={ toDefault ? `${process.env.PUBLIC_URL}/products/default/45` : `${process.env.PUBLIC_URL}/products/${link}/${prevProduct.id}` }>
                            <span className="product-link"></span>
                            <span className="product-popup">
                                <span className="box-content">
                                    <span className="product-image">
                                        <span className="inner">
                                            <img width="150" height="150" src={ `${process.env.PUBLIC_URL}/${prevProduct.pictures[ 0 ]}` } alt="product" />
                                        </span>
                                    </span>
                                    <span className="product-details">
                                        <span className="product-title mb-0">
                                            { prevProduct.name }
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </Link>
                        : <span className="product-link disabled"></span>
                }
            </div>

            <div className="product-next">
                {
                    nextProduct ?
                        <Link to={ toDefault ? `${process.env.PUBLIC_URL}/products/default/45` : `${process.env.PUBLIC_URL}/products/${link}/${nextProduct.id}` }>
                            <span className="product-link"></span>
                            <span className="product-popup">
                                <span className="box-content">
                                    <span className="product-image">
                                        <span className="inner">
                                            <img width="150" height="150" src={ `${process.env.PUBLIC_URL}/${nextProduct.pictures[ 0 ]}` } alt="product" />
                                        </span>
                                    </span>
                                    <span className="product-details">
                                        <span className="product-title mb-0">
                                            { nextProduct.name }
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </Link>
                        : <span className="product-link disabled"></span>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( ProductNav );