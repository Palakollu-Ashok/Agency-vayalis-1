import React from "react";
import { useInView } from "react-intersection-observer";
import data from "../Content/Maintance/Technical.json";
import { Fade } from "react-reveal";
function Technical() {
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
    <div ref={ref} className="lg:grid lg:place-items-center py-10 ">
      <div className="place-items-center justify-center gap-14 lg:grid-cols-3 grid px-9     sm:grid-cols-2 ">
        {data &&
          data?.list.map((d, i) => (
            <Fade bottom delay={d.time} when={visible}>
              <div className="grid place-items-center justify-center sm:w-[40vw] lg:w-[20vw] w-fit gap-3 ">
                <Fade bottom delay={50} when={visible}>
                  <div className="rounded-full p-3 border bg-[#E9684F]     w-28">
                    <img
                      src={d.bannerImg}
                      alt="Image Not Found"
                      className=" bg-[#ff7256] p-3 rounded-full"
                    />
                  </div>
                </Fade>
                <div className="grid place-items-center  text-center gap-3">
                  <Fade bottom delay={100} when={visible}>
                    <h2 className="text-md text-black w-full text-center font-semibold font-sans">
                      {d.title}
                    </h2>
                  </Fade>
                </div>
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default Technical;
