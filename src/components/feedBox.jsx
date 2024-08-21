import { Icon } from "@iconify/react/dist/iconify.js"

const FeedBox = ({ item }) => {

    return (
        <div>
            <div className="bg-gray-800 rounded p-6">
                <div className="flex justify-start gap-4">
                    <div className="user-image flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-14 h-14 border border-purple-600 p-1 object-cover rounded-full" alt="" />
                    </div>
                    <div className="post">
                        <div className="user-details flex justify-between">
                            <div className="">
                                <h1 className="user-name text-gray-200 flex items-center">
                                    #{item.username}
                                    <Icon icon="mdi:approve" color="purple" />
                                </h1>
                                <span className="time text-sm text-gray-400"> {item.date} </span>
                            </div>
                            <div className="like">
                                <Icon icon="solar:chat-square-like-broken" width="1.5em" color="white" />
                            </div>
                        </div>
                        <div className="content pt-4">
                            <p className="text-gray-300">
                                {item.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-8 h-8 border-x border-gray-600">
            </div>

        </div>
    )
}

export default FeedBox