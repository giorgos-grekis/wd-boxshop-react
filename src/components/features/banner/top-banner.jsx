import React from 'react';
import { Link } from 'react-router-dom';

function TopBanner ( props ) {
    const { isBoxed = false, addClass = "" } = props;

    return (
        <div className={ `category-banner ${addClass}` }>
            {
                isBoxed ?
                    <div className="banner-content container offset-1">
                        <h2 className="banner-subtitle">check out over <span>200+</span></h2>
                        <h1 className="banner-title">
                            INCREDIBLE deals
                        </h1>
                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-primary">Shop Now</Link>
                    </div>
                    :
                    <div className="container">
                        <div className="content-left">
                            <span>EXTRA</span>
                            <h2>20% OFF</h2>
                            <h4 className="cross-txt">BIKES</h4>
                        </div>
                        <div className="content-center">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/category_banner.png` } alt="banner" />
                        </div>
                        <div className="content-right">
                            <p>Summer Sale</p>
                            <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }>
                                <button className="btn">Shop All Sale</button>
                            </Link>
                            {/* <Link to={ `${process.env.PUBLIC_URL}/categories/full-width/1` } type='button' className="btn">
                                Shop All Sale
                            </Link> */}
                        </div>
                    </div>
            }
        </div>
    )
}

export default TopBanner;