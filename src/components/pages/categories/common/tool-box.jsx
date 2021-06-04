import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Import Action
import { filterSort } from '../../../../action';

function ToolBox ( props ) {

    let layoutParam = "grid";
    const { addClass = "" } = props;

    if ( props.init ) {
        layoutParam = props.init;
    }

    const [ layout, setLayout ] = useState( layoutParam );

    const changeLayout = ( e ) => {
        e.preventDefault();
        props.gridType( e.currentTarget.getAttribute( "title" ) );
        setLayout( e.currentTarget.getAttribute( "title" ) );

        if ( e.currentTarget.getAttribute( "title" ) === "grid" ) {
            props.changeDisplay( 12 );
        }

        if ( e.currentTarget.getAttribute( "title" ) === "list" ) {
            props.changeDisplay( 9 );
        }
    }

    // console.log(props, ' tool-box.jsx')


    return (
        <nav className={ "toolbox " + addClass }>
            <div className="toolbox-left">
                <div className="toolbox-item toolbox-sort">
                    <label htmlFor="taksinomish-proionton">Ταξινόμηση:</label>
                    <div className="select-custom"> 
                        <select name="orderby" id='taksinomish-proionton' className="form-control border-left-right" defaultValue="menu_order" onChange={ ( e ) => props.filterSort( e.currentTarget.value ) }>
                            <option value="menu_order">Προκαθορισμένη</option>
                            <option value="popularity">Δημοφιλή</option>
                            <option value="rating">Βαθμολογία</option>
                            <option value="date">Τελευταία</option>
                            <option value="price">τιμή: από χαμηλότερη σε μεγαλύτερη</option>
                            <option value="price-desc">τιμή: από μεγαλύτερη σε χαμηλότερη </option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Showing 1–12 of 17 results */}
            {/* <div className="toolbox-item toolbox-show">
                <label></label>
            </div> */}

            <div className="layout-modes">
                <Link to="#" className={ `layout-btn btn-grid ${layout === "grid" ? "active" : ""}` } title="grid" onClick={ changeLayout }>
                    <i className="icon-mode-grid"></i>
                </Link>
                <Link to="#" className={ `layout-btn btn-grid ${layout === "list" ? "active" : ""}` } title="list" onClick={ changeLayout }>
                    <i className="icon-mode-list"></i>
                </Link>
            </div>
        </nav>
    )
}

export default connect( null, { filterSort } )( ToolBox );