import React from "react";
import data from "../Content/WordPress.json";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function WordPress() {
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
      className="md:flex px-5 gap-8 grid place-items-center md:mt-14 mt-10"
    >
      <Fade fade delay={75} when={visible}>
        <div className="md:w-1/2">
          <img src={data.bannerImg} alt="" className="w-full" />
        </div>
      </Fade>
      <div className="md:w-1/2 grid place-items-center   ">
        <div className="">
          <Fade bottom delay={100} when={visible}>
            <h2 className="text-2xl md:text-start text-center font-semibold mb-4">
              {data.title}
            </h2>
          </Fade>
          <Fade bottom delay={150} when={visible}>
            <p className="tracking-wide  md:text-start text-center">
              {data.description}
            </p>
          </Fade>
          <Fade bottom delay={200} when={visible}>
            <div className="mt-8 py-3 grid w-fit">
              <Link
                to=""
                className="bg-[#ff7256] px-10 text-white font-semibold rounded-full py-3"
              >
                {data.button}
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default WordPress;
