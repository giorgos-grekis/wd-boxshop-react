import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SidebarToggle from '../../products/common/sidebars/sidebar-toggle';
//Import Action
import { filterSort, filterSize, filterColor, filterPrice } from '../../../../action';

//Import Data
import _filter from '../../../../mock-data/filter.json';

function HorizontalToolBoxTwo ( props ) {
    let layoutParam = "grid";
    const { filterSize, filterColor } = props;

    if ( props.init ) {
        layoutParam = props.init;
    }

    const [ layout, setLayout ] = useState( layoutParam );

    useEffect( () => {
        document.addEventListener( "click", documentClick );
    } )

    const changeLayout = ( e ) => {
        e.preventDefault();
        props.gridType( e.currentTarget.getAttribute( "title" ) );
        setLayout( e.currentTarget.getAttribute( "title" ) );
    }

    const documentClick = ( e ) => {
        if ( !e.target.closest( '.toolbox-item.select-custom' ) )
            if ( document.querySelector( '.select-custom.opened' ) )
                document.querySelector( '.select-custom.opened' ).classList.remove( 'opened' );
    }

    const sortMenu = ( e ) => {
        e.preventDefault();
        if ( document.querySelector( '.select-custom.opened' ) )
            document.querySelector( '.select-custom.opened' ).classList.remove( 'opened' );
        e.currentTarget.parentElement.classList.toggle( 'opened' );
    }

    const getSize = ( e ) => {
        e.preventDefault();
        e.currentTarget.parentElement.classList.toggle( "active" );
        filterSize( e.currentTarget.innerText.toLowerCase() );
    }

    const getprice = ( e ) => {
        e.preventDefault();
        let min = parseInt( document.querySelector( ".min.input-price" ).value );
        let max = parseInt( document.querySelector( ".max.input-price" ).value );
        if ( !( min >= 0 && min <= 1000 ) )
            min = 0;
        if ( !( max >= 0 && max <= 1000 && max >= min ) )
            max = 1000;
        props.filterPrice( { max: max, min: min } );
    }

    const getColor = ( e ) => {
        e.preventDefault();
        e.currentTarget.parentElement.classList.toggle( "active" );
        filterColor( e.currentTarget.getAttribute( 'data-id' ) );
    }

    return (
        <nav className="toolbox horizontal-filter filter-sorts">
            <SidebarToggle />

            <div className="toolbox-left d-none d-lg-flex">
                <div className="toolbox-item toolbox-sort select-custom">
                    <Link className="sort-menu-trigger" to="#" onClick={ sortMenu }>Size</Link>
                    <ul className="sort-list size">
                        {
                            _filter.Size.map( ( item, index ) => (
                                <li key={ "size" + index } className={ props.filter.size.indexOf( item.toLowerCase() ) >= 0 ? 'active' : '' }>
                                    <Link to="#" onClick={ getSize }>{ item }</Link>
                                </li>
                            ) )
                        }
                    </ul>
                </div>

                <div className="toolbox-item toolbox-sort select-custom">
                    <Link className="sort-menu-trigger" to="#" onClick={ sortMenu }>Color</Link>
                    <ul className="sort-list color">
                        {
                            _filter.Colors.map( ( item, index ) => (
                                <li key={ "color" + index } className={ props.filter.color.indexOf( item.value ) >= 0 ? 'active' : '' }>
                                    <Link to="#" onClick={ getColor } data-id={ item.value }>{ item.name }</Link>
                                </li>
                            ) )
                        }
                    </ul>
                </div>

                <div className="toolbox-item toolbox-sort price-sort select-custom">
                    <Link className="sort-menu-trigger" to="#" onClick={ sortMenu }>Price</Link>

                    <form className="filter-price-form">
                        <label>Min price</label>
                        <input type="number" min="0" className="input-price min" name="minPrice" />
                        <label>Max price</label>
                        <input type="number" max="1000" className="input-price max" name="maxPrice" />
                        <div className="filter-price-action mt-0">
                            <button type="submit" className="btn btn-primary" onClick={ getprice }>Filter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="toolbox-item toolbox-sort">
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
            </div>

            <div className="toolbox-item ml-lg-auto">
                <div className="toolbox-item toolbox-show show-count">
                    <label>Showing 1–9 of 60 results</label>
                </div>

                <div className="layout-modes">
                    <Link to="#" className={ `layout-btn btn-grid ${layout === "grid" ? "active" : ""}` } title="grid" onClick={ changeLayout }>
                        <i className="icon-mode-grid"></i>
                    </Link>

                    <Link to="#" className={ `layout-btn btn-list ${layout === "list" ? "active" : ""}` } title="list" onClick={ changeLayout }>
                        <i className="icon-mode-list"></i>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ( state ) => {
    return {
        baseProducts: state.data.products ? state.data.products : [],
        filter: state.filter ? state.filter : []
    }
}

export default connect( mapStateToProps, { filterSort, filterSize, filterColor, filterPrice } )( HorizontalToolBoxTwo );