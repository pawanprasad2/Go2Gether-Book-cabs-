import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import {CaptainDataContext} from '../context/CaptainContext'
import axios from "axios";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {captain, setCaptain} = React.useContext(CaptainDataContext)
  const navigate =useNavigate()


  const submitHandler =  async(e) => {
    e.preventDefault();
   const captain ={
    email,
    password
   }
   const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)

   if(response.status===200){
    const data = response.data

    setCaptain(data.captain)
    localStorage.setItem('token',data.token)
    navigate('/captain-home')
   }
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="user-log h-screen w-full  bg-[#ececec] flex flex-col  ">
        <div className=" flex w-1/8 p-4 rounded-xl mt-7 ml-4  bg-white ">
          <Link to="/login">
            {" "}
            <SlArrowLeft size={"12px"} color="black" />
          </Link>
        </div>
        <div className=" mt-5 ml-3 p-2  ">
          <h1 className="text-2xl font-semibold mb-1  "> Captain Log in</h1>
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
            <button className="mt-4 w-full font-semibold border-white p-3 rounded-xl bg-[#14b8a6]  text-[#fff] ">
              Log in
            </button>
          </form>
          <p className=" mt-2 text-center text-gray-500 text-[14px]">
            {" "}
            Wanna join a fleet?
            <Link
              className="  text-blue-600 text-[14px]   font-semibold"
              to="/captain-signup"
            >
              {" "}
              Register as a Captain
            </Link>
          </p>
        </div>
       
      </div>
    </>
  );
}

export default CaptainLogin;
