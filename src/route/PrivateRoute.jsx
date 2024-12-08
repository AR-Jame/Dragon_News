import { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if (loading) {
        return (
            <div className="flex justify-center h-screen items-center w-full">
                <span className="loading loading-infinity w-36">
                </span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" />
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;