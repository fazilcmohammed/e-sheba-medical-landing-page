import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import map from "../assets/map.svg";

const Footer = () => {
  return (
    <footer className="px-28 py-20 bg-blue">
      <div className="grid grid-cols-3 gap-20">
        <div>
          <h2 className="text-2xl text-white font-semibold">E-sheba</h2>
          <p className="text-[16px] font-normal text-white my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
            Nibh est sit lobortis id semper.
          </p>
          <div className="flex text-white">
            <FaFacebook className="text-2xl mr-3" />
            <RiInstagramFill className="text-2xl mr-3" />
            <FaTwitter className="text-2xl mr-3" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Useful Links</h2>
          <ul className="my-6">
            <li className="text-[16px] text-white font-medium">About Us</li>
            <li className="text-[16px] text-white font-medium">
              Privacy Policy
            </li>
            <li className="text-[16px] text-white font-medium">Our Mission</li>
            <li className="text-[16px] text-white font-medium">Our Team</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Address</h2>
          <img src={map} alt="" className="my-6"/>
        </div>
      </div>
      <hr className="mt-20"/>
      <p className="text-[16px] text-white font-normal text-center mt-6">©2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
