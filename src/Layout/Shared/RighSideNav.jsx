import github from "../../assets/github-mark.png"
import qZone1 from "../../assets/swimming.png"
import qZone2 from "../../assets/class.png"
import qZone3 from "../../assets/playground.png"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Authantication/AuthProvider";


const RighSideNav = () => {

    const { googleSignIn } = useContext(AuthContext)
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    }
    return (
        <div className="p-3 space-y-10">
            <div>
                <p className="font-semibold text-xl mb-3">Login With</p>
                <div className="space-y-2">
                    <button onClick={handleGoogle} className="w-full justify-center flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="800px"
                            height="800px"
                            viewBox="-0.5 0 48 48"
                            version="1.1"
                        >
                            <title>Google-color</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                                id="Icons"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                        <path
                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                            id="Fill-1"
                                            fill="#FBBC05"
                                        ></path>
                                        <path
                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                            id="Fill-2"
                                            fill="#EB4335"
                                        ></path>
                                        <path
                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                            id="Fill-3"
                                            fill="#34A853"
                                        ></path>
                                        <path
                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                            id="Fill-4"
                                            fill="#4285F4"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>Login with Google</span>
                    </button>
                    <button className="w-full justify-center flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <img className="h-6 w-6 mr-2" src={github} />
                        <span>Login with GitHub</span>
                    </button>
                </div>

            </div>
            <div>
                <p className="font-semibold text-xl mb-3">Find us on</p>
                <div className="w-full border rounded-xl gap-2 flex items-center p-3">
                    <div className="bg-[#1b1b1b13] p-2 rounded-full">
                        <FaFacebook />
                    </div>
                    <p>FaceBook</p>
                </div>
                <div className="w-full border rounded-xl gap-2 flex items-center p-3">
                    <div className="bg-[#1b1b1b13] p-2 rounded-full">
                        <FaTwitter />
                    </div>
                    <p>Twitter</p>
                </div>
                <div className="w-full border rounded-xl gap-2 flex items-center p-3">
                    <div className="bg-[#1b1b1b13] p-2 rounded-full">
                        <FaInstagram />
                    </div>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="bg-[rgba(22,22,22,0.1)] p-5">
                <p className="font-semibold text-xl mb-3">Q Zone</p>
                <img src={qZone2} className="w-full h-auto" />
                <img src={qZone3} className="w-full h-auto" />
                <img src={qZone1} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default RighSideNav;