import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import banner from "../Images/bannericon.svg";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [navbar, setNavbar] = useState(false);
  const changBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changBackground);
  return (
    <div
      className={
        navbar
          ? "bg-white duration-500  sticky top-0 z-[999] xl:px-16"
          : " xl:px-16"
      }
    >
      <div className="flex justify-between items-center  w-full    h-24 z-[999]  text-white sticky top-0">
        <div className="grid lg:px-0 px-3 z-50 justify-center  w-fit  place-items-center">
          <Link
            to="/"
            className="p-2 flex justify-center items-center gap-3 ju w-fit text-xl font-semibold text-black/80  "
          >
            <img src={banner} alt="" className="w-10 h-10" />
            <h3 className="text-2xl">VAYALIS</h3>
          </Link>
        </div>
        <div className="">
          {/* Desktop nav */}
          <div className="">
            <ul className="hidden lg:flex justify-between gap-3 items-center text-black/80 ">
              <NavLink
                to="/Site-Creation-Page"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending   "
                    : isActive
                    ? "active text-[#ff7256]"
                    : ""
                }
              >
                <li className="p-4 text-center group    hover:text-[#ff7256]">
                  Site Creation
                  <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </NavLink>
              <NavLink
                to="/Word-Press-Maintance"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-[#ff7256]"
                    : ""
                }
              >
                <li className="p-4 text-center group  hover:text-[#ff7256]">
                  Maintenance
                  <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </NavLink>

              <NavLink
                to="/Our-Wordpress-Achivments"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-[#ff7256]"
                    : ""
                }
              >
                <li className="p-4  group text-center hover:text-[#ff7256]">
                  Our achievements
                  <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </NavLink>
              <NavLink
                to="/Our-Web-Agency"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active  text-[#ff7256]"
                    : ""
                }
              >
                <li className="p-4  group text-center hover:text-[#ff7256]">
                  Our Web Agency
                  <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </NavLink>
              <NavLink
                to="/Our-Blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending "
                    : isActive
                    ? "active text-[#ff7256]"
                    : ""
                }
              >
                <li className="p-4  group text-center hover:text-[#ff7256]">
                  Blog
                  <div class="bg-[#ff7256] h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                </li>
              </NavLink>
              {/* <NavLink to="/Intro-Slider">Intro Slider</NavLink>

              <NavLink to="/Utilities-Slider">Slider</NavLink> */}
              <li className=" flex    space-x-6">
                <NavLink
                  to="/Date-time"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-red-500"
                      : ""
                  }
                >
                  <p
                    className="bg-[#FF7256] text-black/80 h-fit rounded-full
                    px-5 py-3 text-white font-semibold"
                  >
                    To Start Up
                  </p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile nav */}

        <div
          className={
            nav
              ? "fixed top-0 grid place-items-center text-center h-full lg:hidden block   w-full  bg-gradient-to-b from-gray-800 to-red-100  bg-clip-padding backdrop-filter backdrop-blur-sm opacity-95   transition transform translate-y-0 ease-in-out duration-500"
              : "fixed top-0 text-center  lg:hidden block   h-full w-full  bg-gradient-to-b from-gray-800 to-red-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-95  transition transform -translate-y-full ease-in-out duration-500"
          }
        >
          <div className="grid justify-center place-items-center ">
            <div>
              <Link to="/Site-Creation-Page">
                <h2 className="p-4 hover:text-red-600  sm:text-3xl text-xl font-semibold  ">
                  Site Creation
                </h2>
              </Link>
              <Link to="/Word-Press-Maintance">
                <h2 className="p-4 hover:text-red-600  sm:text-3xl text-xl font-semibold  ">
                  Maintenance
                </h2>
              </Link>
              <Link to="/Our-Wordpress-Achivments">
                <h2 className="p-4 hover:text-red-600  sm:text-3xl text-xl font-semibold  ">
                  Our achievements{" "}
                </h2>
              </Link>
              <Link to="/Our-Web-Agency">
                {" "}
                <h2 className="p-4 hover:text-red-600  sm:text-3xl text-xl font-semibold  ">
                  Our Web Agency
                </h2>
              </Link>{" "}
              <Link to="/Our-Blog">
                <h2 className="p-4 hover:text-red-600  sm:text-3xl text-xl font-semibold  ">
                  Blog
                </h2>
              </Link>{" "}
              <Link to="/Date-time">
                <h2 className="p-4 hover:text-red-600  sm:text-3xl text-xl font-semibold  ">
                  To start up
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div
          onClick={handleNav}
          className="block lg:hidden z-50 px-3 text-black md:grid  lg:justify-center w-fit place-items-center "
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
