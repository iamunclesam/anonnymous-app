
const PostBox = () => {
    return (
        <div>
            <div className="bg-gray-800 p-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                    <div className="user-image flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-10 h-10 rounded-full" alt="" />
                    </div>
                    <div className="post-form w-[100%">
                        <input type="text" placeholder="What's Popping?" className="bg-gray-700 text-white p-2 h-10 w-[100%] lg:w-[560px] rounded-md"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostBox