import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import location_icon from "../assets/location.svg";
import user_icon from "../assets/user.svg";
import { abouts } from "../assets/constant";
import doctor_img from '../assets/doc_img.svg'
import underline from '../assets/underline.svg'

const Herosection = () => {
  return (
    <section className="bg-hero_bg pt-12 md:pt-20  ">
      <div className="flex flex-col lg:flex-row items-center px-10 md:px-28">
        <div className="">
          <h1 className="text-darkgray text-[40px] md:text-[64px]  font-bold text-left capitalize leading-snug">
            Find & Search Your <br /> <span className="text-blue">favourite</span> doctor
          </h1>
          {/* <img src={underline} alt="" className="w-40 absolute bottom-[345px] md:bottom-[220px] md:w-72"/> */}
          <p className="my-7 font-normal text-xl">
            Discover and Connect with the Right Healthcare Expert: <br /> Find &
            Search Your Favorite Doctor for Personalized Care
          </p>

          <div className="flex flex-col md:flex-row gap-20 items-center my-10 justify-between px-6 py-3 bg-white rounded-2xl md:rounded-full">
            <div className="flex items-center justify-center">
              <img src={user_icon} alt="" className="mr-3" />
              <h5 className="capitalize mr-3 text-[16px]">doctor's name</h5>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <img src={location_icon} alt="" className="mr-3" />
              <h5 className="capitalize mr-3 text-[16px] ">location</h5>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <span className="bg-blue rounded-full p-3 text-white">
              <IoSearch />
            </span>
          </div>
        </div>
        <div>
          <div className="bg-lightblue hidden lg:block w-[600px] lg:h-[300px] absolute bottom-[37px] right-0 rounded-t-full"></div>
        </div>
      </div>

      <div className="bg-blue px-28 py-6 flex flex-col md:flex-row ">
        <div className="flex flex-col lg:flex-row items-center">
          {abouts.map((about, index) => (
            <div key={index} className=" flex items-center">
              <div className="">
                <h1 className="text-[40px] md:text-[64px] font-bold text-white">
                  {about.count}
                </h1>
                <p className="text-white text-center text-[16px] -mt-3 font-light">
                  {about.facility}
                </p>
              </div>
              {/* Only render the line if it's not the last item */}
              {index < abouts.length - 1 && (
                <div className="hidden md:block md:h-16 w-px md:mx-10 bg-white"></div>
              )}
            </div>
          ))}
        </div>
        <div className="">
            <img src={doctor_img} alt="" className=" lg:absolute lg:w-[700px] lg:-bottom-[120px] lg:left-[600px]"/>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
