import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import img1 from "../Images/1.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
function IntroSlider() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="grid justify-center ">
        <div className="m-20">
          <div className="grid justify-center gap-10">
            <h2
              className="text-5xl text-center font-bold"
              style={{
                fontFamily: "Playfair Display, Times, New Roman, serif",
              }}
            >
              Make your home unique
            </h2>
            <p className="text-lg tracking-wide text-center">
              Look at current trends and furnish your home in harmony with your
              tastes
            </p>
          </div>
        </div>
      </div>
      <div className="slider-container  lg:relative">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1} className="lg:relative  sm:px-10 px-3">
            <div className="grid justify-center sm:px-10 px-3">
              <img
                src={img1}
                alt=" 1"
                className="w-full   lg:h-[100vh]"
              />
            </div>
            <div className="w-full p-3 lg:absolute inset-20  grid  items-end justify-start sm:px-10 px-3   ">
              <h3
                className=" lg:text-6xl text-3xl font-semibold lg:text-white "
                style={{
                  fontFamily: "Playfair Display, Times, New Roman, serif",
                }}
              >
                Miko
              </h3>
            </div>
          </div>
          <div key={2} className="lg:relative ">
            <img
              src={img3}
              alt="1"
              className="lg:w-full w-[70vw] lg:h-[100vh] "
            />
            <div className="w-full p-3 lg:absolute inset-20  grid  items-end justify-start   ">
              <h3
                className=" text-6xl font-semibold lg:text-white"
                style={{
                  fontFamily: "Playfair Display, Times, New Roman, serif",
                }}
              >
                Lumina
              </h3>
            </div>
          </div>

          <div key={4} className="lg:relative  ">
            <img src={img4} alt="Slide 1" className="w-full h-[100vh]" />
            <div className="w-full p-3 lg:absolute inset-20  grid  items-end justify-start  text-6xl lg:text-white">
              <h3
                className="font-semibold"
                style={{
                  fontFamily: "Playfair Display, Times, New Roman, serif",
                }}
              >
                Libra
              </h3>
            </div>
          </div>
        </Slider>
        <div
          style={{ textAlign: "center" }}
          className="lg:absolute  inset-10 px-10 in gap-10 flex  items-end lg:justify-end justify-center"
        >
          <button className="button" onClick={previous}>
            <IoIosArrowRoundBack className="text-6xl lg:text-white" />
          </button>
          <button className="button" onClick={next}>
            <IoIosArrowRoundForward className="text-6xl lg:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroSlider;
