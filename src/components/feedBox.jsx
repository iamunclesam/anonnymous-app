import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { supabase } from "../supabase/supabaseClient";

const FeedBox = ({ item }) => {
    const [displayName, setDisplayName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [error, setError] = useState(null);

    const fetchUserName = async (userId) => {
        console.log("userId-box:", userId)
        try {
            const { data, error } = await supabase
                .from("Profile")
                .select("*")
                .eq("userId", userId)
                .single();

            if (error) {
                if (error.message !== "Row not found") {
                    setError(error.message);
                }
            } else {
                setDisplayName(data.username)
                setAvatar(data.avatar)
            }
        } catch (err) {
            console.error("Unexpected error:", err.message);
        }
    };

    useEffect(() => {
        if (item.userId) {
            fetchUserName(item.userId);
        }
    }, [item.userId]);

    return (
        <div className="my-4">
            <div className="flex gap-2">
                <div className="user-image flex-shrink-0">
                    <img
                        src={avatar}
                        className="w-14 h-14 border border-purple-600 p-1 object-cover rounded-full"
                        alt="User Avatar"
                    />
                </div>
                <div className="post w-full">
                    <div className="user-details">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div>
                                    <h1 className="user-name text-gray-200 font-bold flex items-center gap-1">
                                        {displayName || "Unknown User"}
                                        <Icon icon="mdi:approve" color="purple" />
                                    </h1>
                                    <span className="time text-xs text-gray-400">
                                        {new Date(item.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                            <div className="like text-center flex justify-center">
                                <Icon icon="solar:chat-square-like-broken" width="1.5em" color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="content pt-4">
                        <p className="text-gray-300">
                            {item.content}
                        </p>
                    </div>
                </div>
            </div>
            {/* Render replies or nested threads here */}
            <div className="mt-4">
                {item.replies?.map((reply, index) => (
                    <FeedBox key={index} item={reply} />
                ))}
            </div>
        </div>
    );
};

export default FeedBox;
