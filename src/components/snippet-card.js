import React, { useState } from 'react';


function SnippetCard(props) {
    const [truncateToggle, setTruncateToggle] = useState(true);

    let truncateToggler = undefined;
    let truncatedDesc = props.description.substring(0, 500);
    let desc;
    if (truncatedDesc !== props.description) {
        if (truncateToggle) {
            desc = truncatedDesc + "... ";
        } else {
            desc = props.description;
        }
        truncateToggler = (
            <button
                className="text-pink-400 focus:outline-none"
                onClick={ () => setTruncateToggle(!truncateToggle) }
                tabIndex="-1"
            >
                { truncateToggle ? 'more' : 'less' }
            </button>
        );
    } else {
        desc = props.description;
    }

    return (
        <div className="mx-6 mt-6 p-4 rounded-xl bg-gray-200 hover:bg-gray-300">
            <p className="mb-2"><span className="text-2xl mr-1">{ props.title }</span> by <span className="text-pink-400">test1</span></p>
            <p>{ desc }{ truncateToggler }</p>
        </div>
    );
}


export default SnippetCard;
