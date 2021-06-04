import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Import Custom Compoent
import ProductNav from './common/product-nav';
import Qty from '../../../../features/qty';

//Import Utils
import { findIndex, getPrice } from '../../../../../utils';

//Import Action 
import { quickAddToCart, addToWishList, addToCompare } from '../../../../../action'

function SingleDetail ( props ) {
    const { product, isSticky = false } = props;
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
                <ProductNav product={ product } link={ props.link } />
                <h1 className="product-title">{ product.name }</h1>

                {/* <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                    </div>

                    <Link to="#" onClick={ ( e ) => { e.preventDefault(); } } className="rating-link">{ `( ${product.reviews} Reviews )` }</Link>
                </div> */}

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

                <div className="product-desc">
                    <p>{ product.shortDetails }</p>
                </div>

                {/* colors sizes */}
                {
                    // product.variants ?
                    //     <div className="product-filters-container">
                    //         {
                    //             product.variants.map( ( variant, index ) => (
                    //                 <div className="product-single-filter" key={ "product-single-filter" + index }>
                    //                     <label className="text-uppercase">{ variant.name }:</label>
                    //                     {
                    //                         variant.name === "sizes" ?
                    //                             <ul className="config-size-list">
                    //                                 {
                    //                                     variant.type.map( ( item, i ) => (
                    //                                         <li className={ i === 0 ? "active" : "" } key={ i } >
                    //                                             <Link to="#" onClick={ selectGroup } data-src={ `${process.env.PUBLIC_URL}/${item.pictures[ 0 ]}` }>{ item.size }</Link>
                    //                                         </li>
                    //                                     ) )
                    //                                 }
                    //                             </ul>
                    //                             : <ul className="config-swatch-list">
                    //                                 {
                    //                                     variant.type.map( ( item, i ) => (
                    //                                         <li className={ i === 0 ? "active" : "" } key={ i } >
                    //                                             {
                    //                                                 item.color ?
                    //                                                     <Link to="#" onClick={ selectGroup } data-src={ `${process.env.PUBLIC_URL}/${item.pictures[ 0 ]}` } style={ { backgroundColor: item.color } }></Link>
                    //                                                     : <Link to="#" data-src={ `${process.env.PUBLIC_URL}/${item.pictures[ 0 ]}` } onClick={ selectGroup } style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/${item.pictures[ 0 ]})` } }></Link>
                    //                                             }
                    //                                         </li>
                    //                                     ) )
                    //                                 }
                    //                             </ul>
                    //                     }
                    //                 </div>
                    //             ) )
                    //         }
                    //     </div>
                    //     : ""
                }
                {/* end colors sizes */}


                    {/* band, κωδικος, διαθεσιμότητα */}
                        <div className="product-filters-container">
                        
                            <div className="product-single-filter" key={"product-single-filter"}>
                                <label className="text-uppercase">Brand:</label>
                            </div>

                            <div className="product-single-filter" key={ "product-single-filter" }>
                                <label className="text-uppercase">ΚΩΔΙΚΟΣ:</label>
                            </div>
                            
                            <div className="product-single-filter" key={ "product-single-filter" }>
                                <label className="text-uppercase">ΔΙΑΘΕΣΙΜΟΤΗΤΑ:</label>
                            </div>
                            
                        </div>

                {/* end of band, κωδικος, διαθεσιμότητα */}

                

                {
                    isSticky ?
                        <div className="sticky-wrapper">
                            <div className="sticky-header">
                                <div className="container">
                                    <div className="sticky-img">
                                        <img src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` } alt="Product" />
                                    </div>
                                    <div className="sticky-detail">
                                        <div className="sticky-product-name">
                                            <h1 className="product-title">{ product.name }</h1>
                                            {
                                                product.salePrice ?
                                                    <div className="price-box">
                                                        <span className="old-price">€{ product.price.toFixed( 2 ) }</span>
                                                        <span className="product-price">€{ product.salePrice.toFixed( 2 ) }</span>
                                                    </div>
                                                    :
                                                    <div className="price-box">
                                                        <span className="product-price">€{ product.price.toFixed( 2 ) }</span>
                                                    </div>
                                            }
                                        </div>

                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                                            </div>

                                            <Link to="#" onClick={ ( e ) => { e.preventDefault(); } } className="rating-link">{ `( ${product.reviews} Reviews )` }</Link>
                                        </div>
                                    </div>

                                    <form className="product-action product-all-icons mb-0 ml-auto" onSubmit={ addToCart }>
                                        <Qty stock={ product.stock } />
                                        <button type="submit" className="paction add-cart" title="Add to Cart">
                                            προσθηκη στο καλαθι
                                    </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        : ""
                }

                <form className="product-action product-all-icons" onSubmit={ addToCart }>
                    <Qty stock={ product.stock } />
                    <button type="submit" className="paction add-cart" title="Add to Cart">
                        προσθηκη στο καλαθι
                    </button>
                    {/* <Link to={ `${process.env.PUBLIC_URL}/pages/wishlist` } className={ `paction add-wishlist ${wishlisted === true ? 'checked' : ''}` } title={ `${wishlisted === true ? 'Go to Wishlist' : 'Add to Wishlist'}` } onClick={ onWithWishClick }>
                        <span>Add to Wishlist</span>
                    </Link> */}
                </form>

                <div className="product-single-share mb-3">
                    <div className="social-icons">
                        <Link to="#" className="social-icon" target="_blank" title="facebook icon"><i className="icon-facebook"></i></Link>
                        <Link to="#" className="social-icon" target="_blank" title="Twitter icon"><i className="icon-twitter"></i></Link>
                        <Link to="#" className="social-icon" target="_blank" title="Linkedin icon"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    };
}

export default connect( mapStateToProps, { quickAddToCart, addToCompare, addToWishList } )( SingleDetail );