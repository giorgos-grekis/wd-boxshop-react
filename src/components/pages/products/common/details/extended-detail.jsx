import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Import Custom Component
import ProductNav from './common/product-nav';
import Qty from '../../../../features/qty';

//Import Utils
import { getPrice, findIndex } from '../../../../../utils';

//Import Action 
import { quickAddToCart, addToWishList, addToCompare } from '../../../../../action'

function ExtendedDetail ( props ) {
    const { product } = props;
    let maxPrice, minPrice = 0;
    let wishlist = props.wishlist;
    let wishlisted = findIndex( wishlist, product.id ) ? true : false;

    if ( product.variants ) {
        // variant Type => $min-$max price
        maxPrice = getPrice( product.variants );
        minPrice = getPrice( product.variants, 'min' );
    }

    const selectGroup = ( e ) => {
        e.preventDefault();
        if ( props.noSelect === undefined )
            document.querySelector( ".product-single-gallery .owl-item.active img" ).setAttribute( "src", e.currentTarget.getAttribute( "data-src" ) );

        e.currentTarget.parentElement.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.parentElement.classList.add( "active" );
    }

    const addToCart = ( e ) => {
        e.preventDefault();
        let val = 1;
        if ( e.currentTarget.querySelector( ".horizontal-quantity" ) && parseInt( e.currentTarget.querySelector( ".horizontal-quantity" ).getAttribute( "value" ) ) ) {
            val = parseInt( e.currentTarget.querySelector( ".horizontal-quantity" ).getAttribute( "value" ) );
            props.quickAddToCart( props.product, val );
        }
    }

    const onWithWishClick = ( e ) => {
        if ( !wishlisted ) {
            e.preventDefault();
            props.addToWishList( props.product );
        }
    }

    return (
        <>
            <div className="skel-pro skel-extended-detail"></div>
            <div className="product-single-details">
                <div className="product-single-header">
                    <div className="row" style={ { position: 'relative' } }>
                        <ProductNav product={ product } link={ props.link } addClass="mb-0 ml-3 extended-nav" />

                        <div className="col-xl-6">
                            <h1 className="product-title">{ product.name }</h1>

                            <div className="ratings-container">
                                <div className="product-ratings">
                                    <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                                </div>

                                <Link to="#" onClick={ ( e ) => { e.preventDefault(); } } className="rating-link">{ `( ${product.reviews} Reviews )` }</Link>
                            </div>

                            {
                                product.variants ?
                                    <div className="price-box pb-4 pb-xl-0">
                                        <span className="product-price">${ minPrice.toFixed( 2 ) } - ${ maxPrice.toFixed( 2 ) }</span>
                                    </div>
                                    :
                                    product.salePrice ?
                                        <div className="price-box pb-4 pb-xl-0">
                                            <span className="old-price">${ product.price.toFixed( 2 ) }</span>
                                            <span className="product-price">${ product.salePrice.toFixed( 2 ) }</span>
                                        </div>
                                        :
                                        <div className="price-box pb-4 pb-xl-0">
                                            <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                                        </div>
                            }
                        </div>

                        <div className="col-xl-6 single-header-right">
                            <div className="product-single-share">


                                <div className="social-icons">
                                    <Link to="#" className="social-icon" target="_blank"><i className="icon-facebook"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank"><i className="icon-twitter"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>

                            <div className="widget-area">
                                <div className="widget widget-info">
                                    <ul>
                                        <li>
                                            <i className="icon-shipping"></i>
                                            <h4>FREE<br />SHIPPING</h4>
                                        </li>
                                        <li>
                                            <i className="icon-us-dollar"></i>
                                            <h4>100% MONEY<br />BACK GUARANTEE</h4>
                                        </li>
                                        <li>
                                            <i className="icon-online-support"></i>
                                            <h4>ONLINE<br />SUPPORT 24/7</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-desc">
                    <p>{ product.description } <Link to="#" className={ `${process.env.PUBLIC_URL}/categories/full-width` }>(View More)</Link></p>
                </div>

                <div className="product-filters-container">
                    {
                        product.variants ?
                            product.variants.map( ( variant, index ) => (
                                variant.name === "sizes" ?
                                    <div className="product-single-filter mb-2" key={ "product-single-filter" + index }>
                                        <label className="text-uppercase">{ variant.name }:</label>
                                        <ul className="config-size-list">
                                            {
                                                variant.type.map( ( item, i ) => (
                                                    <li className={ i === 0 ? "active" : "" } key={ i } >
                                                        <Link to="#" onClick={ selectGroup }>{ item.size }</Link>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                                    :
                                    <div className="product-single-filter mb-2" key={ "product-single-filter" + index }>
                                        <label className="text-uppercase">{ variant.name }:</label>
                                        <ul className="config-swatch-list">
                                            {
                                                variant.type.map( ( item, i ) => (
                                                    <li className={ i === 0 ? "active" : "" } key={ i } >
                                                        {
                                                            item.color ?
                                                                <Link to="#" onClick={ selectGroup } data-src={ item.pictures[ 0 ] } style={ { backgroundColor: item.color } }></Link>
                                                                : <Link to="#" data-src={ item.pictures[ 0 ] } onClick={ selectGroup } style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/${item.pictures[ 0 ]})` } }></Link>
                                                        }
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                            ) )
                            : ""
                    }
                    <form className="product-action mb-2" onSubmit={ addToCart }>
                        <div className="single-qty-wrapper pt-3 mt-sm-1 mb-0">
                            <label className="mb-1">QTY:</label>
                            <Qty stock={ product.stock } />
                        </div>
                        <button type="submit" className="paction add-cart mb-1 mt-1 mt-sm-0  mb-sm-0" title="Add to Cart">
                            Add to Cart
                        </button>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/wishlist` } className={ `paction add-wishlist mb-0 ${wishlisted === true ? 'checked' : ''}` } title={ `${wishlisted === true ? 'Go to Wishlist' : 'Add to Wishlist'}` } onClick={ onWithWishClick }>
                            <span>Add to Wishlist</span>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    };
}

export default connect( mapStateToProps, { quickAddToCart, addToCompare, addToWishList } )( ExtendedDetail );