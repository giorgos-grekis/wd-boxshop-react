import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function HomeBannerOther ( props ) {
    const { banner } = props;

    return (
      
        
            <div className="col-sm-12 col-lg-12 col-xl-6">
                <div className={ `row row-sm home-banner4-${banner.class} mb-3` }>
                    <div className="col-md-4">
                        <span>{ banner.title }</span>
                        <h3>{ banner.desc }</h3>
                    </div>

                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <figure>
                            <div className="lazy-overlay bg-2"></div>

                            {banner.src ?  <LazyLoadImage
                                alt="banner"
                                src={ `${process.env.PUBLIC_URL}/${banner.src}` }
                                width={ 100 }
                                height={ 140 }
                                effect="blur"
                                className="slide-img1"
                            /> : ''}

                        </figure>
                    </div>

                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }><button className="btn">{ banner.button }</button></Link>
                    </div>
                </div>
            </div>
          

        
    
    )
}

export default HomeBannerOther;