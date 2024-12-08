import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log("from login page", location)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        signIn(email, password)
            .then((result) => {
                console.log(result)
                navigate(location.state? location.state: "/")
            }).catch((err) => {
                console.log(err)
            });


    }
    return (
        <div>
            <div className="mx-[8%]">
                <Navbar />
            </div>
            <div className="flex font-poppins items-center justify-center min-h-[93vh] bg-gray-50">
                <div className="w-full max-w-lg p-10 bg-white shadow-md rounded-lg">
                    <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Login your account</h2>
                    <hr className="my-10" />
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-lg font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full px-5 py-3 text-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-8">
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
                        <button
                            type="submit"
                            className="w-full px-5 py-3 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-lg text-center text-gray-600">
                        Don’t Have An Account?{' '}
                        <Link
                            to="/register"
                            className="font-medium text-red-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;