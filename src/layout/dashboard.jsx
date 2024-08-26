import Header from "../components/Header"
import Sidebar from "../components/sidebar"


const dashboard = () => {
    return (
        <div>
            <div className="md:hidden">
                <Header />
            </div>
            <Sidebar />
        </div>
    )
}

export default dashboard