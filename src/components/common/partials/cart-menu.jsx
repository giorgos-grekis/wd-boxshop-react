// done

import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { removeFromCart } from '../../../action'
import { getCartTotal, getQtyTotal } from '../../../utils';

function CartMenu( props ) {
    const { cartItems, removeFromCart } = props;

    return (
        <div className="dropdown cart-dropdown">
            <Link className="dropdown-toggle" to={ `${ process.env.PUBLIC_URL }/shop/cart` } role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title='καθάλι αγορών'>
                <i className="minicart-icon"></i>
                { getQtyTotal( cartItems ) === 0 ? '': <span className="cart-count" title="προϊόντα στο καλάθι">{ getQtyTotal( cartItems ) }</span>}

                {/* <span className="cart-count" title="προϊόντα στο καλάθι">{ getQtyTotal( cartItems ) === 0 ? '' : getQtyTotal( cartItems ) }</span> */}
            </Link>

            <div className="dropdown-menu">
                <div className="dropdownmenu-wrapper">
                    <div className="dropdown-cart-header">
                        <span>{ cartItems.length } Items</span>
                        <Link to={ `${ process.env.PUBLIC_URL }/pages/cart` } className="float-right">View Cart</Link>
                    </div>

                    <div className="dropdown-cart-products">
                        {
                            cartItems.map( ( item, index ) => (
                                <div className="product" key={ "product" + index }>
                                    <div className="product-details">
                                        <h2 className="product-title">
                                            <Link to={ `${ process.env.PUBLIC_URL }/product-detail` }>{ item.name }</Link>
                                        </h2>
                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">{ item.qty }</span>
                                                x €{ item.salePrice ? item.salePrice.toFixed( 2 ) : item.price.toFixed( 2 ) }
                                        </span>
                                    </div>
                                    <figure className="product-image-container">
                                        <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ item.id }` } className="product-image">
                                            <img src={ `${ process.env.PUBLIC_URL }/${ item.pictures[ 0 ] }` } alt="product" />
                                        </Link>
                                        <Link to="#" className={ `btn-remove icon-cancel` } title="Remove Product" onClick={ ( e ) => { e.preventDefault(); removeFromCart( item ); } }><i className="icon-retweet"></i></Link>
                                    </figure>
                                </div>
                            ) )
                        }
                    </div>
                    <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price float-right">€ { getCartTotal( cartItems ).toFixed( 2 ) }</span>
                    </div>
                    <div className="dropdown-cart-action">
                        <Link to={ `${ process.env.PUBLIC_URL }/pages/checkout/shipping/one` } className="btn btn-block btn-primary">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}


function mapStateToProps( state ) {
    return {
        cartItems: state.cartList.cart ? state.cartList.cart : []
    }
}

export default connect( mapStateToProps, { removeFromCart } )( CartMenu );