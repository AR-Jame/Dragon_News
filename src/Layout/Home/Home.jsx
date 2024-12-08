import Marqueee from "./Marqueee"
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RighSideNav from "../Shared/RighSideNav";
import MiddleHome from "./MiddleHome";

const Home = () => {
    return (
        <div className="font-poppins mx-[5%]">
            <Header />
            <Marqueee />
            <Navbar />
            <div className=" gap-6 grid grid-cols-1 lg:grid-cols-4">
                <div className=""><LeftSideNav /></div>
                <div className="lg:col-span-2 "><MiddleHome /></div>
                <div className=""><RighSideNav /></div>



            </div>
        </div>
    );
};

export default Home;