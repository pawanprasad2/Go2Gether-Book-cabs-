import { useState, useContext } from "react";
import UserContext, { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState({});
  const [error, setError] = useState(""); // <-- Add this line
  const { user, setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (err) {
      setError("Invalid email or password."); // <-- Set error message
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="user-log h-screen w-full  bg-[#ececec] flex flex-col  ">
        <div className=" flex w-1/8 p-4 rounded-xl mt-7 ml-4  bg-white ">
          <Link to="/">
            {" "}
            <SlArrowLeft size={"12px"} color="black" />
          </Link>
        </div>
        <div className=" mt-5 ml-3 p-2  ">
          <h1 className="text-2xl font-semibold mb-1  ">Log in</h1>
          <p className="text-[12px] text-gray-500 flex">
            By logging in, you agree to our{" "}
            <span className="ml-1 font-bold text-black text-[12px] ">
              Terms of Use.
            </span>
          </p>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

            <h3 className="text-gray-500 text-[12px] mt-6 ">Email </h3>
            <input
              className="mt-2 border border-white p-3 text-[14px] font-semibold w-full bg-white rounded-xl"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Your email"
            />
            <h3 className="mt-4 text-gray-500 text-[12px] ">Password</h3>
            <input
              className="mt-2 border border-white p-3 text-[14px] font-semibold w-full bg-white rounded-xl "
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
            />
            <button className="mt-4 w-full font-semibold border-white p-3 rounded-xl bg-[#f26519]  text-[#ffcb9f] ">
              Log in
            </button>
          </form>
          <p className=" mt-2 text-center text-gray-500 text-[14px]">
            {" "}
            New here?
            <Link
              className="  text-blue-600 text-[14px]   font-semibold"
              to="/signup"
            >
              {" "}
              Create an Account
            </Link>
          </p>
        </div>
        <div className="flex items-center mt-5 my-2 mx-6">
          <div className="flex-grow h-px bg-black"></div>
          <span className="mx-3 text-gray-500 font-semibold text-sm">or</span>
          <div className="flex-grow h-px bg-black"></div>
        </div>
        <div className=" flex justify-center mt-auto mb-5 ml-4 mr-2 ">
          <Link
            to="/captain-login"
            className="mt-4 flex justify-center items-center  w-full font-semibold border-white p-3 rounded-xl bg-[#14b8a6]  text-white "
          >
            Sign in as Captain
            <FaUserTie className="ml-1 text-white  text-xl" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserLogin;

//#fe742a  home color
// #ffcb9f  text

//#ececec
