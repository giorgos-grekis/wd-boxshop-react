import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';

//Import Custom Component
import Carousel from '../../../features/carousel';
import Breadcrumb from '../../../common/breadcrumb';
import HomeBannerOther from '../../../home/home-banner-other';

//Import Data
import DemoData from '../../../../mock-data/data.json';

//Import Utils
import { owlSetting6 } from '../../../../utils/settings';

function About () {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const images = DemoData.gallery;

    const openLightBox = ( index ) => {
        setPindex( index );
        setOpen( true );
    }

    return (
        <>
            <Helmet>
                <title>Box Shop - About Us Page </title>
            </Helmet>

            <h1 className="sr-only">Box Shop - About Us Page</h1>

            <div className="main">
                {/* <div className="page-header page-header-bg text-left" style={ { background: `70%/cover #D4E1EA url('${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-top.jpg')` } }>
                    <div className="container">
                        <h1>About Us </h1>
                    </div>
                </div> */}

                <Breadcrumb current="About Us" />

                <div className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h2 className="subtitle">Η ΙΣΤΟΡΙΑ ΜΑΣ</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus a eros in venenatis. Cras mauris arcu, suscipit id lacinia sed, pulvinar in urna. Donec urna nisi, efficitur fermentum ullamcorper non, mattis et est. Nullam malesuada leo leo, non tempus turpis accumsan a. Sed tincidunt feugiat purus, sed lobortis justo consequat in. Phasellus lectus magna, accumsan eget felis in, hendrerit malesuada lectus. Duis orci nunc, vulputate vel sapien nec, sodales sollicitudin ligula..</p>
                            </div>

                            <div className="col-lg-5">
                                <h2 className="subtitle">ΣΧΟΛΙΑ ΠΕΛΑΤΩΝ</h2>

                                <Carousel addClass="testimonials-slider" settings={ { nav: false } }>
                                    <div className="testimonial">
                                        <div className="testimonial-owner">
                                            <figure>
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/clients/client1.png` } alt="client" />
                                            </figure>

                                            <div>
                                                <h3 className="testimonial-title">john Smith</h3>
                                                <span>Proto Co Ceo</span>
                                            </div>
                                        </div>

                                        <blockquote>
                                            <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing.</p>
                                        </blockquote>
                                    </div>

                                    <div className="testimonial">
                                        <div className="testimonial-owner">
                                            <figure>
                                                <img src="assets/images/clients/client2.png" alt="client" />
                                            </figure>

                                            <div>
                                                <h4 className="testimonial-title">Bob Smith</h4>
                                                <span>Proto Co Ceo</span>
                                            </div>
                                        </div>

                                        <blockquote>
                                            <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing.</p>
                                        </blockquote>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gallery-section popup-gallery">
                    <div className="container">
                        <h2 className="subtitle">ΦΩΤΟΓΡΑΦΙΚΟ ΥΛΙΚΟ</h2>

                        <Carousel settings={ owlSetting6 }>
                            {
                                DemoData.gallery ?
                                    DemoData.gallery.map( ( gallery, index ) => (
                                        <Link to="#" title='gallery' className="gallery-item" onClick={ () => openLightBox( index ) } index={ "GalleryItem" + index }>
                                            <div className="lazy-overlay bg-3 "></div>

                                            <LazyLoadImage
                                                alt="product"
                                                src={ `${process.env.PUBLIC_URL}/${gallery}` }
                                                threshold={ 100 }
                                                effect="blur"
                                                width="100"
                                                height="222"
                                            />
                                        </Link>
                                    ) )
                                    : ""
                            }
                        </Carousel>
                    </div>
                </div>

                <div className="company-section">
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <div className="col-md-6">
                                <figure>
                                    <div className="lazy-overlay bg-3"></div>

                                    <LazyLoadImage
                                        alt="product"
                                        src={ process.env.PUBLIC_URL + '/assets/images/about/img-1.jpg' }
                                        threshold={ 100 }
                                        effect="blur"
                                        width="100"
                                        height="443" />
                                </figure>
                            </div>

                            <div className="col-md-6 padding-left-lg">
                                <h3 className="subtitle">Η ΑΠΟΣΤΟΛΗ ΜΑΣ</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>

                                <h3 className="subtitle">ΟΙ ΣΤΟΧΟΙ ΜΑΣ</h3>
                                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only look now.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="features-section bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="feature-box">
                                    <i className="icon-shipped"></i>

                                    <div className="feature-box-content">
                                        <h3>Free Shipping</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="feature-box">
                                    <i className="icon-us-dollar"></i>

                                    <div className="feature-box-content">
                                        <h3>100% Money Back Guarantee</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="feature-box">
                                    <i className="icon-online-support"></i>

                                    <div className="feature-box-content">
                                        <h3>Online Support 24/7</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* add HomeBannerOther */}
                <div className="row row-sm mb-5 container mx-auto text-center">
                        {
                            DemoData.bannerOther.map( ( item, index ) => (
                                <HomeBannerOther banner={ item } key={ index } />
                            ) )
                        }
                </div>
                {/* end of add HomeBannerOther */}

            </div>


        

            {
                open && (
                    <Lightbox
                        mainSrc={ `${process.env.PUBLIC_URL}/${images[ photoIndex ]}` }
                        nextSrc={ `${process.env.PUBLIC_URL}/${images[ ( photoIndex + 1 ) % images.length ]}` }
                        prevSrc={ `${process.env.PUBLIC_URL}/${images[ ( photoIndex + images.length - 1 ) % images.length ]}` }
                        onCloseRequest={ () => setOpen( false ) }
                        onMovePrevRequest={ () =>
                            setPindex( ( photoIndex + images.length - 1 ) % images.length )
                        }
                        onMoveNextRequest={ () =>
                            setPindex( ( photoIndex + 1 ) % images.length )
                        }
                    />
                )
            }
        </>
    )
}

export default About;