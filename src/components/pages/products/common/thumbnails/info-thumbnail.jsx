import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Magnifier } from "react-image-magnifiers";

function InfoThumbnail ( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', subClass = "", product } = props;
    const images = product.pictures;

    const openLightBox = ( index ) => {
        setOpen( true );
        setPindex( index );
    }

    return (
        <div className={ `product-single-gallery ${addClass}` }>
            <div className="skel-pro skel-magnifier-both"></div>

            <div className="product-info-gallery">
                <div className="row row-sm">
                    {
                        images ?
                            images.map( ( gallery, index ) => (
                                <div className={ `product-item col-sm-6 ${subClass}` } key={ "Product-item" + index }>
                                    <div className="inner">
                                        <Magnifier
                                            imageSrc={ `${process.env.PUBLIC_URL}/${gallery}` }
                                            imageAlt="product"
                                            mouseActivation="hover"
                                            cursorStyleActive="zoom-in"
                                            dragToMove={ false }
                                            className="product-single-image"
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
            </div>

            <div className="widget widget-info mt-1 mt-lg-2">
                <ul className="promote">
                    <li className="pb-0">
                        <i className="icon-shipping"></i>
                        <h4>FREE<br />SHIPPING</h4>
                    </li>
                    <li className="pb-0">
                        <i className="icon-us-dollar"></i>
                        <h4>100% MONEY<br />BACK GUARANTEE</h4>
                    </li>
                    <li className="pb-0">
                        <i className="icon-online-support"></i>
                        <h4>ONLINE<br />SUPPORT 24/7</h4>
                    </li>
                </ul>
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

export default InfoThumbnail;