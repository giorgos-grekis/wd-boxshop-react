import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import {getPrice, findIndex} from '../../../utils';
import {addToCart, addToWishList, showQuickView} from '../../../action';

function ProductTypeOne(props) {
  let isInWishlist = props.product
    ? findIndex(props.wishlist, props.product.id)
      ? true
      : false
    : false;
  let {
    addClass = '',
    link = 'default',
    product,
    isImageLoad = true,
    hasWishIcon = true,
    showQuickView,
    addToCart,
  } = props;
  let priceMax,
    priceMin = 0;

  if (product.variants) {
    priceMax = getPrice(product.variants);
    priceMin = getPrice(product.variants, 'min');
  }

  const onWishlistClick = e => {
    if (!isInWishlist) {
      e.preventDefault();
      props.addToWishList(product);
    }
  };

  return (
    <div className={`product-default ${addClass}`}>
      <figure>
        {isImageLoad ? (
          <Link to={`${process.env.PUBLIC_URL}/products/${link}/${product.id}`} title={product.name}>
            <div className='lazy-overlay bg-3'></div>

            <LazyLoadImage
              alt={product.name}
              className='images-border'
              src={process.env.PUBLIC_URL + '/' + product.pictures[0]}
              threshold={500}
              effect='black and white'
            />
            {product.pictures.length >= 2 ? (
              <LazyLoadImage
                alt={product.name}
                className='images-border'
                src={process.env.PUBLIC_URL + '/' + product.pictures[1]}
                threshold={500}
                effect='black and white'
                wrapperClassName='product-image-hover'
              />
            ) : (
              ''
            )}
          </Link>
        ) : (
          <Link to={`${process.env.PUBLIC_URL}/products/default/${product.id}`}>
            <span>
              <img
                src={process.env.PUBLIC_URL + '/' + product.pictures[0]}
                className='first-image'
                alt={product.name}
              />
            </span>
            {product.pictures[1] ? (
              <span className='product-image-hover'>
                <img
                  src={process.env.PUBLIC_URL + '/' + product.pictures[1]}
                  className='last-image'
                  alt={product.name}
                />
              </span>
            ) : (
              ''
            )}
          </Link>
        )}

        <div className='label-group'>
          {product.discount && product.salePrice ? (
            <span className='product-label label-sale'>
              {product.discount}% OFF
            </span>
          ) : (
            ''
          )}
          {!product.salePrice && product.featured ? (
            <span className='product-label label-hot'>hot</span>
          ) : (
            ''
          )}
          {!product.salePrice && product.new ? (
            <span className='product-label label-new'>new</span>
          ) : (
            ''
          )}
        </div>

        <div className='btn-icon-group'>
          <button
            className='btn-icon btn-add-cart'
            title='προσθήκη στο καλάθι'
            data-toggle='modal'
            data-target='#addCartModal'
            onClick={() => addToCart(product, 1)}
          >
            <i className='icon-bag'></i>
          </button>
        </div>
        <Link
          to='#'
          className='btn-quickview'
          title='γρηγορη ματια'
          onClick={e => {
            e.preventDefault();
            showQuickView(product);
          }}
        >
          Quick View
        </Link>
      </figure>

      <div className='product-details'>
        <div className='category-wrap'>
          <div className='category-list'>
            {product.category.map((category, index) =>
              index === product.category.length - 1 ? (
                <Link
                  to='#'
                  className='product-category'
                  key={'category' + index}
                >
                  {category}
                </Link>
              ) : (
                <Link
                  to='#'
                  className='product-category'
                  key={'category' + index}
                >
                  {category},{' '}
                </Link>
              )
            )}
          </div>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/wishlist`}
            className={`btn-icon-wish ${isInWishlist ? 'checked' : ''} ${
              hasWishIcon ? '' : 'd-none'
            }`}
            onClick={onWishlistClick}
            title={`${
              isInWishlist === true ? 'Go to Wishlist' : 'Add to Wishlist'
            }`}
          >
            <i className='icon-heart'></i>
          </Link>
        </div>

        <h2 className="d-none">
          {product.name}
        </h2>

        <h3 className='product-title'>
          <Link to={`${process.env.PUBLIC_URL}/products/default/${product.id}`}>{product.name}
          </Link>
        </h3>

        {/* Rating */}
        {/* <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div> */}
        {product.variants ? (
          <div className='price-box'>
            <span className='product-price'>
              €{priceMin.toFixed(2)} - €{priceMax.toFixed(2)}
            </span>
          </div>
        ) : product.salePrice ? (
          <div className='price-box'>
            <span className='old-price'>€{product.price.toFixed(2)}</span>
            <span className='product-price'>
              €{product.salePrice.toFixed(2)}
            </span>
          </div>
        ) : (
          <div className='price-box'>
            <span className='product-price'>€{product.price.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default connect(mapStateToProps, {
  addToCart,
  addToWishList,
  showQuickView,
})(ProductTypeOne);
