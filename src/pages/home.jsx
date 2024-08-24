
import { useEffect, useState } from "react"
import Buzz from "../components/buzz"
import FeedList from "../components/FeedList"
import PostBox from "../components/postBox"
import Dashboard from "../layout/dashboard"
import { supabase } from "../supabase/supabaseClient"



const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState('')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        setError(error.message)
      }
      else {
        console.log("User:", data)
      }
    }

    fetchSession()
  }, [])
  return (
    <>
      <Dashboard />
      <div className="sm:ml-64 p-4 md:p-8">
        <div className="grid md:grid-cols-3 md:gap-8">
          <div className="md:col-span-2">
            <div className="post-form mb-8">
              <PostBox />
            </div>
            <div className="feed">
              <h1 className="font-bold text-white text-xl py-4">Feeds</h1>
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