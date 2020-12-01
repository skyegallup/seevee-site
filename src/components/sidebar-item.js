import React from 'react';


function SidebarItem({ children }) {
    return (
        <div className="mx-6 px-2 py-4 border-b-2 hover:bg-gray-200">
            {children}
        </div>
    );
}


export default SidebarItem;
