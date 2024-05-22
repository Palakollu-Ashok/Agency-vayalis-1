import React from "react";
import data from "../Content/Homepage/ExpertGuidence.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function ExpertGuidence() {
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
    <div ref={ref} className="lg:flex space-y-10 lg:space-y-0 mt-36 gap-8 ">
      <div className="grid md:px-10 px-6  gap-10">
        <div className="space-y-2 mb-20">
          <Fade fade delay={20} when={visible}>
            <h2 className="md:text-3xl text-xl text-[#001B3C]  font-bold tracking-wide">
              {data.heading}
            </h2>
          </Fade>
          <Fade fade delay={40} when={visible}>
            <p className="tracking-wide text-[#001B3C]">{data.decription}</p>
          </Fade>
        </div>
        <div className="grid md:grid-cols-2 gap-14  ">
          {data &&
            data?.list.map((d, i) => (
              <Fade bottom delay={d.time} when={visible} key={i}>
                <div className="md:space-y-7 space-y-4">
                  <div>
                    <img src={d.bannerimg} alt="" className="w-24 h-24" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-semibold">{d.title}</h2>
                    <p className="text-black/85">{d.description}</p>
                  </div>
                </div>
              </Fade>
            ))}
        </div>
        <div className="py-2">
          <Fade bottom delay={250} when={visible}>
            <h2 className="bg-[#ff7256] md:py-3 sm:py-3  lg:text-md sm:text-sm text-xs text-white font-semibold rounded-full px-6 w-fit">
              {data.link}
            </h2>
          </Fade>
        </div>
      </div>
      <Fade fade delay={100} when={visible}>
        <div className="overflow-hidden">
          <img
            src={data.Img}
            alt=""
            className="lg:h-[85vh] lg:w-[90vw] lg:translate-x-28  "
          />
        </div>
      </Fade>
    </div>
  );
}

export default ExpertGuidence;
