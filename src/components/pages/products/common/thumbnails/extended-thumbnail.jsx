import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import Carousel from '../../../../features/carousel';

function ExtendedThumbnail ( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', product } = props;
    const images = product.pictures;

    const openLightBox = () => {
        let productItem = document.querySelector( '.product-single-carousel .center' );
        if ( productItem ) {
            let index = productItem.querySelector( ".image-item" ).getAttribute( 'index' );

            if ( !index ) {
                index = 0;
            }

            setOpen( true );
            setPindex( index );
        }
    }

    return (
        <div className={ `product-single-gallery product-item ${addClass}` }>
            <div className="skel-pro skel-magnifier-extended"></div>
            <Carousel addClass="product-single-carousel owl-nav-simple pro-extended" isTheme={ false } id={ product.id }>
                {
                    images ?
                        images.map( ( gallery, index ) => (
                            <img className="product-single-image image-item" src={ `${process.env.PUBLIC_URL}/${gallery}` } alt="product" key={ "prod-image" + index } index={ index } />
                        ) )
                        : ""
                }
            </Carousel>

            <span className="prod-full-screen" onClick={ openLightBox }>
                <i className="icon-plus"></i>
            </span>

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

export default ExtendedThumbnail;