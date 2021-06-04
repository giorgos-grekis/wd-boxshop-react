// done

import React from 'react';
import { Link } from 'react-router-dom';

//Import Custom Component
import CartMenu from './partials/cart-menu';
import MainMenu from './partials/main-menu';
import LoginModal from '../features/modal/login-modal';
import SearchForm from './partials/search-form';

//Import Utils
import { isIEBrowser } from '../../utils';

//Import Data
import Info from '../../mock-data/data.json';


function Header() {
    const handleClick = ( e ) => {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
        if ( isIEBrowser() && document.querySelector( "body" ).classList.contains( "mmenu-active" ) ) {
            document.querySelector( ".mmenu-active .mobile-menu-container" ).style.transform = "translateX(0)";
        }
    }



    return (
        <header className="header">
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" type="button" onClick={ handleClick } title='menu'>
                            <i className="icon-menu"></i>
                        </button>

                        <Link to={ `${ process.env.PUBLIC_URL }/` } className="logo">
                            <img src={ `${ process.env.PUBLIC_URL }/assets/images/logo.png`} alt="box shop logo" />
                        </Link>

                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <SearchForm placeholder="Ψάχνω για..." iconClass="icon-search-3" />
               
                        <CartMenu />

                        <LoginModal addClass="header-icon" />
                       
                    </div>
                </div>
            </div>



            <div className="header-bottom">
                {
                    Info.info.map( ( item, index ) => (
                        <div className="col-lg-4" key={ index }>

                            <div className={index === 1 ? 'service-widget' : "service-widget text-dark"}>
                                
                                <i className={ "service-icon " + item.name }></i>
                                <div className="service-content">
                                    <h3 className="service-title">{ item.title.toLowerCase() }</h3>
                                </div>
                            </div>
                        </div>
                    ) )
                }
             
            </div>
        </header>
        
    )
}

export default Header;