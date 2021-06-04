import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getPrice } from '../../../../utils';

import Breadcrumb from '../../../common/breadcrumb';

import { removeFromWishlist, showQuickView, moveFromWishlistToCart } from '../../../../action';

function Wishlist( props ) {
    const { wishlist, removeFromWishlist, showQuickView, moveFromWishlistToCart } = props;

    const moveToCart = ( e, item ) => {
        e.preventDefault();
        moveFromWishlistToCart( item );
    }

    const removeWishlist = ( e, item ) => {
        e.preventDefault();
        removeFromWishlist( item );
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Wishlist Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Wishlist Page</h1>

            <div className="main">
                <div className="page-header custom-page-header bg-gray">
                    <div className="container">
                        <Breadcrumb current="Wishlist" parent="pages" addClass="border-0" />
                        <h1 className="mb-0">Wishlist</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="wishlist-title ">
                        <h2>My wishlist on Photo Store</h2>
                    </div>

                    {
                        wishlist.length === 0 ?
                            <div className="align-left mt-3">

                                <div className="box-content">
                                    <table className="table-wishlist" data-pagination="no" data-per-page="5" data-page="1" data-id="" data-token="">
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
                                                <td colSpan="6" className="px-3 py-2 text-center"><i className="far fa-heart wishlist-empty"></i></td>
                                            </tr>
                                            <tr className="border-0 py-0">
                                                <td colSpan="6" className="px-3 py-2 wishlist-empty">No products added to the wishlist</td>
                                            </tr>
                                            <tr className="border-0 py-0">
                                                <td colSpan="6" className="px-3 text-center">
                                                    <Link className="btn btn-go-shop" to={ `${ process.env.PUBLIC_URL }/categories/full-width` }>GO SHOP</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            :
                            <>
                                <div className="wishlist-table-container">
                                    <table className="table table-order table-wishlist">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail"></th>
                                                <th className="product-name">Product Name</th>
                                                <th className="product-unit-price">Unit Price</th>
                                                <th className="product-stock-status">Stock Status</th>
                                                <th className="product-action"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                wishlist.map( ( item, index ) => (
                                                    <React.Fragment key={ "wishlist-item" + index }>
                                                        <tr>
                                                            <td className="product-thumbnail">
                                                                <div className="position-relative">
                                                                    <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ item.id }` }>
                                                                        <img src={ `${ process.env.PUBLIC_URL }/${ item.pictures[ 0 ] }` } alt="product" />
                                                                    </Link>

                                                                    <Link to="#" onClick={ ( e ) => removeWishlist( e, item ) } className="remove remove-from-wishlist"><i className="icon-retweet"></i></Link>
                                                                </div>
                                                            </td>
                                                            <td className="product-title">
                                                                <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ item.id }` }>{ item.name }</Link>
                                                            </td>
                                                            {
                                                                item.variants ?
                                                                    <td className="price-box">
                                                                        <span className="product-price">${ getPrice( item.variants, 'min' ).toFixed( 2 ) } - ${ getPrice( item.variants ).toFixed( 2 ) }</span>
                                                                    </td>
                                                                    :
                                                                    item.salePrice ?
                                                                        <td className="price-box">
                                                                            <del className="old-price">${ item.price.toFixed( 2 ) }</del>
                                                                            <span className="product-price">${ item.salePrice.toFixed( 2 ) }</span>
                                                                        </td>
                                                                        :
                                                                        <td className="price-box">
                                                                            <span className="product-price">${ item.price.toFixed( 2 ) }</span>
                                                                        </td>
                                                            }
                                                            <td className="product-stock-status">
                                                                <span className="stock-status">{ item.stock > 10 ? "In Stock" : "Out of Stock" }</span>
                                                            </td>
                                                            <td className="product-action">
                                                                <button className="btn btn-add-cart" onClick={ ( e ) => moveToCart( e, item ) }><span>Add to Cart</span></button>
                                                                <Link to="#" className="btn btn-quickview" title="Quick View" onClick={ ( e ) => { e.preventDefault(); showQuickView( item ) } }><i className="fas fa-external-link-alt"></i><span>Quick View</span></Link>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                ) )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </>
                    }
                </div>

                <div className="mb-6"></div>
            </div>
        </>

    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { removeFromWishlist, showQuickView, moveFromWishlistToCart } )( Wishlist );