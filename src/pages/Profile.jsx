import React, { useState, useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                setError(error.message);
                setLoading(false);
            } else {
                const userData = data.session.user;
                if (userData) {
                    setEmail(userData.email);
                    // Fetch the profile based on the userId
                    fetchProfile(userData.id);
                }
            }
        };

        const fetchProfile = async (userId) => {
            const { data, error } = await supabase
                .from("Profile")
                .select("*")
                .eq("userId", userId)
                .single();

            if (error) {
                if (error.message !== "Row not found") {
                    setError(error.message);
                }
                setLoading(false);
            } else {
                setProfile(data);
                setUserName(data.username);
                setAvatar(data.avatar);
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (profile) {
                // Update profile
                const { error } = await supabase
                    .from("Profile")
                    .update({ username, avatar })
                    .eq("userId", profile.userId);

                if (error) {
                    setError(error.message);
                } else {
                    alert("Profile updated successfully!");
                }
            } else {
                // Create profile
                const { data: userData, error: userError } = await supabase.auth.getSession();
                if (userError) {
                    setError(userError.message);
                } else {
                    const { error } = await supabase
                        .from("profile")
                        .insert([{
                            userId: userData.session.user.id,
                            username,
                            email: userData.session.user.email,
                            avatar
                        }]);

                    if (error) {
                        setError(error.message);
                    } else {
                        alert("Profile created successfully!");
                    }
                }
            }
        } catch (error) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{profile ? "Update Profile" : "Create Profile"}</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        readOnly
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor="avatar">Avatar URL</label>
                    <input
                        type="text"
                        id="avatar"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    {profile ? "Update Profile" : "Create Profile"}
                </button>
            </form>
        </div>
    );
};

export default ProfilePage;
