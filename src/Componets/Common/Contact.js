import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
import ReCAPTCHA from "react-google-recaptcha";
function Contact() {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  const [email, setEmail] = useState("");
  const [capVal, SetCapVal] = useState("");

  const handlsubmit = async (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div
      ref={ref}
      className="grid items-center mt-4 px-2 md:px-10 h-[40vh] bg-[#ff7256]"
    >
      <Fade fade delay={100} when={visible}>
        <div className="lg:flex  lg:justify-between">
          <div className="md:w-1/3 w-full lg:mt-0 md:mb-10 mb-3">
            <h2 className="text-4xl font-semibold w-fit text-white ">
              Be Contacted
            </h2>
          </div>
          <form className="w-full" onSubmit={handlsubmit}>
            <div class="relative z-0  w-full gap-5  flex justify-between">
              <div className="w-full">
                <input
                  type="text"
                  id="floating_standard"
                  class="block py-2 px-0 w-full text-md  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-white focus:outline-none peer"
                  placeholder=" "
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  for="floating_standard"
                  class="absolute text-white duration-300 text-lg transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white peer-focus:dark:text-white  tracking-wide peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email <span>*</span>
                </label>
              </div>
              <div className="md:w-1/12">
                <button
                  type="submit"
                  class="hover:text-white   text-[#ff7256] bg-white hover:bg-slate-800  font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  SEND
                </button>
              </div>
            </div>

            <div className="py-10 md:w-full w-fit">
              <ReCAPTCHA
                className="w-10 h-10"
                sitekey="6LcuxdcpAAAAAPG5F6RvMvzezReO8Hy0wraTHoBq"
                onChange={(value) => SetCapVal(value)}
              />
            </div>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;
