import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function ContactSeller({ ad }) {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();

  const loggedIn = auth.user !== null && auth.token !== "";

  useEffect(() => {
    if (loggedIn) {
      setName(auth.user?.name);
      setEmail(auth.user?.email);
      setPhone(auth.user?.phone);
    }
  }, [loggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loggedIn) {
      toast.error("You must be logged in to contact the seller");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("/contact-seller", {
        name,
        email,
        message,
        phone,
        adId: ad._id,
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        setLoading(false);
        toast.success("Your enquiry has been emailed to the seller");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h3 className="text-xl">
          Contact {ad?.postedBy?.name ? ad?.postedBy?.name : ad?.postedBy?.username}
        </h3>
        <br></br>
        <form onSubmit={handleSubmit}>
          <textarea
            name="message"
            className="form-control mb-3"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoFocus={true}
            disabled={!loggedIn}
          ></textarea>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!loggedIn}
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!loggedIn}
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!loggedIn}
          />

          {loggedIn ? (
            <button
              className="btn btn-primary mt-4 mb-5"
              type="submit"
              disabled={!name || !email || loading}
            >
              {loading ? "Please wait" : "Send enquiry"}
            </button>
          ) : (
            <button
              className="btn btn-primary mt-4 mb-5"
              type="button"
              onClick={handleLoginRedirect}
              style={{ cursor: 'pointer' }}
            >
              Login to send enquiry
            </button>
          )}
        </form>
      </div>
    </div>
  );
}




{/*import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function ContactSeller({ ad }) {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  // hooks
  const navigate = useNavigate();

  const loggedIn = auth.user !== null && auth.token !== "";

  useEffect(() => {
    if (loggedIn) {
      setName(auth.user?.name);
      setEmail(auth.user?.email);
      setPhone(auth.user?.phone);
    }
  }, [loggedIn]);

  const handleSubmit = async (e) => {
    console.log("Event:", e);
    console.log("handleSubmit called");
    e.preventDefault();
    if (!loggedIn) {
      //toast.error("You must be logged in to contact the seller");
      console.log("redirect to login page");
      navigate("/login"); // Redirect to login page
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("/contact-seller", {
        name,
        email,
        message,
        phone,
        adId: ad._id,
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        setLoading(false);
        toast.success("Your enquiry has been emailed to the seller");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h3 className="text-xl">
            Contact{" "}
            {ad?.postedBy?.name ? ad?.postedBy?.name : ad?.postedBy?.username}
          </h3>
          <br></br>
          <form onSubmit={handleSubmit}>
            <textarea
              name="message"
              className="form-control mb-3"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus={true}
              disabled={!loggedIn}
            ></textarea>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!loggedIn}
            />

            <button
              className="btn btn-primary mt-4 mb-5"
              disabled={!name || !email || loading || !loggedIn}
            >
              {loggedIn
                ? loading
                  ? "Please wait"
                  : "Send enquiry"
                  : "Login to send enquiry"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
} */}














{/*import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function ContactSeller({ ad }) {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  // hooks
  const navigate = useNavigate();

  const loggedIn = auth.user !== null && auth.token !== "";

  useEffect(() => {
    if (loggedIn) {
      setName(auth.user?.name);
      setEmail(auth.user?.email);
      setPhone(auth.user?.phone);
    }
  }, [loggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/contact-seller", {
        name,
        email,
        message,
        phone,
        adId: ad._id,
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        setLoading(false);
        toast.success("Your enquiry has been emailed to the seller");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h3 className="text-xl">
            Contact{" "}
            {ad?.postedBy?.name ? ad?.postedBy?.name : ad?.postedBy?.username}
          </h3>
          <br></br>
          <form onSubmit={handleSubmit}>
            <textarea
              name="message"
              className="form-control mb-3"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus={true}
              disabled={!loggedIn}
            ></textarea>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!loggedIn}
            />

            <button
              className="btn btn-primary mt-4 mb-5"
              disabled={!name || !email || loading}
            >
              {loggedIn
                ? loading
                  ? "Please wait"
                  : "Send enquiry"
                : "Login to send enquiry"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
} */}