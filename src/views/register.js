import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FullscreenForm from '../components/fullscreen-form';
import { TextInput, ValidatedPasswordInput } from '../components/inputs';
import Button from '../components/button';

import axios from 'axios';


function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('/users/register', {
            username: username,
            password: password,
            email: email
        }).then((res) => {
            history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <FullscreenForm>
            <p className="text-4xl text-center my-10">Join us!</p>
            <form onSubmit={handleSubmit} className="flex flex-col mx-8">
                <label>Username</label>
                <TextInput type="text" value={username} onChange={setUsername} classes="mb-4" />

                <label>Password</label>
                <ValidatedPasswordInput value={password} onChange={setPassword} />
                <p className="text-xs mb-4">Must be 8-20 characters and contain an uppercase, lowercase, and number</p>

                <label>Email</label>
                <TextInput type="email" value={email} onChange={setEmail} classes="mb-6" />

                <Button type="submit" classes="w-1/3 mx-auto">Register</Button>
            </form>
        </FullscreenForm>
    );
}

export default Register;
