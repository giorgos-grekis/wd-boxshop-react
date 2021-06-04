import React from 'react';

function SidebarToggle () {
    const sidebarToggle = ( e ) => {
        if ( document.querySelector( "body" ) )
            document.querySelector( "body" ).classList.toggle( "sidebar-opened" );
    }

    const sidebarOverlay = ( e ) => {
        if ( document.querySelector( "body" ) )
            document.querySelector( "body" ).classList.toggle( "sidebar-opened" );
    }

    return (
        <div>
            <div className="sidebar-overlay" onClick={ sidebarOverlay }></div>
            <div className="sidebar-toggle" onClick={ sidebarToggle }><i className="fas fa-sliders-h"></i></div>
        </div>
    )
}

export default SidebarToggle;