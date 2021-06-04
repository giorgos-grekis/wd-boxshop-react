import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function HomeBanner ( props ) {
    const { banner } = props;

    return (
        <div className="col-sm-6 d-flex justify-content-between">
            <div className={ `row row-sm home-banner4-${banner.class}`}>
                <div className="col-md-8 text-lg-left text-md-center ">
                    <span className="ml-lg-2 ml-md-0 text-wrap pr-md-5 pr-sm-0 d-block">{ banner.title }</span>
                    <h3>{ banner.desc }</h3>
                </div>

                {/* <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <figure>
                        <div className="lazy-overlay bg-2"></div>

                        <LazyLoadImage
                            alt="banner"
                            src={ `${process.env.PUBLIC_URL}/${banner.src}` }
                            width={ 100 }
                            height={ 140 }
                            effect="blur"
                            className="slide-img1"
                        />
                    </figure>
                </div> */}

                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }><button className="btn">{banner.button}</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;