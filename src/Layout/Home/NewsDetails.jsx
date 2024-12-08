import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import RighSideNav from "../Shared/RighSideNav";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
    const data = useLoaderData()
    const useParam = useParams()
    const expected = data.find(signle => signle._id === useParam.id)
    const { image_url, title, details } = expected
    return (
        <div className="mx-[8%]">
            <Header />
            <div className="grid grid-cols-4">
                <div className="col-span-3 ">
                    <h1 className="text-2xl p-2 font-semibold">Dragon news</h1>
                    <div className="border p-5 space-y-5">
                        <img src={image_url} className="w-full" />
                        <h3 className="text-3xl font-bold">{title}</h3>
                        <p className="text-lg">{details}</p>
                        <br />
                        <Link to="/">
                            <button className=" flex items-center gap-2 text-white text-xl rounded-md px-4 py-3 bg-[#D72050]">
                                <FaArrowLeft /> All news in the category
                            </button>
                        </Link>
                    </div>
                </div>
                <RighSideNav />
            </div>
        </div>
    );
};

export default NewsDetails;