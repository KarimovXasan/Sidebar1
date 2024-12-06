import React, { useState } from "react";

const Saidbar = () => {
    const [active, setActive] = useState("Dashboard");

    const menuItems = [
        { name: "Dashboard", },
        { name: "Products", },
        { name: "Favorites", },
        { name: "Inbox", },
        { name: "Order Lists", },
        { name: "Product Stock", },
    ];

    const pageItems = [
        { name: "Pricing", },
        { name: "Calendar", },
        { name: "To-Do", },
        { name: "Contact", },
        { name: "Invoice", },
    ];

    return (
        <div className="w-64 h-screen bg-gray-100 border-r">
            <div className="flex items-center justify-center h-16 border-b">
                <h1 className="text-lg font-bold">DashStack</h1>
            </div>
            <div className="p-4">
                {/* Menu */}
                <div className="mb-4">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">Menu</h2>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.name} className="mb-2">
                                <button
                                    onClick={() => setActive(item.name)}
                                    className={`flex items-center p-2 rounded w-full ${active === item.name
                                        ? "bg-blue-light text-white"
                                        : "text-black"
                                        }`}
                                >
                                    <span className="material-icons">{item.icon}</span>
                                    <span className="ml-2">{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pages */}
                <div>
                    <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">Pages</h2>
                    <ul>
                        {pageItems.map((item) => (
                            <li key={item.name} className="mb-2">
                                <button
                                    onClick={() => setActive(item.name)}
                                    className={`flex items-center p-2 rounded w-full ${active === item.name
                                        ? "bg-blue-light text-white"
                                        : "text-black"
                                        }`}
                                >
                                    <span className="material-icons">{item.icon}</span>
                                    <span className="ml-2">{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Saidbar;
