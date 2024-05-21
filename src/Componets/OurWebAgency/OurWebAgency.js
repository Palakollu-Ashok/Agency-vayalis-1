import React from "react";
import data from "../Content/OurWebAgency/WebAgency.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

const OurWebAgency = () => {
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
    <div ref={ref} className="grid place-items-center justify-center">
      {data &&
        data?.list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2 order-2 md:order-1 lg:px-5 px-3">
                  <h2 className="text-2xl font-bold mb-5">{item.title}</h2>

                  <p className="tracking-wide lg:text-md text-sm  lg:leading-7">
                    {item.description}
                  </p>
                </div>
                <div className=" order-1 md:order-2 ">
                  <div className="p-3 lg:p-5">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="lg:w-[500px] lg:h-[500px] w-full h-auto"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-950 sm:flex text-white justify-center items-center">
                  <div className="">
                    <div className="p-3 lg:p-5">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="lg:w-[500px] lg:h-[500px] w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 lg:px-5 px-3 py-8 ">
                    <h2 className="text-2xl font-bold mb-5">{item.title}</h2>
                    <p className="tracking-wide lg:text-md text-sm  lg:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default OurWebAgency;
