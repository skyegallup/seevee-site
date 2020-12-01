import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

import 'tailwindcss/tailwind.css';

import { isAuthenticated } from '../utils/auth';

function Navbar() {
    let authLinks;
    if (isAuthenticated()) {
        authLinks = (
            <React.Fragment>
                <NavbarLink to="/create">Create</NavbarLink>
                <NavbarLink to="/logout">Logout</NavbarLink>
            </React.Fragment>
        );
    } else {
        authLinks = (
            <React.Fragment>
                <NavbarLink to="/register">Register</NavbarLink>
                <NavbarLink to="/login">Login</NavbarLink>
            </React.Fragment>
        )
    }

    return (
        <div className="flex h-16 px-8 bg-gray-900">
            <NavbarLink to="/" neverHighlight>
                <span className="text-pink-400 text-3xl">SeeVee</span>
            </NavbarLink>
            <div className="mx-auto"></div>
            { authLinks }
        </div>
    );
}

function NavbarLink(props) {
    let className = "h-full text-xl flex items-center px-4 text-white hover:text-pink-400";

    let indicator = undefined;
    let isMatch = useRouteMatch({
        path: props.to,
        exact: props.activeOnlyWhenExact
    });
    if (isMatch && !props.neverHighlight) {
        className += " relative";
        indicator = <span className="absolute bottom-0 h-1 left-0 w-full bg-pink-400"></span>;
    }

    return (
        <Link to={ props.to } className={ className }>
            { props.children }
            { indicator }
        </Link>
    );
}

export default Navbar;
