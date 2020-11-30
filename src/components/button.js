import React from 'react';


// `type` used for forms, e.g. `type="submit"`
function Button({ children, onClick=undefined, classes="", type=undefined }) {
    let className = "px-4 py-2 rounded-md text-white text-lg bg-pink-500 ring-inset hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-800 ";

    return (
        <button
            type={type}
            className={ className + classes }
            onClick={onClick}
        >{ children }</button>
    );
}

export default Button;
