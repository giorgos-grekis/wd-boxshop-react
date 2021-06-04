import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Import Action
import { addToCart, addToWishList, showQuickView } from '../../../action';

//Import Utils
import { findIndex } from '../../../utils';

function ProductTypeTwo ( props ) {
    const { isImageLoad = true, link = "default" } = props;

    let isInWishlist = findIndex( props.wishlist, props.product.id ) ? true : false;
    let { addClass = "", product, showQuickView, addToCart } = props;

    const onWishlistClick = ( e ) => {
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( props.product );
        }
    }

    return (
        <div className={ `product-default ${addClass}` }>
            <figure>
                {
                    isImageLoad ?
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
                        :
                        <Link to={ `${process.env.PUBLIC_URL}/products/default/${product.id}` } >
                            <span>
                                <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } className="first-image" alt="product" />
                            </span>
                            {
                                product.pictures[ 1 ] ?
                                    <span className="product-image-hover">
                                        <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] } className="last-image" alt="product" />
                                    </span> : ""

                            }
                        </Link>
                }

                <div className="label-group">
                    {
                        product.discount && product.salePrice ?
                            <span className="product-label label-sale">{ product.discount }% OFF</span>
                            : ""
                    }
                    {
                        !product.salePrice && product.featured ?
                            <span className="product-label label-hot">hot</span>
                            : ""
                    }
                    {
                        !product.salePrice && product.new ?
                            <span className="product-label label-new">new</span>
                            : ""
                    }
                </div>
            </figure>

            <div className="product-details">
                <div className="category-list">
                    {
                        product.category.map( ( category, index ) => (
                            index === ( product.category.length - 1 ) ?
                                <Link to="#" className="product-category" key={ "ProductTypeTwo" + index }>{ category }</Link>
                                : <Link to="#" className="product-category" key={ "ProductTypeTwo" + index }>{ category }, </Link>
                        ) )
                    }
                </div>
                <h2 className="product-title">
                    <Link to={ `${process.env.PUBLIC_URL}/products/default/${product.id}` }>{ product.name }</Link>
                </h2>
                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div>
                <p className="product-description">
                    { product.description }
                </p>
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
                <div className="product-action">
                    <button className="btn-icon btn-add-cart" onClick={ () => addToCart( product ) }><i className="icon-bag"></i>Add to Bag</button>

                    <Link to={ `${process.env.PUBLIC_URL}/pages/wishlist` } className={ `btn-icon-wish ${isInWishlist ? 'checked' : ''}` } onClick={ onWishlistClick } title={ `${isInWishlist === true ? 'Go to Wishlist' : 'Add to Wishlist'}` }>
                        <i className="icon-heart"></i>
                    </Link>

                    <Link to="#" className="btn-quickview" title="Quick View" onClick={ ( e ) => { e.preventDefault(); showQuickView( product ) } }>
                        <i className="fas fa-external-link-alt"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart, addToWishList, showQuickView } )( ProductTypeTwo );

