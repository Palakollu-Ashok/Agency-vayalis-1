import React from "react";
import data from "../Content/WhiteLabel.json";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
function WhieteLabelEquipe() {
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
    <div ref={ref} className=" py-10  ">
      <div className="lg:flex px-3 justify-between   mt-10 ">
        <div className=" lg:px-0 lg:py-0 mb-5  lg:w-[160vw] h-full  lg:-translate-x-20">
          <Fade fade when={visible}>
            <img src={data.BannerImg} alt="" className=" " />
          </Fade>
        </div>
        <div className="">
          <Fade fade when={visible}>
            {data &&
              data?.list.map((d, i) => (
                <Fade bottom delay={d.time} when={visible} key={i}>
                  <div className=" ">
                    <h2 className="md:text-4xl text-2xl font-bold py-2">
                      {d.title}
                    </h2>
                    <p className="w-full  py-3 leading-7  font-sans ">
                      <strong>{d.Subheading}</strong>
                      {d.decription}
                    </p>
                  </div>
                </Fade>
              ))}
          </Fade>
          <div className="py-3">
            <Fade fade when={visible}>
              <Link className="border bg-[#FF7256] py-3 px-6 text-white  text-lg rounded-full">
                Find out more
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhieteLabelEquipe;
