import { Icon } from '@iconify/react';
const sidebar = () => {
    const navItems = [
        { name: "General Feed", path: "/feed", icon: "ic:baseline-rss-feed" },
        { name: "Chat Room", path: "/room", icon: "bi:chat-square-dots-fill" },
        { name: "Group", path: "/group", icon: "mdi:account-group" },
        { name: "Logout", path: "/logout", icon: "solar:logout-2-bold" }
    ]
    return (
        <aside className="fixed top-0 left-0 z-40 w-64 border-e-2 border-gray-700 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-900">
            <nav className="p-6 text-white">
                <div className="logo font-bold text-2xl">Deep Circle</div>
                <ul className="nav-list mt-16">
                    {navItems.map(item => (
                        <li className="nav-items p-2 mb-8 rounded-md text-xl hover:bg-gray-700 flex gap-2 items-center" key={item.name}>
                            <Icon icon={item.icon} />
                            {item.name}
                        </li> 
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default sidebar