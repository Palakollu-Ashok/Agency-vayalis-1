import React from "react";
import data from "../Content/SiteCreation/TailoredCrativeProject.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function TailoredCreativeProject() {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div ref={ref} className="grid place-items-center  px-6 py-14">
      <div className="grid place-items-center">
        <div className="mb-14">
          <Fade bottom delay={50} when={visible}>
            <h3 className=" mb-3 text-center">{data.title}</h3>
          </Fade>
          <Fade bottom delay={100} when={visible}>
            <h2 className="md:text-4xl tracking-wide text-xl font-bold text-center">
              {data.heading}
            </h2>
          </Fade>
        </div>

        {data &&
          data?.list.map((d, index) => (
            <Fade bottom delay={d.time} when={visible}>
              <div key={d.id} className="md:w-[62vw]">
                <ul className="flex gap-4 mb-10  ">
                  <div key={index} className="md:w-1/6 space-y-3 ">
                    <div
                      className="w-20 h-20 rounded-full  grid justify-center items-center"
                      style={{ backgroundColor: d.bg }}
                    >
                      <span className="text-xl font-bold text-black ">
                        {`${d.number}`}
                      </span>
                    </div>
                  </div>

                  <div className="w-full">
                    <li>
                      <h3 className="  font-poppins font-bold tracking-wide text-xl mt-5">
                        {d.title}
                      </h3>
                    </li>
                    <li>
                      <p className="md:text-md text-sm text-center md:text-start font-poppins mt-5 leading-7">
                        {d.description}
                      </p>
                    </li>
                  </div>
                </ul>
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default TailoredCreativeProject;
