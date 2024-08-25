import { useEffect, useState } from "react"
import { supabase } from "../supabase/supabaseClient"
import { Icon } from "@iconify/react/dist/iconify.js";

const PostBox = () => {
    const [user, setUser] = useState('');
    const [content, setContent] = useState('')
    let [isLoading, setLoading] = useState(false)

    useEffect(() => {
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
            <div className="bg-gray-800 p-6 py-4 rounded-md">
                <div className="flex gap-4">
                    <div className="user-image flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-12 h-12 rounded-full" alt="" />
                    </div>
                    <div className="post-form flex items-center gap-2 w-full">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            type="text"
                            placeholder="What's Popping?"
                            className="bg-gray-700 text-white p-2 h-10 rounded-md flex-grow"
                            required
                        />

                        <button
                            onClick={postFeed}
                            className="flex items-center justify-center my-2 gap-2 px-4 py-2 text-white font-semibold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 rounded transition-all duration-300 hover:shadow-inner"
                        >
                            {isLoading ? (
                                <span>Creating...</span>
                            ) : (
                                <>
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