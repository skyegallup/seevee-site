import React from 'react';


const textInputClasses = "bg-gray-200 rounded-md h-10 p-2 ring-inset focus:outline-none focus:ring focus:ring-gray-400 invalid:ring invalid:ring-pink-600 ";

function TextInput({ type, value, onChange, classes = "" }) {
    return (
        <input
            type={ type }
            value={ value }
            onChange={ e => onChange(e.target.value) }
            className={ textInputClasses + classes }
        ></input>
    );
}

function ValidatedPasswordInput({ value, onChange, classes = "" }) {
    return (
        <input
            type="password"
            value={ value }
            onChange={ e => onChange(e.target.value) }
            minLength="8"
            maxLength="20"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
            className={ textInputClasses + classes }
        ></input>
    );
}


export { TextInput, ValidatedPasswordInput };
