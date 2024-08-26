import { Icon } from "@iconify/react/dist/iconify.js"

const buzz = () => {
    return (
        <div>
            <div className="bg-gray-800 rounded p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-xl">Servers</h1>
                    <button className="text-sm text-white flex items-center gap-1 bg-purple-900 p-2 rounded"> <Icon icon="line-md:cloud-up" />Start a server</button>
                </div>

                <div className="server-list">
                    <ul className="my-8">
                        <li className="server mb-3 border-b-2 pb-3 border-gray-700">

                            <div className="flex text-white justify-between">
                                <div className="">
                                    <h1 className="server-name font-bold">#Eagles</h1>
                                    <div className="flex items-center gap-1">
                                        <Icon icon="twemoji:flag-nigeria" width={12} />
                                        <span className="text-xs">Nigeria</span>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <Icon icon="bitcoin-icons:lock-filled" />
                                </div>
                            </div>

                        </li>

                        <li className="server mb-3 border-b-2 pb-3 border-gray-700">

                            <div className="flex text-white justify-between">
                                <div className="">
                                    <h1 className="server-name font-bold">#Eagles</h1>
                                    <div className="flex items-center gap-1">
                                        <Icon icon="twemoji:flag-nigeria" width={12} />
                                        <span className="text-xs">Nigeria</span>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <Icon icon="bitcoin-icons:lock-filled" />
                                </div>
                            </div>

                        </li>


                        <li className="server mb-3 border-b-2 pb-3 border-gray-700">

                            <div className="flex text-white justify-between">
                                <div className="">
                                    <h1 className="server-name font-bold">#Eagles</h1>
                                    <div className="flex items-center gap-1">
                                        <Icon icon="twemoji:flag-nigeria" width={12} />
                                        <span className="text-xs">Nigeria</span>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <Icon icon="bitcoin-icons:lock-filled" />
                                </div>
                            </div>

                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default buzz