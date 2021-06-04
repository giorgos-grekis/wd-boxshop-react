import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Import Action
import { addToCart, addToWishList, showQuickView } from '../../../action';

function ProductTypeFour ( props ) {
    const { addClass = "", link = "default", product } = props;

    return (
        <div className={ `product-default ${addClass}` }>
            <figure>
                <Link to={ `${process.env.PUBLIC_URL}/products/${link}/${product.id}` }>
                    <div className="lazy-overlay bg-3"></div>

                    <LazyLoadImage
                        alt="product"
                        src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] }
                        threshold={ 500 }
                        effect="black and white"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </Link>
            </figure>

            <div className="product-details">
                <h2 className="product-title">
                    <Link to={ `${process.env.PUBLIC_URL}/products/default/${product.id}` }>{ product.name }</Link>
                </h2>
                {
                    product.salePrice ?
                        <div className="price-box">
                            <span className="old-price">${ product.price.toFixed( 2 ) }</span>
                            <span className="product-price">${ product.salePrice.toFixed( 2 ) }</span>
                        </div>
                        :
                        <div className="price-box">
                            <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart, addToWishList, showQuickView } )( ProductTypeFour );

