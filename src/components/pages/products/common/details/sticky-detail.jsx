import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StickyBox from 'react-sticky-box';

//Import Custom Component
import Qty from '../../../../features/qty';

//Import Utils
import { findIndex, setStickyValues, stickyContentHandle } from '../../../../../utils';

//Import Action
import { quickAddToCart, addToWishList, addToCompare } from '../../../../../action';

function StickyDetail ( props ) {
    const { product } = props;
    let wishlist = props.wishlist;
    let wishlisted = findIndex( wishlist, props.product.id ) ? true : false;

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    const selectGroup = ( e ) => {
        e.preventDefault();
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

    const addToCompareHandler = ( e ) => {
        e.preventDefault();
        if ( e.currentTarget.classList.contains( "checked" ) ) {
            e.currentTarget.classList.remove( "checked" )
        } else e.currentTarget.classList.add( "checked" );

        props.addToCompare( props.product );
    }

    return (
        <div className="col-lg-3 mt-2 mt-lg-0">
            <StickyBox className="sticky-sidebar" offsetTop={ 100 }>
                <div className="skel-pro skel-sticky"></div>
                <form className="product-single-details" onSubmit={ addToCart }>
                    <div className="product-filters-container mb-1">
                        {
                            product.variants ?
                                product.variants.map( ( variant, index ) => (
                                    <div className="product-single-filter" key={ "product-single-filter" + index }>
                                        <label className="text-uppercase">{ variant.name }:</label>
                                        {
                                            variant.name === "sizes" ?
                                                <ul className="config-size-list">
                                                    {
                                                        variant.type.map( ( item, i ) => (
                                                            <li className={ i === 0 ? "active" : "" } key={ i } >
                                                                <Link to="#" onClick={ selectGroup } data-src={ item.pictures[ 0 ] }>{ item.size }</Link>
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
                                : ""
                        }

                        <div className="product-single-filter product-single-qty">
                            <label>QTY:</label>
                            <Qty addClass='' stock={ product.stock } />
                        </div>
                    </div>

                    <div className="product-action product-all-icons">
                        <button type="submit" className="paction add-cart" title="Add to Cart">
                            Add to Cart
                        </button>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/wishlist` } className={ `paction add-wishlist ${wishlisted === true ? 'checked' : ''}` } title={ `${wishlisted === true ? 'Go to Wishlist' : 'Add to Wishlist'}` } onClick={ onWithWishClick }>
                            <span>Add to Wishlist</span>
                        </Link>
                        <Link to="#" className="paction add-compare" title="Add to Compare" onClick={ addToCompareHandler }>
                            <span>Add to Compare</span>
                        </Link>
                    </div>
                </form>
            </StickyBox>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    };
}

export default connect( mapStateToProps, { quickAddToCart, addToWishList, addToCompare } )( StickyDetail );