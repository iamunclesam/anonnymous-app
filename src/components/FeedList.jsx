import { useEffect, useState } from "react";
import FeedBox from "./feedBox"

const FeedList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchedItems = [
            {
                username: "BigDaddyYo",
                date: "Few minutes ago",
                content: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam delectus ipsum neque necessitatibus reiciendis veniam debitis animi consequuntur pariatur."
            },
            {
                username: "CrazyClown",
                date: "5 minutes ago",
                content: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam delectus ipsum neque necessitatibus reiciendis veniam debitis animi consequuntur pariatur."
            },
            {
                username: "BlackMan",
                date: "1 hour ago",
                content: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam delectus ipsum neque necessitatibus reiciendis veniam debitis animi consequuntur pariatur."
            }
        ]
        setItems(fetchedItems)

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