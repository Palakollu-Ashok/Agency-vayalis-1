import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import data from "../Content/ToStartUp/EssentialRequests.json";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

export default function Essentinalsrequests() {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          <h2 className=" lg:text-lg text-md  font-semibold tracking-wider  ">
            {header}{" "}
          </h2>
          {isEnter ? (
            <div className="bg-[#FF7256] rounded-full border-[#FF7256]">
              <FaMinus
                className="text-white  text-3xl p-1  transition-transform duration-700 ease-in-out"
                alt="downArrow"
              />
            </div>
          ) : (
            <div className="rounded-full group-hover:bg-[#FF7256] duration-700 border border-[#FF7256]">
              <FaPlus
                className="ml-auto group-hover:text-white text-[#FF7256] text-3xl p-1  transition-transform duration-700 ease-in-out"
                alt="downArrow"
              />
            </div>
          )}
        </>
      )}
      buttonProps={{
        className: ({ isEnter }) =>
          "flex justify-between items-center  w-full xl:p-5 p-3 text-left  ${isEnter && ''}",
      }}
      contentProps={{
        className: "transition-height  duration-700  ease-in-out ",
      }}
      panelProps={{ className: "xl:p-5  p-3 w-full" }}
    />
  );

  return (
    <div ref={ref} className="grid px-6 py-14 bg-pink-100">
      <div className=" lg:py-0 py-6  grid place-items-center  ">
        <Fade bottom delay={50} when={visible}>
          <h3 className="text-center  text-xl">{data.heading}</h3>
        </Fade>
        <Fade bottom delay={100} when={visible}>
          <h2 className="xl:text-4xl text-center font-bold tracking-wide   mt-3 sm:text-2xl text-xl">
            {data.title}
          </h2>
        </Fade>
      </div>
      <div className="xl:flex grid   overflow-hidden p-9 ">
        <div className="w-full     ">
          <Accordion className="space-y-5" transition transitionTimeout={700}>
            {data &&
              data?.list.map((d, idx) => (
                <Fade bottom delay={d.time} when={visible}>
                  <AccordionItem
                    className=" rounded-md group bg-white"
                    header={d.heading}
                  >
                    <hr className="mb-7" />
                    <div key={idx} className=" space-y-2 ">
                      <p>{d.description}</p>
                    </div>
                  </AccordionItem>
                </Fade>
              ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
