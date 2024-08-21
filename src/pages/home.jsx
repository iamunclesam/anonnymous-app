
import Buzz from "../components/buzz"
import FeedList from "../components/FeedList"
import PostBox from "../components/postBox"
import Dashboard from "../layout/dashboard"



const home = () => {
  return (
    <>
      <Dashboard />
      <div className="sm:ml-64 p-2 md:p-8">
        <div className="grid md:grid-cols-3 md:gap-8">
          <div className="md:col-span-2">
            <div className="post-form mb-8">
              <PostBox />
            </div>
            <div className="feed">
              <FeedList />
            </div>
          </div>
          <div className="col">
            <div className="">
              <Buzz />
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default home