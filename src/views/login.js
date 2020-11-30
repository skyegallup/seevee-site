import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FullscreenForm from '../components/fullscreen-form';
import { setAuthCookie } from '../utils/auth';

import axios from 'axios';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post('/users/login', {
            username: username,
            password: password
        }).then((res) => {
            setAuthCookie(res.data.token);
            history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <FullscreenForm>
            <p className="text-4xl text-center my-14">Welcome back!</p>
            <form onSubmit={ handleSubmit } className="flex flex-col mx-8">
                <label>Username</label>
                <input
                    type="text" value={username} onChange={ e => setUsername(e.target.value) }
                    className="bg-gray-200 h-10 p-2 mb-4 border-pink-900 invalid:border-2"
                ></input>

                <label>Password</label>
                <input
                    type="password" value={password} onChange={ e => setPassword(e.target.value) }
                    className="bg-gray-200 h-10 p-2 mb-4 border-pink-900 invalid:border-2"
                ></input>

                <input
                    type="submit" value="Login"
                    className="w-1/3 py-2 mx-auto"
                />
            </form>
        </FullscreenForm>
    );
}

export default Login;
