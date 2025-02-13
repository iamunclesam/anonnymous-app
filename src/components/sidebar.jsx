import { useState } from 'react';
import { Icon } from '@iconify/react';
import logo from '../assets/logo.png';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "General Feed", path: "/feed", icon: "ic:baseline-rss-feed" },
        { name: "Chat Room", path: "/room", icon: "gridicons:chat" },
        { name: "Marketplace", path: "/market", icon: "mdi:marketplace" },
        { name: "Group", path: "/group", icon: "mdi:account-group" },
        { name: "Logout", path: "/logout", icon: "solar:logout-2-bold" }
    ];

    return (
        <div>
            {/* Sidebar for larger screens */}
            <aside className={`fixed top-0 left-0 z-40 w-64 border-e-2 border-purple-700 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-gray-900`}>
                <nav className="p-6 text-white h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
                            <span className="text-2xl font-bold">Deep Circle</span>
                        </div>
                        {/* Toggle Button for Mobile */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="sm:hidden text-white focus:outline-none"
                        >
                            <Icon icon="mdi:menu" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navbar Items */}
                    <ul className="flex-1 space-y-4">
                        {navItems.map(item => (
                            <li className="nav-items p-2 mb-4 rounded-md text-xl hover:bg-gray-700 flex gap-2 items-center" key={item.name}>
                                <Icon icon={item.icon} className="w-6 h-6" />
                                <a href={item.path} className="flex-1">{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Logout Button */}
                    <a href="/logout" className="text-red-500 hover:text-red-400 flex items-center gap-2 mt-auto">
                        <Icon icon="material-symbols:indeterminate-question-box" className="w-6 h-6" />
                        <span>Terminate Account</span>
                    </a>
                </nav>
            </aside>

            {/* Mobile Navbar */}
            <div className="fixed z-50 w-full bg-gray-900 h-16 max-w-lg mt-20 -translate-x-1/2 border-t border-gray-700 bottom-0 left-1/2 sm:hidden">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                    {navItems.map(item => (
                        <a href={item.path} key={item.name} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <Icon icon={item.icon} className="text-white text-4xl" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
