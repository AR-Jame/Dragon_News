import { useEffect, useState } from "react";
import NewsCard from "../Shared/NewsCard";

const MiddleHome = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("news.json")
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    return (
        <div>
            <p className="font-semibold text-xl mb-3">Dragon News Home</p>
            {
                news.map(single => <NewsCard data={single} key={single._id} /> )
            }
        </div>
    );
};

export default MiddleHome;