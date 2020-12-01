import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

import 'tailwindcss/tailwind.css';

import { isAuthenticated } from '../utils/auth';

function Navbar() {
    let authLinks;
    if (isAuthenticated()) {
        authLinks = <NavbarLink to="/logout">Logout</NavbarLink>;
    } else {
        authLinks = (
            <React.Fragment>
                <NavbarLink to="/register">Register</NavbarLink>
                <NavbarLink to="/login">Login</NavbarLink>
            </React.Fragment>
        )
    }

    return (
        <div className="bg-gray-900 fixed w-full z-10 top-0">
            <div className="flex h-16 mx-auto px-8">
                <NavbarLink to="/" neverHighlight>
                    <span className="text-pink-400">SeeVee</span>
                </NavbarLink>
                <div className="mx-auto"></div>
                { authLinks }
            </div>
        </div>
    );
}

function NavbarLink(props) {
    let className = "h-full text-xl flex items-center px-4 text-white hover:text-pink-400 border-pink-400";

    let isMatch = useRouteMatch({
        path: props.to,
        exact: props.activeOnlyWhenExact
    });
    if (isMatch && !props.neverHighlight) {
        className += " border-b-4";
    }

    return (
        <Link to={ props.to } className={ className }>
            { props.children }
        </Link>
    );
}

export default Navbar;
