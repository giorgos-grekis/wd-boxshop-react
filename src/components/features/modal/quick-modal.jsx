import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";
import Modal from 'react-modal';
import imagesLoaded from 'imagesloaded';

//Import Custom Component
import Carousel from '../carousel';
import Qty from '../qty';

//Import Action
import { quickAddToCart, addToWishList, hideQuickView, addToCompare } from '../../../action';

//Import Utils
import { findIndex, getPrice } from '../../../utils';

const customStyles = {
    content: {
        position: 'relative',
        maxWidth: '872px',
        width: '90%',
        right: 'auto',
        padding: '20px 20px 10px',
        overflow: 'hidden'
    }
};

function QuickModal ( props ) {
    const { product } = props;
    let wishlist = props.wishlist;
    let isInWishlist = props.product ? ( findIndex( wishlist, props.product.id ) ? true : false ) : false;
    let maxPrice, minPrice = 0;

    const selectGroup = ( e ) => {
        e.preventDefault();
        document.querySelector( ".product-single-gallery .owl-item.active img" ) && document.querySelector( ".product-single-gallery .owl-item.active img" ).setAttribute( "src", e.currentTarget.getAttribute( "data-src" ) );
        e.currentTarget.parentElement.parentElement.querySelector( ".active" ) && e.currentTarget.parentElement.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.parentElement && e.currentTarget.parentElement.classList.add( "active" );
    }

    const closeModal = () => {
        document.querySelector( ".product-quick-view" ) && ( document.querySelector( ".product-quick-view" ).style.opacity = 0 );
        setTimeout( () => {
            props.hideQuickView();
        }, 40 );
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
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( props.product );
        }
    }

    const setHeight = () => {
        let height;
        height = parseInt( window.innerHeight - 40 )

        if ( height % 2 !== 0 ) height += 1;
        if ( document.querySelector( ".product-quick-view" ) ) {
            document.querySelector( ".product-quick-view" ).style.maxHeight = height + "px";
            document.querySelector( ".product-quick-view .custom-scrollbar" ).style.maxHeight = height - 40 + "px";
        }
    }

    const afterOpenModal = () => {
        let imgLoad = imagesLoaded( ".product-single-gallery" );

        if ( document.querySelector( '.quickview-modal-overlay .skeleton-body' ) ) {
            document.querySelector( '.quickview-modal-overlay .skeleton-body' ).classList.remove( 'loaded' );
        }

        imgLoad.on( "done", function () {
            if ( document.querySelector( '.quickview-modal-overlay .skeleton-body' ) ) {
                document.querySelector( '.quickview-modal-overlay .skeleton-body' ).classList.add( 'loaded' );
                document.querySelector( '.quickview-modal-overlay .skeleton-body' ).style.overflowY = "auto";
            }
        } )

        setHeight();
        window.onresize = () => {
            setHeight();
        }
        document.querySelector( ".product-quick-view" ).style.opacity = 1;
    }

    const addToCompareHandler = ( e ) => {
        e.preventDefault();
        if ( e.currentTarget.classList.contains( "checked" ) ) {
            e.currentTarget.classList.remove( "checked" )
        } else e.currentTarget.classList.add( "checked" );

        props.addToCompare( product );
    }

    if ( !props.modalShow ) return ( <div></div> );

    if ( product.variants ) {
        maxPrice = getPrice( product.variants );
        minPrice = getPrice( product.variants, 'min' );
    }

    return (
        <>
            <Modal
                isOpen={ props.modalShow }
                onRequestClose={ closeModal }
                shouldFocusAfterRender={ false }
                className="product-single-container product-single-default mb-0 product-quick-view container"
                style={ customStyles }
                overlayClassName="quickview-modal-overlay"
                closeTimeoutMS={ 100 }
                onAfterOpen={ afterOpenModal }
            >
                <div className="row row-sparse skeleton-body skel-shop-products custom-scrollbar">
                    <div className="col-md-6 product-single-gallery mb-0">
                        <div className="skel-pro skel-magnifier"></div>
                        <div className="product-slider-container product-item">
                            <Carousel addClass="product-single-carousel">
                                {
                                    product.pictures ?
                                        product.pictures.map( ( gallery, index ) => (
                                            <div className="product-item" key={ "product-item" + index }>
                                                <Magnifier
                                                    imageSrc={ `${process.env.PUBLIC_URL}/${gallery}` }
                                                    imageAlt="product"
                                                    mouseActivation="hover"
                                                    cursorStyleActive="crosshair"
                                                    dragToMove={ false }
                                                    className="product-single-image"
                                                />
                                            </div>
                                        ) )
                                        : ""
                                }
                            </Carousel>
                        </div>

                        <div className="prod-thumbnail row owl-dots" id='carousel-quick-dots'>
                            {
                                product.pictures ?
                                    product.pictures.map( ( gallery, index ) => (
                                        <div className="col-3 owl-dot" key={ "Owl-dot" + index }>
                                            <figure>
                                                <img src={ `${process.env.PUBLIC_URL}/${gallery}` } alt="product" />
                                            </figure>
                                        </div>
                                    ) )
                                    : ""
                            }
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="skel-pro skel-detail"></div>
                        <div className="product-single-details mt-2 mt-md-0">
                            <h1 className="product-title">{ product.name }</h1>

                            <div className="ratings-container">
                                <div className="product-ratings">
                                    <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                                </div>

                                <Link to="#" onClick={ ( e ) => { e.preventDefault(); } } className="rating-link">{ `( ${product.reviews} Reviews )` }</Link>
                            </div>

                            {
                                product.variants ?
                                    <div className="price-box">
                                        <span className="product-price">${ minPrice.toFixed( 2 ) } - ${ maxPrice.toFixed( 2 ) }</span>
                                    </div>
                                    :
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

                            <div className="product-desc">
                                <p>{ product.shortDetails }</p>
                            </div>

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
                                        }
                                    </div>
                                    : ""
                            }

                            <form className="product-action product-all-icons" onSubmit={ addToCart }>
                                <Qty stock={ product.stock } />
                                <button type="submit" className="paction add-cart" title="Add to Cart">
                                    <span></span>Add to Cart
                                </button>
                                <Link to={ `${process.env.PUBLIC_URL}/pages/wishlist` } className={ `paction add-wishlist ${isInWishlist === true ? 'checked' : ''}` } title={ `${isInWishlist === true ? 'Go to Wishlist' : 'Add to Wishlist'}` } onClick={ onWithWishClick }>
                                    <span>Add to Wishlist</span>
                                </Link>
                                <Link to="#" className="paction add-compare" title="Add to Compare" onClick={ addToCompareHandler }>
                                    <span>Add to Compare</span>
                                </Link>
                            </form>

                            <div className="product-single-share mb-1">
                                <div className="social-icons">
                                    <Link to="#" className="social-icon" target="_blank"><i className="icon-facebook"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank"><i className="icon-twitter"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button title="Close (Esc)" type="button" className="mfp-close" onClick={ closeModal } >×</button>
            </Modal>
        </>
    )
}

const mapStateToProps = ( state ) => {
    return {
        product: state.data.single ? state.data.single : [],
        modalShow: state.data.quickShow ? true : false,
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { quickAddToCart, addToWishList, hideQuickView, addToCompare } )( QuickModal );