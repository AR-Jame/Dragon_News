import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <p className="font-semibold text-xl mb-3">All category</p>
            <NavLink to="/" className="block py-3 pl-7 rounded-lg">All news</NavLink>
            {
                categories.map(category =>
                    <NavLink to="/fdas" className="block py-3 pl-7"
                        key={category.id}>
                        {category.name}
                    </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;