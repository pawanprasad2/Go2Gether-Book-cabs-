import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../component/LocationSearchPanel";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState();
  const [panelOpen, SetPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefualt();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-19 absolute top-2 left-5"
          src="../public/assets/GOlogo.png"
          alt=""
        />
        <div className="h-screen w-screen">
          <img
            className="h-full w-full object-cover"
            src="../public/assets/tempimg.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
          <div className="h-[30%] p-6 bg-white relative">
            <h5
              ref={panelCloseRef}
              onClick={() => SetPanelOpen(false)}
              className=" opacity-0 absolute right-6 top-6 text-2xl"
            >
              <i className="ri-arrow-down-wide-line "></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="line absolute  h-16 w-1 top-[46%] left-10 bg-gray-700 rounded-full "></div>
              <input
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
                type="text"
                value={pickup}
                onClick={() => {
                  SetPanelOpen(true);
                }}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
                placeholder="Add a pick-up location"
              />
              <input
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
                type="text"
                value={destination}
                onClick={() => {
                  SetPanelOpen(true);
                }}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                placeholder="Enter your destination"
              />
            </form>
          </div>
          <div ref={panelRef} className="bg-white">
            <LocationSearchPanel />
          </div>
        </div>
        <div className="fixed w-full z-10 bottom-0  bg-white px-3 py-8">
          <h3 className="text-2xl font-semibold mb-5 ">Choose a Vehicle</h3>
          <div className="flex  border-2 border-black  mb-2 rounded-xl w-full p-3 items-center  justify-between">
            <img
              className="h-10"
              src="https://th.bing.com/th/id/OIP.90_IXyFPb47LZ_AYAe1ylAHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="car"
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">
                {" "}
                Sedan{" "}
                <span>
                  {" "}
                  <i className="ri-user-3-fill"></i>4
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 min away </h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable,compact rides{" "}
              </p>
            </div>
            <h2 className="text-1g font-semibold">193.28</h2>
          </div>
          <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center  justify-between">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt="car"
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">
                Moto
                <span>
                  
                  <i className="ri-user-3-fill"></i>2
                </span>
              </h4>
              <h5 className="font-medium text-sm">1 min away </h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable,MotoCycle rides
              </p>
            </div>
            <h2 className="text-1g font-semibold">65.25</h2>
          </div>
          <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center  justify-between">
            <img
              className="h-10"
              src="https://th.bing.com/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?rs=1&pid=ImgDetMain"
              alt="car"
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">
                Auto
                <span>
                  <i className="ri-user-3-fill"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm">4 min away </h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable Auto rides
              </p>
            </div>
            <h2 className="text-1g font-semibold">116.18</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
