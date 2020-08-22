import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/checkout">Checkout</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
