import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import SnippetCard from './components/snippet-card';
import PrimaryLayout from './components/primary-layout';

import Register from './views/register';
import Login from './views/login';
import Logout from './views/logout';
import Snippet from './views/snippet';
import Create from './views/create';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/create'>
                    <Create />
                </Route>
                <Route path="/snippet/:id" component={Snippet} />
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
        id={ snippet._id }
        data={ snippet }
    />);

    return (
        <PrimaryLayout>
            <div className="flex-shrink-0 w-1/4 p-4 bg-gray-200 text-lg">
                <p>Popular Languages:</p>
                <ul className="text-pink-400 ml-4">
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </div>
            <div className="flex flex-col flex-1 overflow-auto">
                { snippetCards.length === 0 ? <p>No snippets found.</p> : snippetCards }
            </div>
        </PrimaryLayout>
    );
}

// ==============

ReactDOM.render(<App />, document.getElementById('root'));
