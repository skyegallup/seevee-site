import React from 'react';

import graphic from '../assets/register.svg';


function FullscreenForm(props) {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center">
            <div className="bg-white rounded-3xl w-3/4 h-120 mx-auto flex items-center">
                <div className="h-full rounded-l-3xl flex-1 bg-gray-500 overflow-hidden">
                    <img src={ graphic } alt="Programming graphic" />
                </div>
                <div className="h-full flex-1">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default FullscreenForm;
