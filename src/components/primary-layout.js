import React from 'react';

import Navbar from './navbar';


function PrimaryLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex items-stretch mt-16">
                { children }
            </div>
        </div>
    );
}


export default PrimaryLayout;
