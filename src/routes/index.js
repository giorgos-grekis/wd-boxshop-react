import React from 'react';
import { Route, Switch } from 'react-router-dom';

import store from '../store';

import { initStickyOffset } from '../utils';

import { HIDE_CART_MODAL, HIDE_QUICKVIEW } from '../constants/action-types';


let ProductsPages = React.lazy( () => import( './products-route' ) );
let CategoriesPages = React.lazy( () => import( './categories-route' ) );
let OthersPages = React.lazy( () => import( './others-route' ) );
let HomePage = React.lazy( () => import( './home-route' ) );

export default function Routes() {
    store.dispatch( { type: HIDE_CART_MODAL } );
    store.dispatch( { type: HIDE_QUICKVIEW } );
    initStickyOffset();

    return (
        <React.Suspense fallback={ <span></span> }>
            <Switch>
                <Route path={ `${ process.env.PUBLIC_URL }/products` } component={ ProductsPages } />
                <Route path={ `${ process.env.PUBLIC_URL }/categories` } component={ CategoriesPages } />
                <Route path={ `${ process.env.PUBLIC_URL }/pages` } component={ OthersPages } />
                <Route path={ `${ process.env.PUBLIC_URL }/` } component={ HomePage } />
            </Switch>
        </React.Suspense>
    )
}