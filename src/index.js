import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import 'react-app-polyfill/ie11';

import { PersistGate } from 'redux-persist/integration/react';

// import store
import store, { persistor } from './store';

// import action
import { getAllProducts, refreshStore } from './action';

//import utils
import { definePolyfills, scrollTop } from './utils';

// import routes
import Routes from './routes';

export function Root () {
    store.dispatch( getAllProducts() );

    definePolyfills();
    scrollTop();

    useEffect( () => {
        if ( store.getState().demo.current !== 29 ) {
            store.dispatch( refreshStore( 29 ) );
        }
    }, [] )

    return (
        <Provider store={ store } >
            <PersistGate persistor={ persistor } loading={ <span></span> } >
                <BrowserRouter basename={ '/' } >
                    <ScrollContext>
                        <Routes />
                    </ScrollContext>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render( <Root />, document.getElementById( 'root' ) );