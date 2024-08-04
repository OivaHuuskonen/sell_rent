// login.jsx
/* chatgpt vers import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/login`, { email, password });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setAuth(data);
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Login successful");
        setLoading(false);
        location?.state !== null ? navigate(location.state) : navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Login</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control mb-4"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control mb-4"
                required
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                disabled={loading}
                className="btn btn-primary col-12 mb-4"
              >
                {loading ? "Waiting..." : "Login"}
              </button>
            </form>
            <Link className="text-danger" to="/auth/forgot-password">
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}*/


/*import { useState } from 'react'
import './Login.css'
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { FaUser, FaLock } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // console.log(email, password);
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setAuth(data);
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Login successful");
        setLoading(false);
        location?.state !== null
          ? navigate(location.state)
          : navigate("/dashboard");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  }
  
  return (
       <div className='center-content'>
    <div className="wrapper">
    <form onSubmit={handleSubmit}>
        <br></br><br></br><br></br>
      <h1>Login</h1>
      <div className="input-box">
          <input
            required
            autoFocus
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email" />
            <FaUser className="icon"/>
          </div>
       
          <div className="input-box">
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password" />
            <FaLock className="icon"/>
          </div>
          
          <div className="remember-forgot">
        <label><input type="checkbox" />Remember me </label>
        <a href="#">Forgot password?</a>
        <br></br><br></br>
      </div>
          
        <button type="submit">Login</button>

       
      <div className="register-link">
      <br></br>
        <p>Dont have an account?</p>
        <a href="#">well honey, you probably are not the adult child of alcoholics ...</a>
      </div>
      {error && <p>{error}</p>}

      </form>
    </div>
    </div>
  )
}*/





/* import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"

export default function Login() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(email, password);
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setAuth(data);
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Login successful");
        setLoading(false);
        location?.state !== null
          ? navigate(location.state)
          : navigate("/dashboard");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <div>
    {/*   <div className="mx-auto w-full	text-align:left pb-16 pt-20 bg-[#51829B]">
    <h1 className="pl-10 text-6xl sm:text-7xl font-bold text-[#FFFAFA]">
      Login
    </h1>
  </div>*/
  /*  <h1 className="display-1 bg-primary text-light p-5">Login</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control mb-4"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                <FaUser className="icon"/>
              
              <div className="password">
              <input
                type="password"
                className="form-control mb-4"
                required
                autoFocus
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                placeholder="Enter your password"
                <FaLock className="icon"/>
              </div>
              <button
                disabled={loading}
                className="btn btn-primary col-12 mb-4"
              >
                {loading ? "Waiting..." : "Login"}
              </button>
            </form>

            <Link className="text-danger" to="/auth/forgot-password">
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}*/


/* last good import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setAuth(data);
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Login successful");
        setLoading(false);
        location?.state !== null
          ? navigate(location.state)
          : navigate("/dashboard");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#FFFAFA]">
      <h1 className="pt-60 grid justify-items-center pb-20">Login</h1>
     
        <div className="grid justify-items-center ">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="form-control"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}     
                />
              <span className="input-group-text"><FaUser /></span>
              </div>

              <br></br> <br></br> 
              
              <div className="grid justify-items-center">
                <span className="input-group-text"><FaLock /></span>
                <input
                  type="password"
                  className="form-control"
                  required
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  placeholder="Enter your password"
                />
              </div>
              <br></br> <br></br> 
              <button
                disabled={loading}
                className="btn btn-primary col-12 mb-4"
              >
                {loading ? "Waiting..." : "Login"}
              </button>
            </form>
            <br></br> <br></br>
            <Link className="text-danger" to="/auth/forgot-password">
              Forgot password
            </Link>
            <br></br> <br></br> <br></br> <br></br>
          </div>
        </div>
     
      <br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br>
    </div>
  );
}*/


import { useState } from 'react'
import './Login.css'
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"


const Login = () => {
const [auth, setAuth] = useAuth();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
// const { error, login } = useLogin()
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // console.log(email, password);
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setAuth(data);
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Login successful");
        setLoading(false);
        location?.state !== null
          ? navigate(location.state)
          : navigate("/dashboard");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className='center-content'>
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <br></br><br></br><br></br>
      <h1>
        Login
      </h1>
      <div className="input-box">
        <input 
        type="text"
        placeholder="Your username please"
        required
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
        <FaUser className="icon"/>
      </div>

      <div className="input-box">
        <input 
        type="password"
        placeholder="Password"
        required
        autoFocus
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         />
        <FaLock className="icon"/>
      </div>

      <div className="remember-forgot">
        <label><input type="checkbox" />Remember me </label>
     
        <Link className="text-gray-500" to="/auth/forgot-password">
              Forgot password
            </Link>

        <br></br><br></br>
      </div>

      <button      
      disabled={loading}
      type="submit">
      {/*Login*/}
      {loading ? "Waiting..." : "Login"}
      </button>

      <div className="register-link">
      <br></br>
        <p>Dont have an account?</p>

        <Link className="text-gray-500" to="/register">
          Go to register
        </Link>

        {/* <a href="#">go to register</a>*/}
        </div>
        {/*{error && <p>{error}</p>}*/}
      </form>
    </div>
    </div>
  )
}

export default Login