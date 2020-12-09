import React, { useState, useEffect } from 'react';
import moment from 'moment';

import PrimaryLayout from '../components/primary-layout';
import UserLink from '../components/user-link';
import Button from '../components/button';


function Snippet(props) {
    const [data, setData] = useState({});

    /**
     * TODO: This should be redesigned to receive data from the component's parent
     * instead of fetching. If we're navigating from an internal redirect, we probably
     * already fetched this data, so we can just reuse that and not have to wait for
     * another web request. Redux would work well here, but I don't want to implement
     * it just for one feature.
     */
    useEffect(() => {
        fetch('/snippets/get/' + props.match.params.id)
            .then(res => res.json())
            .then(data => setData(data));
    }, [props.match.params.id]);

    // TODO: nicer feedback
    function onCopyButton() {
        /**
         * Technically, we should check for permission from the browser here:
         * 
         *     navigator.permissions.query({name: "clipboard-write"}).then(...);
         * 
         * However, this feature is only supported by Chromium, not Firefox, so
         * we're going to go without for now.
         */
        navigator.clipboard.writeText(data.content).then(
            () => { alert("copied!"); },
            () => { alert("copy failed!"); }
        );
    }

    let lines = [];
    if (data.content) {
        lines = data.content.split(/\r?\n/);
    }

    return (
        <PrimaryLayout>
            <div className="w-2/3 mx-auto pt-8">
                <div className="flex items-center mb-4">
                    <div className="flex-grow">
                        <p className="text-4xl mb-1">{ data.name }</p>
                        <p>Uploaded by <UserLink data={ data.creator } /> on { moment(data.uploaded).format('MMMM  Do, YYYY') }</p>
                    </div>
                    <Button onClick={ onCopyButton } >Copy</Button>
                </div>
                <pre className="my-6 p-4 bg-gray-200 rounded-lg flex">
                    <code className="w-1/12 text-right pr-2 border-r-2 border-gray-400">
                        { lines.map((_, idx) => <p key={ idx }>{ idx + 1 }</p>) }
                    </code>
                    <code className="flex-1 pl-2">
                        { data.content }
                    </code>
                </pre>
                <p>{ data.description }</p>
            </div>
        </PrimaryLayout>
    );
}


export default Snippet;
