import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Import Custom Component
import ProductNav from './common/product-nav';
import Qty from '../../../../features/qty';

//Import Utils
import { findIndex, getPrice } from '../../../../../utils';

//Import Action 
import { quickAddToCart, addToWishList, addToCompare } from '../../../../../action'

function GridDetail ( props ) {
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
            <div className="skel-pro skel-detail"></div>
            <div className="product-single-details">
                <h1 className="product-title">{ product.name }</h1>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                    </div>

                    <Link to="#" onClick={ ( e ) => { e.preventDefault(); } } className="rating-link">{ `( ${product.reviews} Reviews )` }</Link>
                </div>

                <ProductNav product={ product } link={ props.link } />
                {
                    product.variants ?
                        <div className="product-filters-container">
                            {
                                product.variants.map( ( variant, index ) => (
                                    <div className="product-single-filter" key={ "product-single-filter" + index }>
                                        <label className="text-uppercase">{ variant.name }:</label>
                                        {
                                            variant.name === "sizes" ?
                                                <ul className="config-size-list">
                                                    {
                                                        variant.type.map( ( item, i ) => (
                                                            <li className={ i === 0 ? "active" : "" } key={ i } >
                                                                <Link to="#" onClick={ selectGroup }>{ item.size }</Link>
                                                            </li>
                                                        ) )
                                                    }
                                                </ul>
                                                : <ul className="config-swatch-list">
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
                                        }
                                    </div>
                                ) )
                            }
                        </div>
                        : ""
                }

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

                <form className="product-action product-all-icons" onSubmit={ addToCart }>
                    <Qty stock={ product.stock } />
                    <button type="submit" className="paction add-cart" title="Add to Cart">
                        Add to Cart
                    </button>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/wishlist` } className={ `paction add-wishlist ${wishlisted === true ? 'checked' : ''}` } title={ `${wishlisted === true ? 'Go to Wishlist' : 'Add to Wishlist'}` } onClick={ onWithWishClick }>
                        <span>Add to Wishlist</span>
                    </Link>
                </form>

                <ul className="single-info-list">
                    <li>AVAILABILITY: <strong>AVAILABLE</strong></li>
                    <li>SKU: <strong>123456789</strong></li>
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    };
}

export default connect( mapStateToProps, { quickAddToCart, addToCompare, addToWishList } )( GridDetail );