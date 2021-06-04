import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/layout';
import ShoppingCart from '../components/pages/others/cart/shopping-cart';
import Wishlist from '../components/pages/others/wishlist/wishilist';
import About from '../components/pages/others/about/about';
import ShippingOne from '../components/pages/others/checkout/shipping-one';
import ShippingTwo from '../components/pages/others/checkout/shipping-two';
import Review from '../components/pages/others/checkout/checkout-review';
import Dashboard from '../components/pages/others/dashboard/dashboard';
import Blog from '../components/pages/others/blog/blog';
import BlogPost from '../components/pages/others/blog/single';
import Password from '../components/pages/others/password/forget-password';
import Login from '../components/pages/others/login/login';
import ErrorPage from '../components/pages/others/404/page-error';

export default class ProductsRoute extends React.Component {
    render () {
        return (
            <Switch>
                <Layout>
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/cart` } component={ ShoppingCart } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/wishlist` } component={ Wishlist } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/about` } component={ About } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/one` } component={ ShippingOne } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/two` } component={ ShippingTwo } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/checkout/review` } component={ Review } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/dashboard/:board` } component={ Dashboard } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/blog` } component={ Blog } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/single/:id` } component={ BlogPost } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/login` } component={ Login } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/password` } component={ Password } />
                    <Route exact path={ `${process.env.PUBLIC_URL}/pages/404` } component={ ErrorPage } />
                </Layout>
            </Switch>
        );
    }
}