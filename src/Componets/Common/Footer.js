import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import banner from "../Images/bannericon.svg";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="md:px-10 px-2  bg-[#332D42] grid     lg:h-[30vh]  ">
      <div className="lg:flex  grid  place-items-center justify-center text-white lg:justify-between    ">
        <div className="">
          <div className="flex md:gap-8 gap-3  ">
            <div className=" w-full">
              <Link
                to="/"
                className="p-2 flex justify-center items-center gap-3 ju w-fit text-xl font-semibold text-white/80"
              >
                <img src={banner} alt="" className="w-10 h-10" />
                <h3 className="text-2xl">VAYALIS</h3>
              </Link>
            </div>

            <div className="flex  items-center lg:justify-between gap-2  ">
              <Link to="" className="border bg-[#515366] rounded-full p-2">
                <BiLogoLinkedin className="rounded-full text-white/90  w-4 h-4 " />
              </Link>
              <Link to="" className="border rounded-full bg-[#515366] p-2">
                <FaFacebookF className="rounded-full text-white/90  w-4 h-4 " />
              </Link>
              <Link to="" className="border rounded-full bg-[#515366] p-2">
                <BsTwitterX className="rounded-full text-white/90 w-4 h-4 " />
              </Link>
            </div>
          </div>
          <p className="mt-3 text-sm  text-center">
            78 Avenue Des Champs-Élysées, 75008 Paris
          </p>
        </div>

        <div className="">
          <div className="flex gap-3 lg:py-0 py-3 w-full font-semibold flex-wrap justify-center lg:justify-between">
            <Link
              to="/Site-Creation-Page"
              className="py-2 hover:text-[#ff7256]"
            >
              {" "}
              Site Creation
            </Link>
            <Link to="/Word-Press-Maintance" className="py-2  hover:text-[#ff7256]">
              Maintenance
            </Link>
            <Link to="/Our-Wordpress-Achivments" className="py-2  hover:text-[#ff7256]">
              Our achievements
            </Link>
            <Link to="/Our-Web-Agency" className="py-2  hover:text-[#ff7256]">
              Our Web Agency
            </Link>
            <Link to="/Date-time" className="py-2 hover:text-[#ff7256]">
              Contact
            </Link>
          </div>

          <p className="lg:text-end text-center text-sm mt-3">
            Copyright: © 2024 Agence Vayalis All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
