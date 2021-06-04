import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Magnifier } from "react-image-magnifiers";
import StickyBox from 'react-sticky-box';

//Import Custom Component
import Carousel from '../../../../features/carousel';

//Import Utils
import { stickyContentHandle, setStickyValues } from '../../../../../utils';

function VerticalThumbnail ( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', product } = props;
    const images = product.pictures;

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    const openLightBox = () => {
        let index = document.querySelector( ".product-slider-container .owl-item.active" ).index();
        setPindex( index );
        setOpen( true );
    }

    return (
        <div className={ `product-single-gallery ${addClass}` }>
            <StickyBox offsetTop={ 70 } className="sticky-slider sticky-sidebar">
                <div className="skel-pro skel-magnifier skel-full"></div>

                <div className="product-slider-container product-item">
                    <Carousel addClass="product-single-carousel" settings={ { nav: false } }>
                        {
                            product.pictures ?
                                product.pictures.map( ( gallery, index ) => (
                                    <div className="product-item" key={ "Product-item" + index }>
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

                    <span className="prod-full-screen" onClick={ openLightBox }>
                        <i className="icon-plus"></i>
                    </span>
                </div>

                <div className="prod-thumbnail row owl-dots transparent-dots flex-column" id='carousel-quick-dots'>
                    {
                        product.pictures ?
                            product.pictures.map( ( gallery, index ) => (
                                <div className="owl-dot" key={ "Owl-dot" + index }>
                                    <img src={ `${process.env.PUBLIC_URL}/${gallery}` } alt="product" />
                                </div>
                            ) )
                            : ""
                    }
                </div>
            </StickyBox>

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
        </div>
    )
}

export default VerticalThumbnail;