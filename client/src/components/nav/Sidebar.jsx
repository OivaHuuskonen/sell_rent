/*import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/wishlist">
            Wishlist
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/enquiries">
            Enquiries
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ad/create">
            Create Ad
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </>
  );
}*/


import { NavLink } from "react-router-dom";
/*import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
//import houseLogo from '../../../houseLogo.jpg';
import { useState } from 'react';*/

export default function Sidebar() {

  return (
    <div className='bg-[#F5F5F5] w-full px-4 py-2 pb-6'>
      {/*<div className="pt-2 pl-2">
        <img className="rounded-full w-16 sm:w-20 md:w-24 lg:w-32 h-auto" src={houseLogo} alt='house_logo' />
      </div>*/}
      <div className="hidden md:flex justify-start gap-6">
        <NavLink className="nav-link text-black" to="/dashboard">Dashboard</NavLink>
        <NavLink className="nav-link text-black" to="/user/wishlist">Wishlist</NavLink>
        <NavLink className="nav-link text-black" to="/user/Enquiries">Enquiries</NavLink>
        <NavLink className="nav-link text-black" to="/ad/create">Create</NavLink>
        <NavLink className="nav-link text-black" to="/user/profile">profile</NavLink>
        <NavLink className="nav-link text-black" to="/user/settings">Settings</NavLink>
    </div>
    </div>
  );
}


 /* const [auth, setAuth] = useAuth();
  const [nav, setNav] = useState(false);
  
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const loggedIn =
    auth.user !== null && auth.token !== "" && auth.refreshToken !== "";

  const handlePostAdClick = () => {
    if (loggedIn) {
      navigate("/ad/create");
    } else {
      navigate("/login");
    }
  };

  const handleClick = () => {
    setNav(!nav);
    // Prevent scrolling when the blurred menu is open
    if (!nav) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
  };*/

  {/*  {!loggedIn ? (
          <>
            <NavLink className="nav-link text-black" to="/login">Login</NavLink>
            <NavLink className="nav-link text-black" to="/register">Register</NavLink>
          </>
        ) : (
          <div className="relative">
            <button className="nav-link text-black dropdown-toggle" onClick={() => setNav(!nav)}>
              {auth?.user?.name ? auth.user.name : auth.user.username}
            </button>
            {nav && (
              <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <li>
                  <NavLink className="block px-4 py-2 text-black hover:bg-gray-100" to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <a onClick={logout} className="block px-4 py-2 text-black hover:bg-gray-100">Logout</a>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {nav && (
        <div className='fixed top-0 right-0 w-[60%] max-w-md h-screen bg-[rgba(253, 235, 211, 0.8)] backdrop-filter backdrop-blur-md flex flex-col justify-center items-center'>
          <ul className='text-[#679186] space-y-4'>
            <NavLink className="nav-link text-black" to="/" onClick={handleClick}>Home</NavLink>
            <NavLink className="nav-link text-black" to="/search" onClick={handleClick}>Search</NavLink>
            <NavLink className="nav-link text-black" to="/buy" onClick={handleClick}>Buy</NavLink>
            <NavLink className="nav-link text-black" to="/rent" onClick={handleClick}>Rent</NavLink>
            <NavLink className="nav-link text-black" to="/agents" onClick={handleClick}>Agents</NavLink>
            <a className="nav-link text-black pointer" onClick={() => { handlePostAdClick(); handleClick(); }}>Post Ad</a>
            
            {!loggedIn ? (
              <>
                <NavLink className="nav-link text-black" to="/login" onClick={handleClick}>Login</NavLink>
                <NavLink className="nav-link text-black" to="/register" onClick={handleClick}>Register</NavLink>
              </>
            ) : (
              <div>
                <NavLink className="nav-link text-black" to="/dashboard" onClick={handleClick}>Dashboard</NavLink>
                <a onClick={() => { logout(); handleClick(); }} className="nav-link text-black">Logout</a>
              </div>
            )}
          </ul>
        </div>
      )}*/}