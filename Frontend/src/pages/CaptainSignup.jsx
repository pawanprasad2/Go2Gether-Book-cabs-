import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainSignup() {
  const navigate=useNavigate()
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const CaptainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle:{
       color: vehicleColor,
       plate: vehiclePlate,
       capacity: vehicleCapacity,
       vehicleType: vehicleType,
      }
    };
    const response=  await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,CaptainData)
    if(response.status===201){
        const data=response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate("/captain-home")
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setVehicleCapacity(''),
    setVehicleColor(''),
    setVehiclePlate(''),
    setVehicleType('')
  };

  return (
    <>
      <div className=" h-screen w-full  bg-[#ececec] flex flex-col  ">
        <div className=" flex w-1/8 p-4 rounded-xl mt-3 ml-4  bg-white ">
          <Link to="/captain-login">
            <SlArrowLeft size={"12px"} color="black" />
          </Link>
        </div>
        <div className=" mt-1 ml-3 p-2  ">
          <h1 className="text-2xl font-semibold mb-1  "> Captain Sign up</h1>
          <form onSubmit={submitHandler}>
            <h3 className="text-gray-500 text-[12px] mt-3  ">
              What's your Name{" "}
            </h3>
            <div className="flex gap-2">
              <input
                className="mt-3 border placeholder:text-[12px] border-white p-3 text-[14px] w-1/2 font-semibold  bg-white rounded-xl"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder="First name"
              />
              <input
                className="mt-3 border placeholder:text-[12px] border-white p-3 text-[14px] w-1/2 font-semibold  bg-white rounded-xl"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder="Last name"
              />
            </div>
            <h3 className="text-gray-500 text-[12px] mt-3 ">
              {" "}
              What's your Email{" "}
            </h3>
            <input
              className="mt-2 placeholder:text-[12px] border border-white p-3 text-[14px] font-semibold w-full bg-white rounded-xl"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
            />
            <h3 className="mt-2 text-gray-500 text-[12px] ">Enter Password</h3>
            <input
              className="mt-2 placeholder:text-[12px] border  border-white p-3 text-[14px] font-semibold w-full bg-white rounded-xl "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />

            <h3 className="mt-3 text-gray-500 text-[12px]">Vehicle Details</h3>
            <div className="flex gap-2 p-1">
              <input
                className="mt-1 border placeholder:text-[12px] border-white p-3 text-[14px] w-1/2 font-semibold bg-white rounded-xl"
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                type="text"
                placeholder="Vehicle Color"
              />
              <input
                className="mt-1 border placeholder:text-[12px] border-white p-3 text-[14px] w-1/2 font-semibold bg-white rounded-xl"
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                type="text"
                placeholder="Vehicle Plate"
              />
            </div>
            <div className="flex gap-2 p-1">
              <input
                className="mt-1 border placeholder:text-[12px] border-white p-3 text-[14px] w-1/2 font-semibold bg-white rounded-xl"
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                type="number"
                min="1"
                placeholder="Capacity"
              />
              <select
                className="mt-1 border placeholder:text-[12px] border-white p-3 text-[12px] w-1/2 font-semibold bg-white  rounded-xl"
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option className="bg-[#14b8a6] text-[15px] text-white" value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

            <button className="mt-2 w-full font-semibold border-white p-3 rounded-xl bg-[#14b8a6]  text-[#fff] ">
              Create Captain Account
            </button>
          </form>
          <p className=" mt-2 text-center text-gray-500 text-[14px]">
            {" "}
            Already have a Account?
            <Link
              className="  text-blue-600 text-[14px]   font-semibold"
              to="/captain-login"
            >
              {" "}
              Login here
            </Link>
          </p>
        </div>
        <div className=" text-[10px]  leading-tight flex mt-auto">
          <p className=" text-gray-500 text-[10px] leading-tight ml-3 mr-2 mb-3">
            *This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Policy</span> and{" "}
            <span className="underline">Terms and Service apply</span>.
          </p>
        </div>
      </div>
    </>
  );
}

export default CaptainSignup;
