import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Main() {
  const [auth, setAuth] = useAuth();
  const [nav, setNav] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false); // Uusi tila käyttäjän alasvetovalikolle
  const navigate = useNavigate();
  
  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const loggedIn = auth.user !== null && auth.token !== "" && auth.refreshToken !== "";

  const handlePostAdClick = () => {
    if (loggedIn) {
      navigate("/ad/create");
    } else {
      navigate("/login");
    }
  };

  const handleClick = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Uusi funktio käyttäjän nimen klikkaustapahtumalle
  const toggleUserDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  return (
    <div className='bg-[#F5F5F5] w-full px-4 py-2 pb-6'>
      <div className="hidden md:flex justify-between">
        {/* Linkit  #F5F5F5  */}
        <NavLink className="nav-link text-black" to="/">Home</NavLink>
        <NavLink className="nav-link text-black" to="/search">Search</NavLink>
        <NavLink className="nav-link text-black" to="/buy">Buy</NavLink>
        <NavLink className="nav-link text-black" to="/rent">Rent</NavLink>
        <NavLink className="nav-link text-black" to="/agents">Agents</NavLink>
        <a className="nav-link text-black pointer" onClick={handlePostAdClick}>Post Ad</a>
        {!loggedIn ? (
          <>
            <NavLink className="nav-link text-black" to="/login">Login</NavLink>
            <NavLink className="nav-link text-black" to="/register">Register</NavLink>
          </>
        ) : (
          <div className="relative">
            <button className="nav-link text-black dropdown-toggle" onClick={toggleUserDropdown}>
              {auth?.user?.name ? auth.user.name : auth.user.username}
            </button>
            {userDropdown && ( // Käyttäen userDropdown tilaa
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
      <div onClick={handleClick} className='md:hidden z-20'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobiilivalikko */}
      {nav && (
        <div className='fixed top-0 right-0 w-[60%] max-w-md h-screen bg-[rgba(253, 235, 211, 0.8)] backdrop-filter backdrop-blur-md flex flex-col justify-center items-center z-50'>
          <ul className='text-[#679186]'>
            <li className='py-6 text-4xl'>
              <NavLink className="nav-link text-black" to="/" onClick={handleClick}>Home</NavLink>
            </li>
            <li className='py-6 text-4xl'>
              <NavLink className="nav-link text-black" to="/search" onClick={handleClick}>Search</NavLink>
            </li>
            <li className='py-6 text-4xl'>
              <NavLink className="nav-link text-black" to="/buy" onClick={handleClick}>Buy</NavLink>
            </li>
            <li className='py-6 text-4xl'>
              <NavLink className="nav-link text-black" to="/rent" onClick={handleClick}>Rent</NavLink>
            </li>
            <li className='py-6 text-4xl'>
              <NavLink className="nav-link text-black" to="/agents" onClick={handleClick}>Agents</NavLink>
            </li>
            <li className='py-6 text-4xl'>
              <a className="nav-link text-black pointer" onClick={() => { handlePostAdClick(); handleClick(); }}>Post Ad</a>
            </li>
            {!loggedIn ? (
              <>
                <li className='py-6 text-4xl'>
                  <NavLink className="nav-link text-black" to="/login" onClick={handleClick}>Login</NavLink>
                </li>
                <li className='py-6 text-4xl'>
                  <NavLink className="nav-link text-black" to="/register" onClick={handleClick}>Register</NavLink>
                </li>
              </>
            ) : (
              <div>
                <li className='py-6 text-4xl'>
                  <NavLink className="nav-link text-black" to="/dashboard" onClick={handleClick}>Dashboard</NavLink>
                </li>
                <li className='py-6 text-4xl'>
                  <a onClick={() => { logout(); handleClick(); }} className="nav-link text-black">Logout</a>
                </li>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}





/*
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Main() {
  const [auth, setAuth] = useAuth();
  const [nav, setNav] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false); // Uusi tila käyttäjän alasvetovalikolle
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const loggedIn = auth.user !== null && auth.token !== "" && auth.refreshToken !== "";

  const handlePostAdClick = () => {
    if (loggedIn) {
      navigate("/ad/create");
    } else {
      navigate("/login");
    }
  };

  const handleClick = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Uusi funktio käyttäjän nimen klikkaustapahtumalle
  const toggleUserDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  return (
    <div className='bg-[#F5F5F5] w-full px-4 py-2 pb-6'>
      <div className="hidden md:flex justify-between">
     

        <NavLink className="nav-link text-black" to="/">Home</NavLink>
        <NavLink className="nav-link text-black" to="/search">Search</NavLink>
        <NavLink className="nav-link text-black" to="/buy">Buy</NavLink>
        <NavLink className="nav-link text-black" to="/rent">Rent</NavLink>
        <NavLink className="nav-link text-black" to="/agents">Agents</NavLink>
        <a className="nav-link text-black pointer" onClick={handlePostAdClick}>Post Ad</a>

        {!loggedIn ? (
          <>
            <NavLink className="nav-link text-black" to="/login">Login</NavLink>
            <NavLink className="nav-link text-black" to="/register">Register</NavLink>
          </>
        ) : (
          <div className="relative">
            <button className="nav-link text-black dropdown-toggle" onClick={toggleUserDropdown}>
              {auth?.user?.name ? auth.user.name : auth.user.username}
            </button>
            {userDropdown && ( // Käyttäen userDropdown tilaa
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

      <div onClick={handleClick} className='md:hidden z-20'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {nav && (
       
            <div className='fixed top-0 right-0 w-[60%] max-w-md h-screen bg-[rgba(253, 235, 211, 0.8)] backdrop-filter backdrop-blur-md flex flex-col justify-center items-center z-25'>
            <ul className='text-[#679186]'>
            <li className='py-6 text-4xl'>
            <NavLink className="nav-link text-black" to="/" onClick={handleClick}>Home</NavLink>
            </li>
            <li className='py-6 text-4xl'>
            <NavLink className="nav-link text-black" to="/search" onClick={handleClick}>Search</NavLink>
            </li>
            <li className='py-6 text-4xl'>
            <NavLink className="nav-link text-black" to="/buy" onClick={handleClick}>Buy</NavLink>
            </li>
            <li className='py-6 text-4xl'>
            <NavLink className="nav-link text-black" to="/rent" onClick={handleClick}>Rent</NavLink>
            </li>
            <li className='py-6 text-4xl'>
            <NavLink className="nav-link text-black" to="/agents" onClick={handleClick}>Agents</NavLink>
            </li>
            <li className='py-6 text-4xl'>
            <a className="nav-link text-black pointer" onClick={() => { handlePostAdClick(); handleClick(); }}>Post Ad</a>
            </li>

            {!loggedIn ? (
              <>
              <li className='py-6 text-4xl'>
                <NavLink className="nav-link text-black" to="/login" onClick={handleClick}>Login</NavLink>
                <NavLink className="nav-link text-black" to="/register" onClick={handleClick}>Register</NavLink>
                </li>
              </>
            ) : (
              <div>
                <li className='py-6 text-4xl'>
                <NavLink className="nav-link text-black" to="/dashboard" onClick={handleClick}>Dashboard</NavLink>
                </li>
                <li className='py-6 text-4xl'>
                <a onClick={() => { logout(); handleClick(); }} className="nav-link text-black">Logout</a>
                </li>
              </div>
            )}
          </ul>
        </div>
      )}

    </div>
  );
}




import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
//import houseLogo from '../../../houseLogo.jpg';
import { useState } from 'react';

export default function Main() {
  // context
  const [auth, setAuth] = useAuth();
  const [nav, setNav] = useState(false);
  // hooks
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
  };

  return (
    <div className='bg-[#FFFAFA] w-full px-4 py-2 pb-6'>
      {/*<div className="pt-2 pl-2">
        <img className="rounded-full w-16 sm:w-20 md:w-24 lg:w-32 h-auto" src={houseLogo} alt='house_logo' />
      </div>*/
/*
      <div className="hidden md:flex justify-between">
        <NavLink className="nav-link text-black" to="/">Home</NavLink>
        <NavLink className="nav-link text-black" to="/search">Search</NavLink>
        <NavLink className="nav-link text-black" to="/buy">Buy</NavLink>
        <NavLink className="nav-link text-black" to="/rent">Rent</NavLink>
        <NavLink className="nav-link text-black" to="/agents">Agents</NavLink>
        <a className="nav-link text-black pointer" onClick={handlePostAdClick}>Post Ad</a>

        {!loggedIn ? (
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
      )}
    </div>
  );
}*/



