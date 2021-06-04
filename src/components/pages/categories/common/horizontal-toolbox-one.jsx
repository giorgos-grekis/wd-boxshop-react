import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Import Action
import { filterSort } from '../../../../action';

function HorizontalToolBoxOne ( props ) {
    let layoutParam = "grid";

    if ( props.init ) {
        layoutParam = props.init;
    }

    const [ layout, setLayout ] = useState( layoutParam );

    useEffect( () => {
        return ( () => {
            if ( document.querySelector( 'body' ).classList.contains( "sidebar-opened" ) )
                document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
        } )
    }, [] )

    const changeLayout = ( e ) => {
        e.preventDefault();
        props.gridType( e.currentTarget.getAttribute( "title" ) );
        setLayout( e.currentTarget.getAttribute( "title" ) );
    }

    const toggleFilter = ( e ) => {
        e.preventDefault();

        if ( document.querySelector( '.filter-toggle' ) )
            document.querySelector( '.filter-toggle' ).classList.toggle( 'opened' );
        if ( document.querySelector( 'body' ) )
            document.querySelector( 'body' ).classList.toggle( 'sidebar-opened' );
        if ( document.querySelector( "body .sticky-sidebar" ) )
            document.querySelector( "body .sticky-sidebar" ).style.position = "static";

        if ( document.querySelector( "body.sidebar-opened" ) ) {
            let productsBody = document.querySelector( "body.sidebar-opened .products-body" );

            setTimeout( () => {
                productsBody.style.overflow = "unset";
            }, 150 );
        } else {
            document.querySelector( "body .products-body" ).style.overflow = "hidden";
        }
    }

    return (
        <nav className="toolbox horizontal-filter">
            <div className="toolbox-left d-none d-lg-block">
                <div className="toolbox-item filter-toggle">
                    <span>Filters:</span>
                    <Link to="#" onClick={ toggleFilter }></Link>
                </div>
            </div>

            <div className="toolbox-item toolbox-sort ml-lg-auto">
                <label>Sort By:</label>

                <div className="select-custom">
                    <select name="orderby" className="form-control" defaultValue="menu_order" onChange={ ( e ) => props.filterSort( e.currentTarget.value ) }>
                        <option value="menu_order">Default sorting</option>
                        <option value="popularity">popularity</option>
                        <option value="rating">average rating</option>
                        <option value="date">newness</option>
                        <option value="price">price: low to high</option>
                        <option value="price-desc">price: high to low</option>
                    </select>
                </div>

                <Link to="#" className="sorter-btn" title="Set Ascending Direction"><span className="sr-only">Set Ascending Direction</span></Link>
            </div>

            <div className="toolbox-item toolbox-show ml-auto ml-lg-0">
                <label>Show:</label>
            </div>

            <div className="layout-modes">
                <Link to="#" className={ `layout-btn btn-grid ${layout === "grid" ? "active" : ""}` } title="grid" onClick={ changeLayout }>
                    <i className="icon-mode-grid"></i>
                </Link>
                <Link to="#" className={ `layout-btn btn-list ${layout === "list" ? "active" : ""}` } title="list" onClick={ changeLayout }>
                    <i className="icon-mode-list"></i>
                </Link>
            </div>
        </nav>
    )
}

export default connect( null, { filterSort } )( HorizontalToolBoxOne );
