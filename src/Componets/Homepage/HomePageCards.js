import React from "react";
import data from "../Content/HomePageCards.json";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function HomePageCards() {
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
    <div ref={ref} className="py-6">
      <div className="lg:grid-cols-3 grid h-full sm:grid-cols-2 grid-cols-1  gap-14 justify-between px-6 py-10 ">
        {data &&
          data?.cards.map((d, i) => (
            <Tilt
              style={{ height: "", backgroundColor: "white" }}
              perspective={1000}
            >
              {" "}
              <Fade fade delay={d.time} when={visible}>
                <div
                  className={`md:p-7 p-7  h-full md:space-y-3 space-y-2 group  shadow-2xl rounded-2xl  transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-300  ${
                    i === 0
                      ? "hover:bg-gradient-to-br from-rose-400 to-red-400"
                      : i === 1
                      ? "hover:bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-600"
                      : "hover:bg-gradient-to-br from-yellow-400 to-red-400"
                  }`}
                >
                  <div>
                    <Fade fade delay={25} when={visible}>
                      <img
                        src={d.BannerImg}
                        alt=""
                        className=" md:w-32 sm:w-16 w-24"
                      />
                    </Fade>
                    <Fade bottom delay={50} when={visible}>
                      <h2 className="md:text-xl text-md font-bold group-hover:text-white ">
                        {d.title}
                      </h2>
                    </Fade>
                    <Fade bottom delay={75} when={visible}>
                      <p className="lg:tracking-wider lg:leading-relaxed group-hover:text-white ">
                        {d.decription}
                      </p>
                    </Fade>
                  </div>
                </div>
              </Fade>
            </Tilt>
          ))}
      </div>
    </div>
  );
}

export default HomePageCards;
