import React, { useState, useEffect } from 'react';
import moment from 'moment';

import PrimaryLayout from '../components/primary-layout';
import UserLink from '../components/user-link';


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

    let lines = [];
    if (data.content) {
        lines = data.content.split(/\r?\n/).map((i) => {
            if (i === "") {
                return <br/>;
            } else {
                return <p>{ i }</p>;
            }
        });
    }

    return (
        <PrimaryLayout>
            <div className="w-2/3 mx-auto pt-8">
                <p className="text-4xl mb-1">{ data.name }</p>
                <p className="mb-4">Uploaded by <UserLink username="test1" /> on { moment(data.uploaded).format('MMMM  Do, YYYY') }</p>
                <pre className="my-6 p-4 bg-gray-200 rounded-lg flex">
                    <code className="w-1/12 text-right pr-2 border-r-2 border-gray-400">
                        { lines.map((_, idx) => <p>{ idx + 1 }</p>) }
                    </code>
                    <code className="flex-1 pl-2">
                        { lines }
                    </code>
                </pre>
            </div>
        </PrimaryLayout>
    );
}


export default Snippet;
