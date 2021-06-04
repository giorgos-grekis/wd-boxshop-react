export const sliderDefaultOptions = {
    loop: false,
    margin: 0,
    responsiveClass: "true",
    navText: [ '<i class="icon-left-open-big">', '<i class="icon-right-open-big">' ],
    dots: true,
    nav: true,
    items: 1,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        975: {
            items: 1,
            nav: false
        },
        1200: {
            items: 1
        }
    }
};

export const owlSetting1 = {
    margin: 4,
    items: 2,
    autoplayTimeout: 5000,
    loop: false,
    dots: false,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        559: {
            items: 3,
            nav: false
        },
        991: {
            items: 5
        }
    }
};

export const owlSetting2 = {
    margin: 20,
    autoplayTimeout: 5000,
    nav: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        576: {
            items: 3,
            nav: false,
        },
        991: {
            items: 4
        }
    }
};

export const owlSetting3 = {
    margin: 4,
    items: 2,
    autoplayTimeout: 5000,
    dots: false,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        768: {
            items: 3,
            nav: false
        },
        992: {
            items: 4,
            nav: false
        },
        1200: {
            items: 5,
            nav: false
        },
        1600: {
            items: 5,
            nav: true
        }
    }
};

export const owlSetting4 = {
    loop: false,
    nav: false,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 2
        },
        600: {
            items: 3
        },
        950: {
            items: 4
        },
        1200: {
            items: 5
        },
        1500: {
            items: 6
        }
    }
}

export const owlSetting5 = {
    margin: 0,
    items: 2,
    loop: false,
    autoplay: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        480: {
            items: 2,
            nav: false
        },
        768: {
            items: 3,
            nav: false
        },
        992: {
            items: 4,
            nav: false
        },
        1200: {
            items: 5,
            nav: true
        }
    }
}

export const owlSetting6 = {
    loop: false,
    nav: false,
    dots: false,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        991: {
            items: 4
        }
    }
}



export let extraSetting1 = {
    lazyLoad: true,
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: false
}

export let extraSetting2 = {
    lazyLoad: true,
    dots: true
}

export let extraSetting3 = {
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    autoplay: false,
    dots: false,
    startPosition: 0
}

export let extraSetting4 = {
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: false,
    autoplay: false,
    startPosition: 0
}

export let extraSetting5 = {
    dots: false,
    autoplay: false,
    center: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export let extraSetting6 = {
    dots: false,
    autoplay: false,
    center: true,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}


export const blogSlider = {
    loop: false,
    margin: 30,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export const testimonial = {
    lazyLoad: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
};

export const events = {
    onLoadedLazy: function ( e ) {
        if ( !e.target ) return;

        if ( e.target.closest( '.home-slider' ) ) {
            e.target.closest( '.home-slider' ).classList.add( 'loaded' );
            if ( e.target.closest( '.home-slider' ).querySelector( ".home-slide" ) ) {
                let slides = document.querySelectorAll( ".home-slider .home-slide" );
                for ( let i = 0; i < slides.length; i++ ) {
                    slides[ i ].classList.add( 'loaded' );
                }
            }
        }

        if ( e.target.closest( '.boxed-slider' ) ) {
            e.target.closest( '.boxed-slider' ).classList.add( 'loaded' );
        }

        if ( e.target.closest( '.about-slider' ) ) {
            let slides = document.querySelectorAll( ".about-slider .about-slider-item" );
            for ( let i = 0; i < slides.length; i++ ) {
                slides[ i ].classList.add( 'loaded' );
            }
        }
    },
    onTranslate: function ( e ) {
        if ( !e.target ) return;

        if ( e.target.closest( ".home-slider" ) ) {
            let homeSliderSidebar = document.querySelector( ".home-slider-sidebar ul" );

            if ( homeSliderSidebar ) {
                homeSliderSidebar.querySelector( ".active" ).classList.remove( "active" );
                homeSliderSidebar.querySelector( 'li:nth-child(' + ( ( e.item.index + 1 ) % 3 + 1 ) + ')' ).classList.add( "active" );
            }

            if ( e.target.closest( ".home-thumb" ) ) {
                document.querySelector( ".home-slider-thumbs" ).querySelector( ".active" ).classList.remove( "active" );
                document.querySelector( ".home-slider-thumbs" ).children[ ( e.item.index % 2 ) ].classList.add( "active" );
            }
        }

        if ( e.target.closest( ".product-single-default .product-single-carousel" ) && document.querySelector( ".owl-dot" ) ) {
            let dotsContainer = e.target.closest( ".product-single-gallery" ).querySelector( '#carousel-quick-dots' );
            dotsContainer.querySelector( '.active' ) && dotsContainer.querySelector( '.active' ).classList.remove( 'active' );
            dotsContainer.querySelectorAll( '.owl-dot' )[ e.item.index ].classList.add( 'active' );
        }
    },
    onTranslated: function ( e ) {
        if ( !e.target ) return;

        if ( e.target.closest( ".center-visible" ) ) {
            let self = e.target.closest( ".center-visible" );
            let owlItem = self.querySelectorAll( ".owl-stage .active img" );
            let owlCenter = Math.floor( owlItem.length / 2 );

            if ( self.querySelector( ".center" ) )
                self.querySelector( ".center" ).classList.remove( 'center' );

            if ( owlItem[ owlCenter ] )
                owlItem[ owlCenter ].classList.add( 'center' );
        }
    },
    onResized: function ( e ) {
        if ( !e.target ) return;

        if ( e.target.closest( '.center-visible' ) ) {
            let self = e.target.closest( ".center-visible" );
            let owlItem = self.querySelectorAll( ".owl-stage .active img" );
            let owlCenter = Math.floor( owlItem.length / 2 );

            if ( self.querySelector( ".center" ) ) {
                self.querySelector( ".center" ).classList.remove( 'center' );
            }

            if ( owlItem[ owlCenter ] ) {
                owlItem[ owlCenter ].classList.add( 'center' );
            }
        }
    }
};