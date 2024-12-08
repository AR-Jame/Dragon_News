import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../Authantication/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)            
        });
    }
    const navLinks = <>
        <li><NavLink className="p-3 rounded-sm" to="/">Home</NavLink></li>
        <li><NavLink className="p-3 rounded-sm" to="/d">About</NavLink></li>
        <li><NavLink className="p-3 rounded-sm" to="/d">Carrer</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 space-x-3">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ? 
                    <>
                    <button onClick={handleLogOut} className="px-10 py-2 bg-[#403F3F] text-white">Log Out</button>
                    {user.email}
                    </>
                    :
                        <>
                            <img src={profile} />
                            <Link to="/login" className="px-10 py-2 bg-[#403F3F] text-white">Login</Link>
                        </>
                }
            </div>
        </div>

    );
};

export default Navbar;