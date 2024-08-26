import React, { useState } from 'react';
import Dashboard from '../layout/dashboard';
import { Icon } from '@iconify/react';

const Room = () => {
    const [messages, setMessages] = useState([
        { id: 1, user_id: 1, content: 'Hello there!' },
        { id: 2, user_id: 2, content: 'Hi! How are you?' },
    ]);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({ id: 1, email: 'user@example.com' });
    const [followers, setFollowers] = useState([
        { id: 1, name: 'Follower 1' },
        { id: 2, name: 'Follower 2' },
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        // Simulate sending message
        setMessages([...messages, { id: messages.length + 1, user_id: user.id, content: message }]);
        setMessage('');
    };

    return (
        <>
            <Dashboard />
            <div className="sm:ml-64 flex h-screen pb-16">

                {/* Chat Room Container */}
                <div className="grid md:grid-cols-3 w-full">
                    {/* Chat Messages */}
                    <div className="md:col-span-2 flex flex-col bg-gray-900">
                        {/* Chat Header */}
                        <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                            <h1 className="text-xl font-semibold">Chat Room</h1>
                            {/* <div className="flex items-center gap-2">
                                <Icon icon="mdi:account" className="w-6 h-6" />
                                <span>{user ? user.email : 'Loading...'}</span>
                            </div> */}
                        </div>

                        {/* Message List */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.user_id === user.id ? 'justify-end' : 'justify-start'} mb-2`}
                                >
                                    <div
                                        className={`p-3 rounded ${msg.user_id === user.id ? 'bg-purple-600 text-white' : 'bg-gray-300'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="bg-gray-800 p-4 border-t border-gray-200 fixed w-[100%] bottom-16">
                            <form onSubmit={handleSendMessage} className="flex items-center">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="flex-1 p-2 bg-gray-800 border border-gray-600 rounded-lg"
                                    placeholder="Type a message..."
                                />
                                <button
                                    type="submit"
                                    className="ml-2 bg-purple-700 text-white p-2 rounded-lg"
                                >
                                    <Icon icon="mdi:send" className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Followers Sidebar */}
                    <div className="bg-gray-800 col border-l border-gray-700 p-4 hidden md:block">
                        <h2 className="text-white text-xl mb-4">Followers</h2>
                        <ul>
                            {followers.map((follower) => (
                                <li key={follower.id} className="text-gray-300 mb-2">
                                    {follower.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Room;
