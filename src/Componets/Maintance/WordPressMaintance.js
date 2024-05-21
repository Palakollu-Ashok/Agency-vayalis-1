import React, { useEffect, useState } from "react";
import data from "../Content/Maintance/WordPressMaintance.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

function WordPressMaintance() {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="grid gap-10 py-10 justify-center place-items-center px-6"
    >
      <div className="grid   2xl:w-[70vw] lg:w-[85vw] w-fit lg:gap-10 gap-4 md:px-4 ">
        <div className="py-2">
          <Fade bottom delay={50} when={visible}>
            <p className="tracking-wider leading-7">{data.description}</p>
          </Fade>
        </div>
        <div className="py-2">
          <Fade bottom delay={100} when={visible}>
            <h2 className="lg:text-3xl sm:text-xl text-lg lg:font-semibold font-bold tracking-wide ">
              {data.title}
            </h2>
          </Fade>
        </div>

        {data &&
          data?.list.map((d, i) => (
            <Fade key={i} bottom delay={d.time} when={visible}>
              <div className=" ">
                <p className=" tracking-wider w-full leading-7">
                  <strong>{d.subheading}</strong>
                  {d.description}
                </p>
              </div>
            </Fade>
          ))}
        <div>
          <strong className="tracking-wider">{data.bottom}</strong>
        </div>
      </div>
    </div>
  );
}

export default WordPressMaintance;
