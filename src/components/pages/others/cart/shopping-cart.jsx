import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { SlideToggle } from 'react-slide-toggle';

//Import Custom Component
import Breadcrumb from '../../../common/breadcrumb';
import QtyVertical from '../common/qty-vertical';

//Import Action
import { removeFromCart, clearCart, moveFromCartToWishlist } from '../../../../action';

function ShoppingCart ( props ) {
    const { cartItmes, removeFromCart } = props;

    const clearCart = ( e ) => {
        e.preventDefault();

        if ( props.cartItmes.length > 0 )
            props.clearCart();
    }

    const moveToWishlist = ( e, item ) => {
        e.preventDefault();
        props.moveFromCartToWishlist( item );
    }

    return (
        <>
            <Helmet>
                <title>React - Cart Page</title>
            </Helmet>

            <h1 className="d-none">React - Cart Page</h1>

            <div className="main">
                <Breadcrumb current="Shopping Cart" />

                <div className="container">
                    {
                        cartItmes.length === 0 ?
                            <div className="align-left mt-3">
                                <div className="cart-title ">
                                    <h2>My Cart on Porto Store</h2>
                                </div>

                                <div className="box-content">
                                    <table className="table-cart" data-pagination="no" data-per-page="5" data-page="1" data-id="" data-token="">
                                        <thead className="d-none">
                                            <tr>
                                                <th className="product-thumbnail"></th>

                                                <th className="product-name">
                                                    <span className="nobr">Product</span>
                                                </th>

                                                <th className="product-price">
                                                    <span className="nobr">price</span>
                                                </th>

                                                <th className="product-stock-status">
                                                    <span className="nobr">Stock status</span>
                                                </th>

                                                <th className="product-add-to-cart">
                                                    <span className="nobr">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="wishlist-items-wrapper">
                                            <tr className="border-0 py-0">
                                                <td colSpan="6" className="px-3 py-2 text-center"><i className="icon-bag-1 cart-empty"></i></td>
                                            </tr>
                                            <tr className="border-0 py-0">
                                                <td colSpan="6" className="px-3 py-2 text-center cart-empty">No products added to the cart</td>
                                            </tr>
                                            <tr className="border-0 py-0">
                                                <td colSpan="6" className="px-3 text-center">
                                                    <Link className="btn btn-go-shop" to={ `${process.env.PUBLIC_URL}/categories/full-width` }>GO SHOP</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            :
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="cart-table-container">
                                        <table className="table table-cart">
                                            <thead>
                                                <tr>
                                                    <th className="product-col">Product</th>
                                                    <th className="price-col">Price</th>
                                                    <th className="qty-col">Qty</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cartItmes.map( ( item, index ) => (
                                                        <React.Fragment key={ "CartItem" + index }>
                                                            <tr className="product-row">
                                                                <td className="product-col">
                                                                    <figure className="product-image-container">
                                                                        <Link to={ `${process.env.PUBLIC_URL}/products/default/${item.id}` } className="product-image">
                                                                            <img src={ `${process.env.PUBLIC_URL}/${item.pictures[ 0 ]}` } alt="product" />
                                                                        </Link>

                                                                        <Link to="#" className="btn-remove icon-cancel" title="Remove Product" onClick={ ( e ) => { e.preventDefault(); removeFromCart( item ); } }></Link>
                                                                    </figure>
                                                                    <h2 className="product-title">
                                                                        <Link to={ `${process.env.PUBLIC_URL}/products/default/${item.id}` }>{ item.name }</Link>
                                                                    </h2>
                                                                </td>
                                                                <td>${ item.salePrice ? item.salePrice.toFixed( 2 ) : item.price.toFixed( 2 ) }</td>
                                                                <td>
                                                                    <QtyVertical product={ item } id={ `qty-vertical-${index}` } />
                                                                </td>
                                                                <td>${ item.sum.toFixed( 2 ) }</td>
                                                            </tr>
                                                            {/* <tr className="product-action-row">
                                                                <td colSpan="4" className="clearfix">
                                                                    <div className="float-left">
                                                                        <Link to="#" className="btn-move" onClick={ ( e ) => moveToWishlist( e, item ) }>Move to Cart</Link>
                                                                    </div>

                                                                    <div className="float-right">
                                                                        <Link to="#" title="Edit product" className="btn-edit"><span className="sr-only">Edit</span><i className="icon-pencil"></i></Link>
                                                                    </div>
                                                                </td>
                                                            </tr> */}
                                                        </React.Fragment>
                                                    ) )
                                                }
                                            </tbody>

                                            <tfoot>
                                                <tr>
                                                    <td colSpan="4" className="clearfix">
                                                        <div className="float-left">
                                                            <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-outline-secondary">Continue Shopping</Link>
                                                        </div>

                                                        <div className="float-right">
                                                            <Link to="#" className="btn btn-outline-secondary btn-clear-cart" onClick={ clearCart }>Clear Shopping Cart</Link>
                                                            <Link to="#" className="btn btn-outline-secondary btn-update-cart">Update Shopping Cart</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="cart-discount">
                                        <h4>Apply Discount Code</h4>
                                        <form action="#">
                                            <div className="input-group">
                                                <label className="sr-only" htmlFor='apply-coupon'>?????????????? ????????????????????</label>
                                                <input type="text" id='apply-coupon' className="form-control form-control-sm" placeholder="Enter discount code" required />
                                                <div className="input-group-append">
                                                    <button className="btn btn-sm btn-primary" type="submit">Apply Discount</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="cart-summary">
                                        <h3>Summary</h3>

                                        <SlideToggle collapsed={ true }>
                                            {
                                                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                    <div>
                                                        <h4>
                                                            <Link to="#" role="button" data-toggle="collapse" onClick={ ( e ) => { e.preventDefault(); onToggle(); } } className={ toggleState.toLowerCase() }>Estimate Shipping and Tax</Link>
                                                        </h4>

                                                        <div className="collapse show" ref={ setCollapsibleElement } style={ { overflow: 'hidden' } } id="total-estimate-section">
                                                            <form action="#">
                                                                <div className="form-group form-group-sm">
                                                                    <label>Country</label>
                                                                    <div className="select-custom">
                                                                        <select className="form-control form-control-sm">
                                                                            <option value="USA">United States</option>
                                                                            <option value="Turkey">Turkey</option>
                                                                            <option value="China">China</option>
                                                                            <option value="Germany">Germany</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group form-group-sm">
                                                                    <label>State/Province</label>
                                                                    <div className="select-custom">
                                                                        <select className="form-control form-control-sm">
                                                                            <option value="CA">California</option>
                                                                            <option value="TX">Texas</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group form-group-sm">
                                                                    <label htmlFor='Postal Code'>Zip/Postal Code</label>
                                                                    <input type="text" id='Postal Code' className="form-control form-control-sm" />
                                                                </div>

                                                                <div className="form-group form-group-custom-control">
                                                                    <label>Flat Way</label>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" id="flat-rate" />
                                                                        <label className="custom-control-label" htmlFor="flat-rate">Fixed $5.00</label>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group form-group-custom-control">
                                                                    <label>Best Rate</label>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" id="best-rate" />
                                                                        <label className="custom-control-label" htmlFor="best-rate">Table Rate $15.00</label>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </SlideToggle>

                                        <table className="table table-totals">
                                            <tbody>
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>${ getCartTotal( cartItmes ).toFixed( 2 ) }</td>
                                                </tr>

                                                <tr>
                                                    <td>Tax</td>
                                                    <td>$0.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>Order Total</td>
                                                    <td>${ getCartTotal( cartItmes ).toFixed( 2 ) }</td>
                                                </tr>
                                            </tfoot>
                                        </table>

                                        <div className="checkout-methods">
                                            <Link to={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/one` } className="btn btn-block btn-sm btn-primary">Go to Checkout</Link>
                                            <Link to={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/two` } className="btn btn-link btn-block p-0">Check Out with Multiple Addresses</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>

                <div className="mb-6"></div>
            </div>
        </>
    )
}

const getCartTotal = items => {
    let total = 0;
    if ( items ) {
        for ( let i = 0; i < items.length; i++ ) {
            total += parseInt( items[ i ].sum, 10 );
        }
    }
    return total;
}

const mapStateToProps = ( state ) => {
    return {
        cartItmes: state.cartList.cart ? state.cartList.cart : []
    }
}

export default connect( mapStateToProps, { removeFromCart, clearCart, moveFromCartToWishlist } )( ShoppingCart );