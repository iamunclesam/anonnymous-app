import { useEffect, useState } from "react";
import FeedBox from "./feedBox"
import { supabase } from "../supabase/supabaseClient";


const FeedList = () => {
    const [items, setItems] = useState([]);
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

    useEffect(() => console.table("items:", items)
    )
    return (
        <div>
            {items.map((item, index) =>
                <FeedBox key={index} item={item} />
            )}
        </div>
    )
}

export default FeedList