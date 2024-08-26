import { useEffect, useState } from "react"
import { supabase } from "../supabase/supabaseClient"
import { Icon } from "@iconify/react/dist/iconify.js";

const PostBox = () => {
    const [user, setUser] = useState('');
    const [avatar, setAvatar] = useState("");
    const [content, setContent] = useState('')
    const [error, setError] = useState(null);
    let [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                setError(error.message);
                setLoading(false);
            } else {
                const userData = data.session.user;
                if (userData) {
                    fetchUserName(userData.id);
                }
            }
        };

        fetchCurrentUser()

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
                    setAvatar(data.avatar)
                }
            } catch (err) {
                console.error("Unexpected error:", err.message);
            }
        };

        const fetchSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.log(error)
            }
            else {
                setUser(data.session.user)
                console.log("User:", data.session.user)
            }
        }

        fetchSession()
    }, [])

    const postFeed = async () => {
        setLoading(true)
        try {
            const { data, error } = await supabase
                .from('feeds')
                .insert([{ userId: user.id, content: content }])
            if (data) {
                console.log("Feed Sent")
            }
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }

    }
    return (
        <div>
            <div className="md:bg-gray-800 md:p-6 py-4 rounded-md">
                <div className="flex md:gap-4">
                    <div className="user-image flex-shrink-0">
                        <img src={avatar} className="w-12 h-12 hidden md:block rounded-full" alt="" />
                    </div>
                    <div className="post-form bg-gray-800 rounded flex items-center gap-2 w-full">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            type="text"
                            placeholder="What's Popping?"
                            className=" text-white bg-transparent p-2 h-18 rounded-md w-full flex-grow"
                            required
                        />

                        <button
                            onClick={postFeed}
                            className="flex items-center justify-center gap-2 mx-1 px-4 sm:py-2 text-white font-semibold md:bg-gradient-to-r from-purple-800 to-purple-600 rounded transition-all duration-300 hover:shadow-inner"
                        >
                            {isLoading ? (
                                <>
                                    <span className="italic md:not-italic hidden md:block">Creating...</span>
                                    <Icon icon="eos-icons:bubble-loading" className="md:hidden text-2xl" />

                                </>
                            ) : (
                                <>
                                    <div className="hidden md:block md:flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                            <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
                                        </svg>
                                        <span>Create</span>
                                    </div>
                                    <Icon icon="iconamoon:send-fill" className="md:hidden text-3xl" />
                                </>
                            )}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostBox