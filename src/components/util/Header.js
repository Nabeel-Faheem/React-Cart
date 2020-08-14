import React from 'react';

// Custom Imports
import Wrap from './Wrap';
import Logo from './Logo.js';
import Menu from './Menu.js';

const Header = () => {
    return (
        <header>
            <Wrap>
                <div className="header__left">
                    <Logo />
                </div>
                <div className="header__right">
                    <Menu />
                </div>
            </Wrap>
        </header>
    )
}

export default Header;