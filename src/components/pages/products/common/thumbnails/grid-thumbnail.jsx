import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Magnifier } from "react-image-magnifiers";

function GridThumbnail ( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', product } = props;
    const images = product.pictures;

    const openLightBox = ( index ) => {
        setOpen( true );
        setPindex( index );
    }

    return (
        <div className={ `product-single-gallery popup-gallery ${addClass}` }>
            <div className="skel-pro skel-magnifier-grid"></div>
            <div className="row row-sm product-grid">
                {
                    images ?
                        images.map( ( gallery, index ) => (
                            <div className="col-md-6 product-item" key={ "product-item" + index }>
                                <div className="inner">
                                    <Magnifier
                                        imageSrc={ `${process.env.PUBLIC_URL}/${gallery}` }
                                        imageAlt="product name"
                                        mouseActivation="hover"
                                        cursorStyleActive="zoom-in"
                                        dragToMove={ false }
                                    />

                                    <span className="prod-full-screen" onClick={ () => openLightBox( index ) }>
                                        <i className="icon-plus"></i>
                                    </span>
                                </div>
                            </div>
                        ) )
                        : ""
                }
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
        </div>
    )
}

export default GridThumbnail;