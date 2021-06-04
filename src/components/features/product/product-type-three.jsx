import React from 'react';
import { Link } from 'react-router-dom';

function ProductTypeThree ( props ) {
    let { addClass = "", link = "default", product, isCategory = false } = props;

    return (
        <div className={ `product-default ${addClass}` }>
            <figure>
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
            </figure>

            <div className="product-details">
                <div className="category-list">
                    {
                        isCategory ?
                            product.category.map( ( category, index ) => (
                                index === ( product.category.length - 1 ) ?
                                    <Link to="#" className="product-category" key={ "ProductTypeThree" + index }>{ category }</Link>
                                    : <Link to="#" className="product-category" key={ "ProductTypeThree" + index }>{ category }, </Link>
                            ) )
                            : ""
                    }
                </div>

                <h2 className="product-title">
                    <Link to={ `${process.env.PUBLIC_URL}/products/${link}/${product.id}` }>{ product.name }</Link>
                </h2>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div>
                {
                    product.salePrice ?
                        <div className="price-box">
                            <span className="old-price">${ product.price.toFixed( 2 ) + " " }</span>
                            <span className="product-price">${ product.salePrice.toFixed( 2 ) }</span>
                        </div>
                        :
                        <div className="price-box">
                            <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductTypeThree;