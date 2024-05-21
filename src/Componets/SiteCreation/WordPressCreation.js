import React from "react";
import data from "../Content/SiteCreation/WordPressCreation.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function WordPressCreation(props) {
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
    <div ref={ref} className="grid  px-6 py-14">
      <div className="grid place-items-center lg:px-10">
        <div className="grid place-items-center lg:w-[68vw] tracking-wide md:mb-14 mb-7">
          <div>
            <Fade fade delay={50} when={visible}>
              <h3 className="text-center text-[#ff7256] py-1 font-medium mb-2">
                {data.heading}
              </h3>
            </Fade>
            <Fade fade delay={100} when={visible}>
              <h2 className="md:text-4xl text-2xl text-center font-semibold tracking-wide  mb-4">
                {data.maintitle}
              </h2>
            </Fade>
            <Fade fade delay={150} when={visible}>
              <p className="text-center text-sm sm:text-md leading-6">
                {data.desc}
              </p>
            </Fade>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-14 md:grid-cols-2 grid-cols-1 justify-center">
          {data &&
            data?.list.map((d, i) => (
              <Fade bottom delay={d.time} when={visible}>
                <div>
                  <Fade bottom delay={50} when={visible}>
                    <div className="grid justify-center md:mb-7  mb-2">
                      <img src={d.bannerImg} alt="" />
                    </div>
                  </Fade>
                  <div className="text-center justify-center">
                    <Fade bottom delay={100} when={visible}>
                      <h3 className="mb-2 font-semibold ">{d.title}</h3>
                    </Fade>
                    <Fade bottom delay={150} when={visible}>
                      <p className="tracking-wide text-sm leading-6 sm:text-md px-1">
                        {d.description}
                      </p>
                    </Fade>
                  </div>
                </div>
              </Fade>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WordPressCreation;
