import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="nav-bar">

            <NavLink className="logo" to='/'>CLASSIC CANDLE</NavLink>

            <ul>
                <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/home'>HOME</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/reviews'>REVIEWS</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/dashboard'>DASHBOARD</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blogs'>BLOGS</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/about'>ABOUT</NavLink></li>
            </ul>

        </nav>
    );
};

export default Header;