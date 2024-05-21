import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../Componets/Content/About.json";
import Bgimg from "../Images/bg.svg";
import { IoIosArrowRoundForward } from "react-icons/io";

import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

function AboutUS() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    appendDots: (dots) => (
      <div className="">
        <Fade bottom delay={300} when={visible}>
          <ul className="flex justify-center ">
            <div className="flex justify-between ">
              <span className="">{dots}</span>
            </div>
          </ul>
        </Fade>
      </div>
    ),
    customPaging: (i) => (
      <div className=" mt-3">
        <div className="h-1 bg-black/30  duration-500 active-class  rounded-md"></div>
      </div>
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className=" 2xl:px-[200px] sm:px-[70px] px-[30px] py-16    h-[85vh] place-content-center   "
      style={{
        backgroundImage: `url(${Bgimg})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Slider {...settings}>
        {data &&
          data?.list.map((d, i) => (
            <div key={i} className=" h-full xl:px-44  md:space-y-10 space-y-5">
              <div className="flex justify-center place-content-baseline">
                <Fade bottom delay={50} when={visible}>
                  <button className="text-md  border p-2 rounded-md text-white bg-orange-500">
                    {d.topbutton}
                  </button>
                </Fade>
              </div>
              <div className="place-content-center">
                <Fade bottom delay={100} when={visible}>
                  <p className="md:text-5xl  text-xl text-center  font-bold ">
                    {d.title}
                  </p>
                </Fade>
              </div>
              <div>
                <Fade bottom delay={150} when={visible}>
                  <p className="text-sm  leading-5  text-md tracking-wider text-center">
                    {d.description}
                  </p>
                </Fade>
              </div>

              <div className="flex justify-center place-content-baseline">
                <Fade bottom delay={200} when={visible}>
                  <button
                    className="text-md flex items-center
                 border p-3 rounded-full text-white bg-orange-500"
                  >
                    {d.bottambutton}
                    <p>
                      <IoIosArrowRoundForward />
                    </p>
                  </button>
                </Fade>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default AboutUS;
