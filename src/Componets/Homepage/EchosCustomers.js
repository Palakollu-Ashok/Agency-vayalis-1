import React, { useRef } from "react";
import Slider from "react-slick";

import { HiArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import data from "../Content/Homepage/EchosCustomers.json";
import { FaStar } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function EchosCustomers() {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div
      ref={ref}
      className="grid place-items-center lg:py-32 px-6 lg:mt-14 mt-10"
    >
      <div className="grid place-items-center ">
        <Fade bottom delay={100} when={visible}>
          <h3 className="text-sm text-[#ff7256] text-center">{data.heading}</h3>
        </Fade>
        <Fade bottom delay={150} when={visible}>
          <h2 className="md:text-5xl text-center text-3xl font-semibold mb-16">
            {data.title}
          </h2>
        </Fade>
      </div>
      <div className="grid justify-center ">
        <div className="slider-container xl:w-[50vw] w-[90vw]">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {data &&
              data?.list.map((d, i) => (
                <Fade bottom delay={200} when={visible}>
                  <div
                    key={i}
                    className="grid place-items-center justify-center space-y-3"
                  >
                    <p className="text-center md:text-sm text-xs tracking-wide text-black">
                      {d.decsription}
                    </p>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_) => (
                        <FaStar className="text-yellow-500" />
                      ))}
                    </div>
                    <h4 className="text-center font-bold">{d.name}</h4>
                    <h5 className="text-center text-[#FF7256]">{d.group}</h5>
                  </div>
                </Fade>
              ))}
          </Slider>
        </div>

        <div className="justify-center gap-20 flex">
          <button
            className="button rounded-full bg-[#FF7256] p-2"
            onClick={previous}
          >
            <HiOutlineArrowSmLeft className="text-3xl text-white" />
          </button>
          <button
            className="button rounded-full bg-[#FF7256] p-2"
            onClick={next}
          >
            <HiArrowSmRight className="text-3xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EchosCustomers;
