import React from "react";
import review1 from "../assets/reviews/Ellipse 7.svg";
import review2 from "../assets/reviews/Ellipse 8.svg";
import review3 from "../assets/reviews/Ellipse 9.svg";
import review4 from "../assets/reviews/Ellipse 10.svg";
import review5 from "../assets/reviews/Ellipse 11.svg";
import review6 from "../assets/reviews/Ellipse 12.svg";
import jane from '../assets/jane_cooper.svg'
import fivestar from '../assets/Star 5.svg'

const AboutUs = () => {
  return (
    <section className="px-10 md:px-28 py-20 bg-hero_bg flex flex-col md:flex-row items-center grid-cols-2 gap-20">
      <div>
        <h1 className="capitalize text-[48px] font-bold text-[#2e2e2e] text-center md:text-left">
          What <span className="text-blue">our member's</span> <br />
          saying about us
        </h1>
        <p className="text-[#163048] text-[16px] my-6 text-center md:text-left">
          {" "}
          Team of expert specialists dedicated to providing personalized, <br />
          comprehensive care across a range of health and wellness services,<br />
          ensuring your well-being is our top priority.
        </p>
        <div className="flex flex-col md:flex-row items-center my-10">
          <div className="flex">
            <img src={review1} alt="" className=" absolute left-28" />
            <img src={review2} alt="" className=" absolute left-36" />
            <img src={review3} alt="" className=" absolute left-44" />
            <img src={review4} alt="" className=" absolute left-52" />
            <img src={review5} alt="" className=" absolute left-60" />
            <img
              src={review6}
              alt=""
              className=" absolute left-[272px]"
            />
          </div>
          <p className=" z-10  lg:absolute lg:left-[350px] text-[16px] font-semibold text-[#2E2E2E]">100+ Reviews</p>
        </div>
      </div>

      <div >
        <div className="bg-white p-10 rounded-2xl border-[1px] border-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-28">
                <div className="flex items-start gap-5">
                    <img src={jane} alt="" />
                    <div>
                        <h1 className="text-[16px] text-[#2e2e2e] font-semibold">Jane Cooper</h1>
                        <p>12/4/17</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={fivestar} alt="" />
                    <img src={fivestar} alt="" />
                    <img src={fivestar} alt="" />
                    <img src={fivestar} alt="" />
                    <img src={fivestar} alt="" />
                </div>
            </div>
            <p className="text-[#163048] text-[16px] my-6 text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit <br /> viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor <br /> sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
