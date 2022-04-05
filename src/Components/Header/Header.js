import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="nav-bar">

            <Link className="logo" to='/'>CLASSIC CANDLE</Link>

            <ul>
                <li><Link className='link' to='/home'>HOME</Link></li>
                <li><Link className='link' to='/reviews'>REVIEWS</Link></li>
                <li><Link className='link' to='/dashboard'>DASHBOARD</Link></li>
                <li><Link className='link' to='/blogs'>BLOGS</Link></li>
                <li><Link className='link' to='/about'>ABOUT</Link></li>
            </ul>

        </nav>
    );
};

export default Header;