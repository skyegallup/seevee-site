import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import Navbar from './components/navbar';
import SidebarItem from './components/sidebar-item';
import SnippetCard from './components/snippet-card';

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
    const [snippets, setSnippets] = useState([]);

    useEffect(() => {
        fetch('/snippets/get')
            .then(res => {
                if (res.status === 304) return;  // data not modified
                return res.json();
            })
            .then(data => {
                setSnippets(data);
            });
    }, []);  // `[]` ensures that this only runs after the first render

    let snippetCards = snippets.map(snippet => <SnippetCard 
        key={ snippet._id }
        title={ snippet.name }
        description={ snippet.description }
    />);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex items-stretch mt-16">
                <div className="w-1/4 flex flex-col items-stretch">
                    <SidebarItem>Test 1</SidebarItem>
                    <SidebarItem>Test 2</SidebarItem>
                    <SidebarItem>Test 3</SidebarItem>
                </div>
                <div className="flex-1 flex flex-col items-stretch">
                    { snippetCards.length === 0 ? <p>No snippets found.</p> : snippetCards }
                </div>
            </div>
        </div>
    )
}

// ==============

ReactDOM.render(<App />, document.getElementById('root'));
