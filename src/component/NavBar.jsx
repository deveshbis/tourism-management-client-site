import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { useEffect, useState } from "react";


const NavBar = () => {
    const [theme, setTheme] = useState('light');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggleTheme = e => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    const { user, logoutUser } = useAuth();

    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/touristSpot'>All Tourists Spot</NavLink></li>
            <li><NavLink to='/addTouristSpot'>Add Tourists Spot</NavLink></li>
            <li><NavLink to='/myList'>My List</NavLink></li>
        </>
    );

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <div>
            <div className="navbar bg-blue-900 fixed w-full text-white z-20 top-0 start-0  border-gray-200 rounded-xl" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden " onClick={toggleDropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1060] p-2 shadow text-white bg-black rounded-box w-52 ${dropdownOpen ? 'block' : 'hidden'}`}>
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-xl md:text-xl text-sm ">Dev Tourism</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center space-x-4 relative">
                            <div
                                className="dropdown dropdown-end"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative">
                                    <img src={user?.photoURL || "https://i.ibb.co/d7Ppj2d/devesh-jpg.jpg"} className="w-10 rounded-full" alt="User Avatar" />
                                </label>
                                {isHovering && (
                                    <p className="absolute top-0 left-0 transform -translate-x-full shadow-lg rounded px-2 py-1">{user.displayName || 'Unknown User'}</p>
                                )}
                            </div>

                            <button onClick={logoutUser} className="btn btn-sm btn-ghost font-semibold text-[16px]">Logout</button>

                        </div>
                    ) : (
                        <Link to='/login'><button className="p-2 rounded-xl font-semibold text-[16px]">Login</button></Link>
                    )}
                </div>
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleToggleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;