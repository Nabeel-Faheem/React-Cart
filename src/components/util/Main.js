import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Custom Imports
import LazyFallback from './LazyFallback';
const Home = lazy(() => import( '../pages/Home' ));
const Products = lazy(() => import( '../pages/Products' ));
const Cart = lazy(() => import( '../pages/Cart' ));

class Main extends Component {
    render() {
        return (
            <main>
                <Suspense fallback={ <LazyFallback txt="Page is loading..." /> }>
                    <Switch>
                        <Route path="/" component={ Home } exact />
                        <Route path="/products" component={ Products } />
                        <Route path="/cart" component={ Cart } />
                    </Switch>
                </Suspense>
            </main>
        )
    }
}

export default Main;
