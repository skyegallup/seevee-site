import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FullscreenForm from '../components/fullscreen-form';
import { setAuthCookie } from '../utils/auth';
import { TextInput } from '../components/inputs';
import Button from '../components/button';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        
        fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                setAuthCookie(data.token);
                history.push('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <FullscreenForm>
            <p className="text-4xl text-center my-14">Welcome back!</p>
            <form onSubmit={ handleSubmit } className="flex flex-col mx-8">
                <label>Username</label>
                <TextInput type="text" value={username} onChange={setUsername} classes="mb-4" />

                <label>Password</label>
                <TextInput type="password" value={password} onChange={setPassword} classes="mb-4" />

                <Button type="submit" classes="w-1/3 mx-auto">Login</Button>
            </form>
        </FullscreenForm>
    );
}

export default Login;
