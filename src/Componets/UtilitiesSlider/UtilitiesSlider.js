import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import Img from "../Images/SliderNew.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UtilitiesSlider() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
  };

  return (
    <div className="flex  py-10 space-x-4">
      <div className="mt-10">
        <p
          className="text-5xl rotate-90  font-bold"
          style={{ fontFamily: "Playfair Display, Times, New Roman, serif" }}
        >
          Utilities
        </p>
      </div>

      <div className="slider-container flex lg:flex-row flex-col  lg:px-3 lg:space-x-6 w-full">
        <div className="lg:hidden w-full mb-6">
          <img src={Img} alt="Slider" className="w-full lg:h-[75vh] h-[80vh]" />
        </div>
        <div className=" lg:w-1/2   flex">
          <div className="flex flex-col justify-center items-center mr-6">
            <button className="button mb-4" onClick={previous}>
              <IoIosArrowRoundUp className="text-6xl" />
            </button>
            <button className="button mt-4" onClick={next}>
              <IoIosArrowRoundDown className="text-6xl" />
            </button>
          </div>
          <div className="lg:w-3/4">
            <Slider ref={sliderRef} {...settings}>
              <div key={1} className="py-10 border-t border-gray-300">
                <h3
                  className="text-black text-3xl font-bold"
                  style={{
                    fontFamily: "Playfair Display, Times, New Roman, serif",
                  }}
                >
                  Retailers
                </h3>
                <p className="text-red-700 font-semibold w-fit border-b-2 border-red-700">
                  Book appointment Retailers Book appointment
                </p>
              </div>
              <div key={2} className="py-10 border-t border-gray-300">
                <h3
                  className="text-black text-3xl font-bold"
                  style={{
                    fontFamily: "Playfair Display, Times, New Roman, serif",
                  }}
                >
                  Product registration
                </h3>
                <p className="text-red-700 font-semibold w-fit border-b-2 border-red-700">
                  Register your purchase
                </p>
              </div>
              <div key={3} className="py-10 border-t border-gray-300">
                <h3
                  className="text-black text-3xl font-bold"
                  style={{
                    fontFamily: "Playfair Display, Times, New Roman, serif",
                  }}
                >
                  Newsletter subscription
                </h3>
                <p className="text-red-700 font-semibold w-fit border-b-2 border-red-700">
                  Stay updated on news
                </p>
              </div>
              <div key={4} className="py-10 border-t border-gray-300">
                <h3
                  className="text-black text-3xl font-bold"
                  style={{
                    fontFamily: "Playfair Display, Times, New Roman, serif",
                  }}
                >
                  Scavolini catalogues
                </h3>
                <p className="text-red-700 font-semibold w-fit border-b-2 border-red-700">
                  Download the catalogs of your interest
                </p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3 w-full">
          <img src={Img} alt="Slider" className="w-full lg:h-[75vh] h-[80vh]" />
        </div>
      </div>
    </div>
  );
}

export default UtilitiesSlider;
