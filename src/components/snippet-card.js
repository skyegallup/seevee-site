import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UserLink from './user-link';


function SnippetCard({ id, data }) {
    const [truncateToggle, setTruncateToggle] = useState(true);

    let truncateToggler = undefined;
    let truncatedDesc = data.description.substring(0, 500);
    let desc;
    if (truncatedDesc !== data.description) {
        if (truncateToggle) {
            desc = truncatedDesc + "... ";
        } else {
            desc = data.description;
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
        desc = data.description;
    }

    return (
        <Link to={ "/snippet/" + id } className="mx-6 my-4 p-4 rounded-xl bg-gray-200 hover:bg-gray-300">
            <p className="mb-2"><span className="text-2xl mr-1">{ data.name }</span> by <UserLink username="test1" /></p>
            <p>{ desc }{ truncateToggler }</p>
        </Link>
    );
}


export default SnippetCard;
