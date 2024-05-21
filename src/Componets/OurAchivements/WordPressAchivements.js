import data from "../Content/OurAchivments/WordPressAchivements.json";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

function WordPressAchivements() {
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
    <div ref={ref} className="grid place-items-center py-10">
      <div className="xl:w-[65vw]">
        <div className="p-10">
          <Fade bottom delay={50} when={visible}>
            <h2 className="py-2 text-center text-[#FF7256]">{data.heading}</h2>
          </Fade>
          <Fade bottom delay={100} when={visible}>
            <h1 className="py-2 text-center text-3xl tracking-wider font-bold">
              {data.title}
            </h1>
          </Fade>
          <Fade bottom delay={150} when={visible}>
            <p
              className=" text-center text-[#001b3c] tracking-wide leading-7"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              {data.description}
            </p>
          </Fade>
        </div>
      </div>
      <div className="grid w-full xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-16 lg:px-9 px-3 mt-20">
        {data &&
          data?.list.map((d, i) => (
            <div key={i}>
              <Fade bottom delay={d.time} when={visible}>
                <div className="text-center grid place-items-center group">
                  <img
                    src={d.bannerImg}
                    alt=""
                    className="xl:w-[21vw] w-fit mb-8 shadow-xl shadow-slate-300 rounded-lg"
                  />
                  <div>
                    <Fade bottom delay={50} when={visible}>
                      <h3 className="mb-2 font-bold md:text-lg group-hover:text-[#FF7256]">
                        {d.title}
                      </h3>
                    </Fade>
                    <Fade bottom delay={75} when={visible}>
                      <p className="tracking-wide">{d.description}</p>
                    </Fade>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WordPressAchivements;
