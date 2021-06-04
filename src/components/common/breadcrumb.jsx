import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb ( props ) {
    const { addClass = "", current, ...parent } = props;
    let path = [];
    let x;
    let url = "";

    for ( x in parent ) {
        path.push( parent[ x ] );
    }

    switch ( path[ 0 ] ) {
        case "Men":
            url = "categories/full-width";
            break;
        case "Electronics":
            url = "products/default/45"
            break;
        case "pages":
            url = "pages/about";
            break;
        default:
            break;
    }

    return (
        <nav aria-label="breadcrumb" className={ `breadcrumb-nav ${addClass}` } >
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={ `${process.env.PUBLIC_URL}` }>Αρχική</Link></li>
                    {
                        path.map( ( item, index ) => (
                            <li className="breadcrumb-item" key={ "breadcrumb-item" + index }><Link to={ `${process.env.PUBLIC_URL}/${url}` }>{ item }</Link></li>
                        ) )
                    }
                    <li className="breadcrumb-item active" aria-current="page">{ current }</li>
                </ol>
            </div>
        </nav>
    )
}

export default Breadcrumb;