import React from 'react';


function UserLink({ data }) {
    let username = "...";
    if (data !== undefined) {
        username = data.username;
    }

    return <span className="text-pink-400">{ username }</span>;
}


export default UserLink;
