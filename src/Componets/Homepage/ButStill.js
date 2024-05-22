import React from "react";
import data from "../Content/Homepage/ButStill.json";

import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

function ButStill() {
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
    <div ref={ref} className=" bg-[#FAFAFA] py-5 px-6 ">
      <h2 className="text-center text-4xl font-semibold mb-20">
        {data.Heading}
      </h2>
      <div className="grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center items-center  gap-5">
        {data?.list.map((d, i) => (
          <Fade bottom when={visible}>
            <div key={i} className="grid place-items-center group border-2 border-[#FAFAFA] hover:shadow-black/15 bg-white hover:bg-white rounded-lg hover:shadow-md  gap-5 py-8   duration-300">
              <Fade bottom delay={d.time} when={visible}>
                <img src={d.BannerImg} alt="" className="h-24 w-24 " />
                <h2 className="group-hover:text-orange-400 text-center  duration-300">
                  {d.title}
                </h2>
              </Fade>
            </div>
          </Fade>
        ))}
      </div>

      <div className="self-end mt-10">
        <p className="text-center  font-semibold">
          {data.heading} <span className="text-red-500">{data.strong}</span>
        </p>
      </div>
    </div>
  );
}

export default ButStill;
