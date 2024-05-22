import React from "react";
import data from "../Content/Homepage/OurApproach.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function OurApproach() {
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
      className="grid place-items-center py-10 sm:px-0 md:px-3 lg:px-0 px-5"
    >
      <div className="grid place-items-center justify-center lg:px-72 mb-10 ">
        <Fade bottom delay={75} when={visible}>
          <h3 className="text-center text-md text-[#E9684F]">{data.heading}</h3>
        </Fade>
        <Fade delay={100} when={visible}>
          <h2 className="text-center sm:text-4xl  text-xl  font-semibold md:px-16 ">
            {data.title}
          </h2>
        </Fade>
      </div>
      <div className=" justify-center lg:flex grid sm:grid-cols-2 grid-cols-1 xl:px-14   gap-10">
        {data &&
          data?.list.map((d, i) => (
            <Fade bottom delay={d.time} when={visible} key={i}>
              <div className="grid place-items-center gap-3">
                <Fade bottom delay={50} when={visible}>
                  <div className="rounded-full p-3 border bg-[#E9684F] w-24">
                    <img
                      src={d.bannerimg}
                      alt=""
                      className=" bg-[#ff7256] p-2 rounded-full"
                    />
                  </div>
                </Fade>
                <div className="grid place-items-center  text-center gap-3">
                  <Fade bottom delay={100} when={visible}>
                    <h2 className="text-md text-black w-full text-center font-semibold font-sans">
                      {d.title}
                    </h2>
                  </Fade>
                  <Fade bottom delay={150} when={visible}>
                    <p
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                      className="text-black/80 md:text-md text-sm leading-7"
                    >
                      {d.description}
                    </p>
                  </Fade>
                </div>
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default OurApproach;
