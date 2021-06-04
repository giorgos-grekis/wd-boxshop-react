// done

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchForm ( props ) {
    useEffect( () => {
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );
        document.querySelector( ".header-search .header-search-wrapper" ).addEventListener( "click", function ( e ) {
            e.stopPropagation();
        }, true )

        return () => {
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        }
    } )

    const onSearchClick = ( e ) => {
        e.preventDefault();

        if ( document.querySelector( ".header-search" ) )
            document.querySelector( ".header-search" ).classList.toggle( "show" );

        if ( document.querySelector( ".header-search-wrapper" ) )
            document.querySelector( ".header-search-wrapper" ).classList.toggle( "show" );
    }

    const onBodyClick = ( e ) => {
        if ( document.querySelector( ".header-search-wrapper" ) ) {
            if ( document.querySelector( ".header-search-wrapper" ).classList.contains( "show" ) ) {
                document.querySelector( ".header-search-wrapper" ).classList.remove( "show" );
                document.querySelector( "body" ).classList.remove( "is-search-active" );
            }

            if ( document.querySelector( ".header-search" ).classList.contains( "show" ) ) {
                document.querySelector( ".header-search" ).classList.remove( "show" );
            }
        }
    }

    const { iconClass = "icon-magnifier", placeholder = "Search...", text } = props;

    return (
        <div className="header-search">
            <Link to="#" className="search-toggle" role="button" title='Εικονίδιο αναζήτησης' onClick={ onSearchClick }><i className={ iconClass }></i>{ text }</Link>
            <form action="#" method="get">
                <div className="header-search-wrapper">
                    <label htmlFor="qq" style={{display: 'none'}}>Search form</label>
                    <input type="text" autoComplete="off" className="form-control" name="q" id="qq" placeholder={ placeholder } required />

                    <div className="select-custom">
                        <label htmlFor="cat" style={{display: 'none'}}>Select Category</label>
                        <select id="cat" name="cat">
                            <option value="">Κατηγόριες</option>
                            <option value="4">Fashion</option>
                            <option value="12">- Women</option>
                            <option value="13">- Men</option>
                            <option value="66">- Jewellery</option>
                            <option value="67">- Kids Fashion</option>
                            <option value="5">Electronics</option>
                            <option value="21">- Smart TVs</option>
                            <option value="22">- Cameras</option>
                            <option value="63">- Games</option>
                            <option value="7">Home &amp; Garden</option>
                            <option value="11">Motors</option>
                            <option value="31">- Cars and Trucks</option>
                            <option value="32">- Motorcycles &amp; Powersports</option>
                            <option value="33">- Parts &amp; Accessories</option>
                            <option value="34">- Boats</option>
                            <option value="57">- Auto Tools &amp; Supplies</option>
                        </select>
                    </div>

                    <button className={ iconClass + " btn" } type="submit" title="submit"></button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;