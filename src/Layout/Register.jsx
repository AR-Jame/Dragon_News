import { useContext } from "react";
import Navbar from "./Shared/Navbar";
import { AuthContext } from "../Authantication/AuthProvider";

const Register = () => {
    const {signUp,setUser} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const photoURL = form.get("photoURL")
        const email = form.get("email")
        const password = form.get("password")
        const acceptence = form.get("acceptence")
        // console.log(name, photoURL, email, password, acceptence);
        signUp(email, password)
        .then((result) => {
            console.log(result.user)
            setUser(result.user)
        }).catch((err) => {
            console.log(err.message)
        });
    }
    return (
        <>
        <div className="mx-[8%]">
            <Navbar />
        </div>
            <div className="flex items-center justify-center min-h-[93vh] bg-gray-50">
                <div className="w-full max-w-lg p-10 bg-white shadow-md rounded-lg">
                    <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Register your account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-lg font-medium text-gray-700"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                name="name"
                                className="w-full px-5 py-3 text-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="photo"
                                className="block mb-2 text-lg font-medium text-gray-700"
                            >
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photo"
                                placeholder="Enter photo URL"
                                name= "photoURL"
                                className="w-full px-5 py-3 text-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-lg font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full px-5 py-3 text-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-lg font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-5 py-3 text-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-6 flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                name="acceptence"
                                className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="terms"
                                className="ml-3 text-gray-700 text-lg"
                            >
                                Accept <span className="font-medium text-indigo-600">Terms & Conditions</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            
                            className="w-full px-5 py-3 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Register;