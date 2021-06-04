import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Magnifier } from "react-image-magnifiers";

//Import Custom Component
import Carousel from '../../../../features/carousel';

function HorizontalThumbnail ( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', product, isThumnailDot = true } = props;
    const images = product.pictures;

    const openLightBox = () => {
        let index = document.querySelector( ".product-slider-container .owl-item.active" ).index();
        setPindex( index );
        setOpen( true );
    }

    return (
        <div className={ `product-single-gallery ${addClass}` }>
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

                <span className="prod-full-screen" onClick={ openLightBox }>
                    <i className="icon-plus"></i>
                </span>
            </div>

            {
                isThumnailDot ?
                    <div className="prod-thumbnail row owl-dots" id='carousel-quick-dots'>
                        {
                            product.pictures ?
                                product.pictures.map( ( gallery, index ) => (
                                    <div className="col-3 owl-dot p-0" key={ "Owl-dot" + index }>
                                        <img src={ `${process.env.PUBLIC_URL}/${gallery}` } alt="product" />
                                    </div>
                                ) )
                                : ""
                        }
                    </div>
                    : ""
            }

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

export default HorizontalThumbnail;