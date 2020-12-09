import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import PrimaryLayout from '../components/primary-layout';
import { TextInput, TextArea } from '../components/inputs';
import Button from '../components/button';
import { getAuthCookie } from '../utils/auth';


// TODO: add validation
function Create() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        // TODO: replace with fetch()
        axios.post('/snippets/add',
            {
                name: name,
                content: content,
                description: description
            },
            {
                headers: {
                    Authorization: getAuthCookie(),
                }
            }
        ).then((res) => {
            history.push('/snippet/' + res.data._id);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <PrimaryLayout>
            <form onSubmit={ handleSubmit } className="w-2/3 mx-auto pt-8">
                <TextInput
                    type="text"
                    value={ name }
                    onChange={ setName }
                    placeholder="My cool code snippet"
                    classes="text-3xl h-14 w-full mb-4"
                />
                <pre className="h-2/3 mb-4">
                    <TextArea
                        value={ content }
                        onChange={ setContent }
                        placeholder='console.log("hello world");'
                        classes="h-full w-full"
                    />
                </pre>
                <div className="flex items-center">
                    <TextInput
                        value={ description }
                        onChange={ setDescription }
                        placeholder='Logs "hello world" to the console'
                        classes="flex-grow mr-8"
                    />
                    <Button type="submit">Submit</Button> 
                </div>
            </form>
        </PrimaryLayout>
    );
}


export default Create;
