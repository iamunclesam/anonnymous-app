
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
  const [items, setItems] = useState([]);
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
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
      const fetchFeeds = async () => {
          try {
              let { data } = await supabase
                  .from('feeds')
                  .select('*')
              if (data) setItems(data)
          } catch (error) {
              console.log(error.message)
          }
      }

      fetchFeeds()

  }, []);

  return (
    <>
      <Dashboard />
      <div className="sm:ml-64 p-3 md:p-8">
        <div className="grid md:grid-cols-3 md:gap-8">
          <div className="md:col-span-2">
            <div className="post-form mb-8">
              <PostBox />
            </div>
            <div className="feed pb-16">
              <h1 className="font-bold text-white text-xl py-4">Feeds({items.length})</h1>
              <FeedList />
            </div>
          </div>
          <div className="col">
            <div className="hidden md:block">
              <Buzz />
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default home