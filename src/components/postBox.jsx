import { useEffect, useState } from "react"
import { supabase } from "../supabase/supabaseClient"

const PostBox = () => {
    const [user, setUser] = useState('');
    const [content, setContent] = useState('')

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
        try {
            const { data, error } = await supabase
                .from('feeds')
                .insert([{ userId: user.id, content: content }])
            if (data) {
                console.log("Feed Sent")
            }
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <div>
            <div className="bg-gray-800 p-6 py-4 rounded-md">
                <div className="flex gap-4">
                    <div className="user-image flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-12 h-12 rounded-full" alt="" />
                    </div>
                    <div className="post-form w-[100%">
                        <input value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="What's Popping?" className="bg-gray-700 text-white p-2 h-10 w-[100%] lg:w-[560px] rounded-md" />
                        <button onClick={postFeed} className="bg-purple-900 text-white py-1 px-4 rounded my-2 text-xs">Push</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostBox