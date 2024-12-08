import Marquee from "react-fast-marquee";
const marqueee = () => {
    return (
        <div>
            <div className="flex bg-[#F3F3F3] pl-3 pr-7 py-3 mt-4">
                <button className="hidden md:block text-lg px-5 py-3 mr-3 text-white bg-[#D72050]">Latetest</button>
                <Marquee className="ml-3">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default marqueee;