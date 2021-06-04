import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Import Blog
import BlogData from '../../mock-data/blog.json';

//Import Utils
import { shopFilterProducts, isIEBrowser, isEdgeBrowser, isSafari } from '../../utils';

function Pagination ( props ) {
    const { products, filter, displayCount = 12, isBlog = false } = props
    const [ curPage, setCurPage ] = useState( 1 );
    let count;
    let cur = curPage;
    let end = cur * displayCount;
    let pageCount;
    let res;

    if ( isBlog ) {
        count = BlogData.length;
    } else {
        count = shopFilterProducts( products, filter ).length;
    }

    pageCount = Math.ceil( count / displayCount );

    res = getArray( count, cur, pageCount );

    if ( end > count ) {
        end = count;
    }

    useEffect( () => {
        let toolboxShows;

        if ( document.querySelectorAll( ".toolbox-item.toolbox-show" ) ) {
            toolboxShows = document.querySelectorAll( ".toolbox-item.toolbox-show" );
        }

        for ( let i = 0; i < toolboxShows.length; i++ ) {

            let toolbox = toolboxShows[ i ];
            if ( count < ( cur - 1 ) * displayCount + 1 ) {
                toolbox.innerHTML = `<label>No Result</label>`;
                document.querySelector( ".toolbox-pagination" ).style.display = "none";

                if ( curPage !== 1 ) {
                    props.curPage( 1 );
                    setCurPage( 1 );
                }
            } else {
                document.querySelector( ".toolbox-pagination" ).style.display = "flex";
                toolbox.innerHTML = `<label>Εμφάνιση ${( cur - 1 ) * displayCount + 1}–${end} από τα ${count} αποτελέσματα</label>`;
            }
        }

        if ( pageCount === 1 && document.querySelector( ".toolbox-pagination" ) ) {
            document.querySelector( ".toolbox-pagination" ).style.display = "none";
        }
    } )

    const pageUpdate = ( e, item ) => {
        e.preventDefault();
        setTimeout( () => {
            toTop();
        }, 100 );
        setCurPage( item );
        props.curPage( item );
    }

    const pageUpdatePrev = ( e ) => {
        e.preventDefault();
        setTimeout( () => {
            toTop();
        }, 100 );
        if ( cur - 1 > 0 ) {
            props.curPage( cur - 1 );
            setCurPage( cur - 1 );

        }
    }

    const pageUpdateNext = ( e ) => {
        e.preventDefault();
        setTimeout( () => {
            toTop();
        }, 100 );
        if ( cur < pageCount ) {
            props.curPage( cur + 1 );
            setCurPage( cur + 1 );
        }
    }

    const toTop = () => {
        let offTop = document.querySelector( ".skeleton-body" ).getBoundingClientRect().top + window.pageYOffset;
        if ( isIEBrowser() || isEdgeBrowser() || isSafari() ) {
            let pos = window.pageYOffset;
            let timer = setInterval( () => {
                if ( pos <= offTop ) {
                    if ( pos < offTop - 40 && pos <= offTop ) {
                        window.scrollTo( {
                            top: offTop - 100
                        } )
                        clearInterval( timer );
                    } else {
                        window.scrollBy( 0, 40 );
                        pos += 40;
                    }

                    window.scrollTo( {
                        top: offTop - 100
                    } )
                    clearInterval( timer );
                }

                if ( pos >= offTop ) {
                    if ( pos < offTop + 40 && pos >= offTop ) {
                        window.scrollTo( {
                            top: offTop - 100
                        } )
                        clearInterval( timer );
                    } else {
                        window.scrollBy( 0, -40 );
                        pos -= 40;
                    }
                }
            }, 1 );
        } else {
            window.scrollTo( {
                top: offTop - 100,
                behavior: "smooth"
            } )
        }
    }


    function getArray ( count, cur, pageCount ) {
        let pagination = [];
        let more = 1;

        if ( pageCount < 6 ) {
            more = 0;
            for ( let i = 1; i <= pageCount; i++ ) {
                pagination.push( i );
            }
        } else if ( cur <= pageCount - 4 ) {
            let init = cur;
            if ( cur - 1 > 0 )
                init = cur - 1;
            for ( let i = init; i < init + 5; i++ ) {
                pagination.push( i );
            }
        } else {
            more = 0;
            for ( let i = pageCount - 5; i <= pageCount; i++ ) {
                pagination.push( i );
            }
        }
        return { pagination: pagination, more: more };
    }

    return (
        <nav className="toolbox toolbox-pagination">
            <div className="toolbox-item toolbox-show">
                <label>Εμφάνιση 1–9 από τα 60 αποτελέσματα</label>
            </div>

            <ul className="pagination">
                <li className={ `page-item ${cur === 1 ? "disabled" : ""}` }>
                    <Link title="προηγούμενη σελίδα" className="page-link page-link-btn" to="#" onClick={ ( e ) => pageUpdatePrev( e ) }><i className="icon-angle-left"></i></Link>
                </li>
                {
                    res.pagination.map( ( item, index ) => (
                        <li className={ `page-item ${item === cur ? "active" : ""}` } key={ "page-item" + index }>
                            <Link className="page-link" to="#" onClick={ ( e ) => pageUpdate( e, item ) }>
                                { item }
                                <span className="sr-only"></span>
                            </Link>
                        </li>
                    ) )
                }
                {
                    res.more === 1 ? <li className="page-item"><span>...</span></li> : ""
                }
                <li className={ `page-item ${cur === pageCount ? "disabled" : ""}` }>
                    <Link title="επόμενη σελίδα" className="page-link page-link-btn" to="#" onClick={ ( e ) => pageUpdateNext( e ) }>
                        <i className="icon-angle-right"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : [],
        filter: state.filter ? state.filter : []
    }
}

export default connect( mapStateToProps )( Pagination );