import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
function BreadCrumb(props) {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="lg:px-16 lg:h-[37vh] w-full px-3 py-2  lg:flex gap-10  justify-between lg:items-center"
    >
      <div className="lg:w-1/2">
        <Fade bottom delay={50} when={visible}>
          <div className="flex  space-x-1 ">
            <Link className="flex items-center  text-white/75 text-xs md:text-[17px] font-poppins">
              <h2>{props.title}</h2>
              <p className="p-0.5">{props.icon}</p>
              <h3 className="text-xs mt-0.5" >{props.heading}</h3>
            </Link>
          </div>
        </Fade>
        <div>
          <Fade bottom delay={100} when={visible}>
            <h2 className="py-2 lg:text-5xl text-3xl mt-5 font-semibold text-white">
              {props.description}
            </h2>
          </Fade>
          {props.contact && (
            <Fade bottom delay={150} when={visible}>
              <p className="text-white py-1 tracking-wide">
                {props.description2}
              </p>
            </Fade>
          )}
        </div>
      </div>
      <div className="">
        {props.showInput && (
          <Fade bottom delay={200} when={visible}>
            <div className="grid place-items-center w-[26vw]">
              <input
                type="text"
                placeholder="Rechercher et taper entrer…"
                className="text-start py-4 px-2 rounded-full w-full"
              />
            </div>
          </Fade>
        )}
      </div>

      {props.contact && (
        <div className="sm:flex lg:justify-between justify-start md:py-0 py-3 mt-5 space-y-6 sm:space-y-0 lg:mt-0 lg:w-1/2 ">
          <Fade bottom delay={150} when={visible}>
            <div className="text-white flex lg:justify-center items-center  p-2 gap-3 sm:w-1/2">
              <Fade bottom delay={50} when={visible}>
                <div className="rounded-full bg-[#ff7256] ">
                  <FaHome className="text-5xl p-3 " />
                </div>
              </Fade>
              <div>
                <Fade bottom delay={75} when={visible}>
                  <h1>{props.title1}</h1>
                </Fade>
                <Fade bottom delay={100} when={visible}>
                  <p>{props.desc1}</p>
                </Fade>
              </div>
            </div>
          </Fade>
          <Fade bottom delay={250} when={visible}>
            <div className="text-white flex sm:justify-center items-center p-2 gap-3">
              <Fade bottom delay={100} when={visible}>
                <div className="rounded-full bg-[#ff7256] ">
                  <MdEmail className="text-5xl p-3 " />
                </div>
              </Fade>
              <div>
                <Fade bottom delay={150} when={visible}>
                  <h1 className="mb-2 tracking-wide font-semibold">
                    {props.title2}
                  </h1>
                </Fade>
                <Fade bottom delay={200} when={visible}>
                  <p className="tracking-wide">{props.desc2}</p>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
}

export default BreadCrumb;
