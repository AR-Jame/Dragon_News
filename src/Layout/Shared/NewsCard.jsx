import { FaBookmark, FaShareNodes  } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NewsCard = ({ data }) => {
    const { author, title, details , image_url, _id } = data

    return (
        <div className="border-2 border-[#F3F3F3] p-5 mb-3 space-y-3">
            <div className="bg-[#F3F3F3] p-5 flex justify-between items-center">
                <div className="flex gap-3">
                    <img className="w-12 h-12 object-contain rounded-full" src={author.img} />
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <FaBookmark />
                    <FaShareNodes />
                </div>
            </div>
            <h4 className="font-semibold text-2xl">{title}</h4>
            <img className="w-full h-auto" src={image_url}/>
            <p>{details.length > 300 ? details.slice(0, 299) : details} ... <Link to={`/news/${_id}`} className="text-[#FF8C47]">Read more</Link></p>
        </div>
    );
};

NewsCard.propTypes = {
    data: PropTypes.object
}
export default NewsCard;