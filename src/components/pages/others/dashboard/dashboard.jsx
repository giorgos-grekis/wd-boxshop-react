import React from 'react';
import { Helmet } from 'react-helmet';

//Import Custom Component
import Breadcrumb from '../../../common/breadcrumb';
import AccountSidebar from '../common/account-sidebar';
import Board from '../common/board';
import Account from '../common/account';
import SidebarToggle from '../../products/common/sidebars/sidebar-toggle';

function Dashboard( props ) {

    function selectBoard() {
        switch ( props.match.params.board ) {
            case "board":
                return ( <Board /> );
            case "account":
                return ( <Account /> );
            default:
        }
    }

    if ( props.match.params.board !== "board" && props.match.params.board !== "account" ) {
        return ( window.location = process.env.PUBLIC_URL + "/pages/404" );
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Dashboard Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Dashboard Page</h1>

            <div className="main">
                <Breadcrumb current="Dashboard" />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-lg-last dashboard-content">
                            {
                                selectBoard()
                            }
                        </div>
                        <SidebarToggle />
                        <AccountSidebar board={ props.match.params.board } />
                    </div>
                </div>

                <div className="mb-5"></div>
            </div>
        </>
    )
}

export default Dashboard;