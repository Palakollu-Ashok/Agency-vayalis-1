import React, { useRef } from "react";
import data from "../Content/Homepage/Slider.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
import { HiArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

function SliderHome() {
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
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div ref={ref} className="py-10">
      <Fade when={visible}>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {data?.list.map((d, i) => (
            <div className="h-full">
              <div className="md:relative md:z-50">
                <div className="md:flex items-center md:h-[65vh]">
                  <div className="mt-16 md:relative md:w-1/2 flex items-center bg-pink-100  px-5 h-full md:left-0">
                    <div className=" py-10 lg:py-0">
                      <h2 className="text-5xl font-bold py-2">{d.heading}</h2>
                      <p className="text-lg  tracking-wide py-2">
                        {d.description}
                      </p>
                      <p className="bg-[#FF7256] w-fit px-7 text-white font-semibold py-3 rounded-full">
                        {d.icon}
                      </p>
                    </div>

                    <div className=" md:absolute  md:bottom-0 hidden md:block ">
                      <Fade bottom delay={150} when={visible} key={i}>
                        <button
                          className="button hover:bg-black bg-[#FF7256] p-2"
                          onClick={previous}
                        >
                          <HiOutlineArrowSmLeft className="text-3xl text-white" />
                        </button>
                        <button
                          className="button hover:bg-black bg-[#FF7256] p-2"
                          onClick={next}
                        >
                          <HiArrowSmRight className="text-3xl text-white" />
                        </button>
                      </Fade>
                    </div>
                  </div>

                  <div className="md:absolute relative md:w-1/2 md:right-0 h-full md:shadow-2xl md:scale-125 md:z-50">
                    <Fade delay={50} when={visible} key={i}>
                      <img src={d.BannerImg} alt="" className="w-full h-full" />
                    </Fade>
                    <div className="px-5 absolute bottom-0  left-0 md:hidden">
                      <Fade bottom delay={150} when={visible} key={i}>
                        <button
                          className="button hover:bg-black group bg-[#FF7256] p-2"
                          onClick={previous}
                        >
                          <HiOutlineArrowSmLeft className="text-3xl text-white" />
                        </button>
                        <button
                          className="button hover:bg-black bg-[#FF7256] p-2"
                          onClick={next}
                        >
                          <HiArrowSmRight className="text-3xl text-white" />
                        </button>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-6 md:mt-8 md:flex md:justify-center py-2   bg-[#ff7256]  h-full md:h-[35vh] ">
                <div className="md:flex items-center  justify-between md:space-y-0 space-y-4  w-full text-white">
                  <div>
                    <Fade bottom delay={100} when={visible} key={i}>
                      <h3 className="md:text-xl text-lg ">
                        DESIGN YOUR VISION, TOGETHER!
                      </h3>
                    </Fade>

                    <Fade bottom delay={150} when={visible} key={i}>
                      <p className="md:text-sm text-xs mt-4">
                        Let's turn your bold ideas into impressive realities.
                        Contact us today to begin this journey to innovation and
                        excellence.
                      </p>
                    </Fade>
                  </div>
                  <div className="lg:mt-0 py-3 grid md:place-items-end md:w-1/2">
                    <Fade bottom delay={200} when={visible} key={i}>
                      <Link className="bg-white text-[#ff7256] font-semibold px-7 py-3 w-fit h-full rounded-full">
                        Start a project!
                      </Link>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
}

export default SliderHome;

{
  /* <div className="lg:flex grid w-full md:h-[65vh] md:relative md:z-50">
  <div className=" md:px-12 px-4 pt-8 md:w-1/2 mt-5 grid items-center bg-[#FFEBEB] md:left-0">
    <div className="space-y-5 md:pb-0 pb-10">
      <h1 className="md:text-5xl text-3xl text-bold hover:text-[#EC6A50]">
        {value.title}
      </h1>
      <h2 className="md:text-2xl text-lg">{value.subTitle}</h2>
      <div className="bg-[#EC6A50] text-white md:px-4 px-2 md:py-2 py-1 rounded-3xl  w-fit">
        <button className="flex items-center gap-5 ">
          {value.button} <FaGreaterThan />
        </button>
      </div>
    </div>
    <div className="self-end ">
      <div className="md:block hidden ">
        <div>
          <button
            className="bg-[#EC6A50] text white p-4 hover:bg-blue-900 hover:text-white"
            onClick={previous}
          >
            <HiOutlineArrowSmallLeft />
          </button>
          <button
            className="bg-[#EC6A50] text white p-4 hover:bg-blue-900 hover:text-white"
            onClick={next}
          >
            <HiOutlineArrowSmallRight />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="md:absolute relative md:right-0 md:w-1/2 md:z-50 ">
    <img src={value.img} alt="img" className="md:h-[70vh] w-full" />
  </div>
</div>; */
}
