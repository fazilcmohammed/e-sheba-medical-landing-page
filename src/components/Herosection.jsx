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
    <section className="bg-hero_bg pt-20  ">
      <div className="flex items-center px-28">
        <div>
          <h1 className="text-darkgray text-[64px] font-bold text-left capitalize leading-tight">
            Find & Search Your <br /> <span className="text-blue">favourite</span> doctor
          </h1>
          <img src={underline} alt="" />
          <p className="my-7 font-normal text-xl">
            Discover and Connect with the Right Healthcare Expert: <br /> Find &
            Search Your Favorite Doctor for Personalized Care
          </p>

          <div className="flex items-center my-10 justify-between px-6 py-3 bg-white rounded-full">
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
          <div className="bg-lightblue w-[600px] h-[300px] absolute bottom-[37px] right-0 rounded-t-full"></div>
        </div>
      </div>

      <div className="bg-blue px-28 flex">
        <div className="flex items-center">
          {abouts.map((about, index) => (
            <div key={index} className=" flex items-center">
              <div className="">
                <h1 className="text-[64px] font-bold text-white">
                  {about.count}
                </h1>
                <p className="text-white text-center text-[16px] font-light">
                  {about.facility}
                </p>
              </div>
              {/* Only render the line if it's not the last item */}
              {index < abouts.length - 1 && (
                <div className="h-16 w-px mx-10 bg-white"></div>
              )}
            </div>
          ))}
        </div>
        <div className="">
            <img src={doctor_img} alt="" className="absolute w-[700px] -bottom-[83px] left-[600px]"/>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
