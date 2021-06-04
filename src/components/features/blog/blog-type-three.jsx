import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import DateData from '../../../mock-data/data.json';

function BlogTypeThree ( props ) {
    const { blog } = props;
    let date = new Date( blog.date );

    return (
        <article className="post">
            <div className="post-media">

                {
                    blog.pictures ?
                        <Link className="d-inline-block" to={ `${process.env.PUBLIC_URL}/pages/single/${blog.id}` } >
                            <figure className="position-static">
                                <div className="lazy-overlay bg-3"></div>
                                <LazyLoadImage
                                    alt="post_image"
                                    src={ `${process.env.PUBLIC_URL}/${blog.pictures[ 0 ]}` }
                                    threshold={ 200 }
                                    effect="opacity"
                                    placeholderSrc={ `${process.env.PUBLIC_URL}/assets/images/lazy.png` }
                                />
                            </figure>
                        </Link>
                        : ""
                }

            </div>
            <div className="post-body">
                <div className="post-date">
                    <span className="day">{ date.getDate() < 10 ? '0' + date.getDate() : date.getDate() }</span>
                    <span className="month">{ DateData.monthTypeOne[ date.getMonth() ] }</span>
                </div>

                <h2 className="post-title">
                    <Link to={ `${process.env.PUBLIC_URL}/pages/single/${blog.id}` }>{ blog.title }</Link>
                </h2>

                <div className="post-content">
                    <p>{ blog.shortDetails }</p>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/single/${blog.id}` } className="read-more">Read More <i className="icon-angle-double-right"></i></Link>
                </div>
            </div>
        </article>
    )
}

export default BlogTypeThree;