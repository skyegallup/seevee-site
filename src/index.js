import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import Navbar from './components/navbar';
import Register from './views/register';
import Login from './views/login';
import Logout from './views/logout';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/logout'>
                    <Logout />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function Index() {
    return (
        <div>
            <Navbar />
            <p>hello world!</p>
        </div>
    )
}

// ==============

ReactDOM.render(<App />, document.getElementById('root'));
