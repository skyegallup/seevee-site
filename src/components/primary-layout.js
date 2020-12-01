import React from 'react';

import Navbar from './navbar';


function PrimaryLayout({ children }) {
    return (
        <div className="h-screen min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 overflow-auto">
                { children }
            </div>
        </div>
    );
}


export default PrimaryLayout;
