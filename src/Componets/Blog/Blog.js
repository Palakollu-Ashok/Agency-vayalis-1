import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
import data from "../Content/Blog/Blog.json";
function Blog() {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div ref={ref} className="xl:px-10 px-3">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:p-5">
        {data &&
          data?.list.map((d, i) => (
            <Fade bottom delay={d.time} when={visible}>
              <div>
                <Fade bottom delay={50} when={visible}>
                  <img src={d.bannerImg} alt="" className="rounded-md" />
                </Fade>
                <Fade bottom delay={75} when={visible}>
                  <h2 className="sm:font-semibold font-bold tracking-wide sm:text-lg mt-3">
                    {d.title}
                  </h2>
                </Fade>
                <Fade bottom delay={100} when={visible}>
                  <p className="mt-3 tracking-wide">{d.description}</p>
                </Fade>
                <Fade bottom delay={125} when={visible}>
                  <p className="mt-2">{d.date}</p>
                </Fade>
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default Blog;
