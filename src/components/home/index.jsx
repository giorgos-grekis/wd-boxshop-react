import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Import Custom Component
import HomeBanner from './home-banner';
import ProductCollection from './product-collection';
import Carousel from '../features/carousel';
import NewsletterModal from '../features/modal/newsletter-modal';

//Import Utils
import { setParallax } from '../../utils';

//Import Data
import DemoData from '../../mock-data/data.json';
// import categories from '../../mock-data/category.json';

//Import Settings
import { owlSetting3 } from '../../utils/settings';

export default function HomePage () {
    useEffect( () => {
        if ( document.querySelector( ".parallax" ) ) {
            document.addEventListener( "scroll", setParallax );
        }

        document.querySelector( '.menu' ).firstChild.classList.add( 'active' );
    } )

    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );

    const openLightBox = ( index ) => {
        setPindex( index );
        setOpen( true );
    }


    return (
        <>
            <Helmet>
                <title>Box Shop - Αρχική Σελίδα</title>
            </Helmet>

            <h1 className="sr-only">Box Shop - Αρχική Σελίδα</h1>

            <main className="home main">


                {/* <Carousel addclassName="top-slider" settings={ { dots: false } }> */}
                   
                
                {/* main home images*/}
                <div className="home-slide">
                        <div className="slide-content flex-column flex-lg-row">
                            <figure className="mx-auto mr-lg-0 py-5 mb-lg-0 mb-7">
                                <div className="lazy-overlay bg-transparent"></div>

                                <LazyLoadImage
                                    alt="main Images"
                                    src={ process.env.PUBLIC_URL + '/assets/images/demo/slider/slide1.png' }
                                    width={ 100 }
                                    threshold={ 100 }
                                    effect="blur"

                                />
                            </figure>

                            <div className="content-right order-first order-lg-1 mx-auto mt-10 mt-lg-5 mb-lg-5 ">
                                <span style={ {color: '#707070'}}>ΕΚΠΤΩΣΗ</span>
                                <h2>20% ΣΤΙΣ</h2>
                                <h3 className="cross-txt">ΜΙΚΡΟΣΥΣΚΕΥΕΣ</h3>
                                <h4 className="mb-2 mb-lg-8">philips</h4>
                                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }><button className="btn btn__my-dark">ΔΕΙΤΕ ΤΑ ΠΡΟΪΟΝΤΑ</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* end of main home images*/}


                    {/* <div className="home-slide">
                        <div className="slide-content flex-column flex-lg-row">
                            <div className="content-left mx-auto mr-lg-0 mt-6 mt-lg-5 mb-lg-5">
                                <span>EXTRA</span>
                                <h2>20% OFF</h2>
                                <h4 className="cross-txt">BIKES</h4>
                                <h3 className="mb-2 mb-lg-8">Summer Sale</h3>
                                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }><button className="btn">Shop All Sale</button></Link>
                            </div>

                            <div className="image-container mx-auto py-5">
                                <figure>
                                    <div className="lazy-overlay bg-transparent"></div>

                                    <LazyLoadImage
                                        alt="slide image"
                                        src={ process.env.PUBLIC_URL + '/assets/images/demo/slider/slide2.png' }
                                        width={ 100 }
                                        height={ 397 }
                                        threshold={ 100 }
                                        effect="blur"
                                        className="slide-img1"
                                    />
                                </figure>

                                <div className="image-info mt-4 mt-lg-2 mt-lg-6 mb-4 mb-lg-0 flex-column flex-sm-row">
                                    <div className="info-left">
                                        <h4>only <span><sup>$</sup>399<sup>99</sup></span></h4>
                                    </div>
                                    <div className="info-right">
                                        <h4>Start Shopping Right Now</h4>
                                        <p>*Get Plus Discount Buying Package</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  */}

                 {/* </Carousel> */}


                {/* Δημοφιλη  προϊόντα*/}
                <div className="container">
                    
                    <ProductCollection type="featured" title="ΔΗΜΟΦΙΛΗ ΠΡΟΪΟΝΤΑ" />

                    {/* <Carousel addclassName="product-cat-box" settings={ owlSetting5 }>
                        {
                            categories.slice( 0, 5 ).map( ( item, index ) => (
                                <div className="product-cat" key={ index }>
                                    <i className={ item.src }></i>
                                    <span>{ item.category }</span>
                                </div>
                            ) )
                        }
                    </Carousel> */}
                </div>
                {/* end of Δημοφιλη  προϊόντα*/}
                


                {/* <div className="home-banner mb-3 flex-wrap flex-md-nowrap pt-0 mt-0">

                    <div className="banner-left mb-1 mb-md-0 mx-auto ml-md-0 mr-md-3">
                        <figure>
                            <div className="lazy-overlay bg-2"></div>

                            <LazyLoadImage
                                alt="banner"
                                src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner1.jpg` }
                                width={ 100 }
                                effect="blur"
                                className="slide-img1"
                            />
                        </figure>
                    </div>

                    <div className="banner-right">
                        <figure>
                            <div className="lazy-overlay bg-transparent"></div>

                            <LazyLoadImage
                                alt="banner"
                                src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner2.jpg` }
                                width={ 100 }
                                threshold={ 100 }
                                effect="blur"
                                className="slide-img1"
                            />
                        </figure>

                        <div className="banner-content">
                            <span>get ready</span>
                            <div className="mb-1">
                                <h3 className="align-middle d-inline">20% Off</h3>
                                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn">Shop All Sale</Link>
                            </div>
                            <h4 className="cross-txt">bikes</h4>
                        </div>
                    </div>

                </div> */}



                {/* b stock product */}
                <div className="home-slide">
                        <div className="slide-content flex-column flex-lg-row">
                            {/* <figure className="mx-auto mr-lg-0 py-5 mb-lg-0 mb-7 w-50">
                                <div className="lazy-overlay bg-transparent"></div>

                                <LazyLoadImage
                                    alt="slide image"
                                    src={ process.env.PUBLIC_URL + '/assets/images/demo/slider/slide1.png' }
                                    width={ 100 }
                                    threshold={ 100 }
                                    effect="blur"
                                />
                            </figure> */}

                            <div className="mx-auto p-5 mb-7 mt-7 flex-grow-1 bstock">
                                <div className="text-center">
                                    <h2>B STOCK ΠΡΟΪΟΝΤΑ ΣΕ ΜΟΝΑΔΙΚΕΣ ΤΙΜΕΣ</h2>
                                </div>

                                <div className="mt-5 d-flex justify-content-center">
                                    {/* first product */}
                                    <div className="bg-white w-40-border bstock__product mr-5">
                                     <img alt="product-bstock-1" className="d-block mx-auto" src="/assets/images/demo/products/grey/product-bstock-1.png" />
                                     <p><span className='bstock__span'>Watch Fashion, </span><span className='bstock__span'>Pants & Denim</span></p>
                                     <h3 className="product-title text-center">Philips product</h3>
                                     <p className="product-price mt-1 mb-5">€ 9.00</p>
                                    </div>
                                 
                                     {/* end of first product */}

                                    {/* second product */}
                                    <div className="bg-white w-40 images-border bstock__product ml-5">
                                     <img alt="product-bstock-2" className="d-block mx-auto" src="/assets/images/demo/products/grey/product-bstock-2.png" />
                                     <p><span className='bstock__span'>Watch Fashion, </span><span className='bstock__span'>Pants & Denim</span></p>
                                     <h3 className="product-title text-center">Philips product</h3>
                                     <p className="product-price mt-1 mb-5">€ 9.00</p>
                                    </div>
                                    {/* end of second product */}
                                    
                                </div>
                                
                            </div>



                            <div className="content-right order-first order-lg-1 b-stock-pdt mx-auto mt-10 mt-lg-5 mb-lg-5">
                                <span style={{color: '#929292'}}>B STOCK</span>
                                <h2>ΕΚΠΤΩΣΕΙΣ ΕΩΣ 30%</h2>
                                <h3 className="cross-txt-white">ΕΠΩΝΥΜΑ ΠΡΟΪΟΝΤΑ</h3>
                                <h4 className="mb-2 mb-lg-8">Offers</h4>
                                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }><button className="btn btn__my-secondary">ΔΕΙΤΕ ΤΑ ΠΡΟΪΟΝΤΑ</button></Link>
                            </div>
                        </div>
                    </div>
                {/* end of b stock product */}



               




              

                <div className="container">
                    <ProductCollection type="top" title="ΠΡΟΣΦΟΡΕΣ" />

                    <div className="row row-sm mb-5 home-banner4 text-center">
                        {
                            DemoData.banner.map( ( item, index ) => (
                                <HomeBanner banner={ item } key={ index } />
                            ) )
                        }
                    </div>
                </div>

                {/* about us section*/}
                <div className="company-section">
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <div className="col-md-6">
                                <figure>
                                    <div className="lazy-overlay bg-3"></div>

                                    <LazyLoadImage
                                        alt="Σχετικα με εμας"
                                        src={ process.env.PUBLIC_URL + '/assets/images/about/img-1.jpg' }
                                        threshold={ 100 }
                                        effect="blur"
                                        width="100"
                                        height="443" />
                                </figure>
                            </div>

                            <div className="col-md-6 padding-left-lg">
                                <h3 className="subtitle">ΛΙΓΑ ΛΟΓΙΑ ΓΙΑ ΕΜΑΣ</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>

                                <h3 className="subtitle">ΟΙ ΣΤΟΧΟΙ ΜΑΣ</h3>
                                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only look now.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of about us section */}

            </main>


            <div className="my-5">
                    <div className="container">
                        {/* <h2 className="subtitle">PHOTO GALLERY</h2> */}

                        <Carousel settings={ owlSetting3 }>
                            {
                                DemoData.gallery ?
                                    DemoData.gallery.map( ( gallery, index ) => (
                                        <Link to="#" className="gallery-item" onClick={ () => openLightBox( index ) } index={ "GalleryItem" + index }
                                        title={gallery}
                                        >
                                            {/* <div className="lazy-overlay bg-3"></div> */}

                                            <LazyLoadImage
                                                alt="product"
                                                className="home-page-image-carousel"
                                                src={ `${process.env.PUBLIC_URL}/${gallery}` }
                                                threshold={ 100 }
                                                effect="blur"
                                                // width="100"
                                                // height="222"
                                            />
                                        </Link>
                                    ) )
                                    : ""
                            }
                        </Carousel>
                    </div>
                </div>
            

            <NewsletterModal />
        </>
    )

}
