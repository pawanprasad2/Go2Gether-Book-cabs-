import React, { useState, useContext } from "react";
import { data, useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/UserContext";

function UserSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // <-- Add this line

  const navigate = useNavigate();

  const { user, setUser } = useContext(userDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );
      if (response.status === 200 || response.status === 201) {
        setUser(response.data.user);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
  localStorage.setItem('token',data.token)
        navigate("/home");
      } else {
        setError("Signup failed: unexpected response");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || error.message || "Signup failed"
      );
    }
  };

  return (
    <>
      <div className="user-log h-screen w-full  bg-[#ececec] flex flex-col  ">
        <div className=" flex w-1/8 p-4 rounded-xl mt-7 ml-4  bg-white ">
          <Link to="/login">
            <SlArrowLeft size={"12px"} color="black" />
          </Link>
        </div>
        <div className=" mt-5 ml-3 p-2  ">
          <h1 className="text-2xl font-semibold mb-1  ">Sign up</h1>
          {/* Show error message if exists */}
          {error && (
            <div className="mb-4 text-red-600 bg-red-100 p-2 rounded">
              {error}
            </div>
          )}
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-gray-500 text-[12px] mt-6 ">
              What's your Name{" "}
            </h3>
            <div className="flex gap-2">
              <input
                className="mt-2 border placeholder:text-[12px] border-white p-3 text-[14px] w-1/2 font-semibold  bg-white rounded-xl"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First name"
              />
              <input
                className="mt-2 border placeholder:text-[12px] border-white p-3 text-[14px] w-1/2 font-semibold  bg-white rounded-xl"
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="Last name"
              />
            </div>

            <h3 className="text-gray-500 text-[12px] mt-6 ">
              {" "}
              What's your Email{" "}
            </h3>
            <input
              className="mt-2 placeholder:text-[12px] border border-white p-3 text-[14px] font-semibold w-full bg-white rounded-xl"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Your email"
            />
            <h3 className="mt-4 text-gray-500 text-[12px] ">Enter Password</h3>
            <input
              className="mt-2 placeholder:text-[12px] border  border-white p-3 text-[14px] font-semibold w-full bg-white rounded-xl "
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
            />
            <button className="mt-4 w-full font-semibold border-white p-3 rounded-xl bg-[#f26519]  text-[#ffcb9f] ">
              Sign Up
            </button>
          </form>
          <p className=" mt-2 text-center text-gray-500 text-[14px]">
            {" "}
            Already have a Account?
            <Link
              className="  text-blue-600 text-[14px]   font-semibold"
              to="/login"
            >
              {" "}
              Login here
            </Link>
          </p>
        </div>
        <div className=" text-[10px]  leading-tight flex mt-auto">
          <p className=" text-gray-500 ml-3 mr-2 mb-3">
            By proceeding, you consent to get calls, whatsApp or sms messages,
            including by automated means, from Go2Gether and its affiliates to
            the number provided.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
