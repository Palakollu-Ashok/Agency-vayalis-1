import React, { useState } from "react";
import Calendar from "react-calendar";
import { FaRegClock } from "react-icons/fa";
import Profile from "../Images/virat.webp";
import banner from "../Images/bannericon.svg";
// import "react-calendar/dist/Calendar.css";
import "./Styles/Styles.css";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import "./Styles/Styles.css";
function DateTime() {
  let [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const defaultText = selectedDate
    ? selectedDate.toDateString()
    : "Please select a date";

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotClick = (timeSlot) => {
    console.log("Select date and time", timeSlot);
    console.log("Selected date:", selectedDate);
  };

  const renderTimeSlots = () => {
    const timeSlots = [
      "9:00AM",
      "10:00AM",
      "11:00AM",
      "12:00PM",
      "1:00PM",
      "2:00PM",
      "3:00PM",
      "4:00PM",
      "5:00PM",
    ];

    return (
      <div className="h-full  px-2 overflow-y-auto">
        {selectedDate &&
          timeSlots.map((timeSlot, index) => (
            <button
              key={index}
              onClick={() => handleTimeSlotClick(timeSlot)}
              className="flex w-full py-1 justify-between gap-4"
            >
              <button className="rounded-lg py-3 bg-[#666666] text-white w-1/2">
                {timeSlot}
              </button>
              <button className="py-3 rounded-lg text-white bg-[#FF7256] w-1/2">
                following
              </button>
            </button>
          ))}
      </div>
    );
  };

  return (
    <div className="lg:flex px-3 lg::h-screen py-6    justify-center items-center">
      <div className=" lg:w-[60%]  md:flex grid md:justify-center   py-3   border rounded-lg  shadow-xl">
        <div className="grid justify-center md:w-1/2  border-r ">
          <div className="border-b h-32   flex justify-center gap-2 items-center mb-3 ">
            <img src={banner} alt="" className="w-14 h-14" />

            <h2 className="text-5xl font-semibold">VAYALIS</h2>
          </div>
          <div className="py-10 px-3">
            <img src={Profile} alt="" className="w-20 h-20 rounded-full" />

            <h1 className="mt-3 text-black/65 font-semibold">Nicolas Lecocq</h1>
            <h2 className="text-2xl mt-5  font-bold tracking-wide">
              30 minute interview
            </h2>
            <p className="flex mt-3 items-center gap-2">
              <FaRegClock />
              30 min
            </p>
            <p className="tracking-wider mt-3 font-sans">
              Choose your day and time for a 30-minute interview designed to
              fully understand your project objectives. This meeting will allow
              us to discuss your expectations in detail and discuss the stages
              of our creative process to bring your vision to life.
            </p>
          </div>
        </div>
        <div className=" md:w-[50%] h-full w-fit  px-3">
          <div>
            <p className="h-32 text-3xl w-fit font-bold tracking-wide place-content-center ">
              Select date and time
            </p>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="custom-calendar w-full py-3"
            />
          </div>
          <div className="w-1/2">
            <button onClick={() => setIsOpen(true)} className="font-semibold">
              Time
            </button>
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-50 w-1/2"
            >
              <div className="fixed inset-0  flex items-center justify-center p-4 w-screen">
                <DialogPanel className="max-w-lg space-y-4 bg-white p-8 border">
                  <DialogTitle className="font-bold w-full">
                    <input
                      className="border py-3 rounded-lg w-full text-sm tracking-wide"
                      placeholder="Search"
                    />
                  </DialogTitle>
                  <Description>
                    <h2 className="font-semibold tracking-wide"> Time Zones</h2>
                  </Description>
                  <div
                    className="overflow-auto w-[30vw] p-2 space-y-2"
                    style={{ maxHeight: "calc(3 * 1.5em + 2 * 1rem)" }}
                  >
                    <div className="flex justify-between">
                      <p className="">Usa,Washington DC *</p>
                      <h1 className="">03:51pm</h1>
                    </div>
                    <div className="flex justify-between">
                      <p>India,Mumbai</p>
                      <h1 className="">03:00pm</h1>
                    </div>
                    <div className="flex justify-between">
                      <p>Mexico City</p>
                      <h1 className="">01:50pm</h1>
                    </div>
                    <div className="flex justify-between">
                      <p>Japan,Tokyo</p>
                      <h1 className="">16:50pm</h1>
                    </div>
                    <div className="flex justify-between">
                      <p>India,Mumbai</p>
                      <h1 className="">03:00pm</h1>
                    </div>
                    <div className="flex justify-between">
                      <p className="">Usa,Washington DC *</p>
                      <h1 className="">03:51pm</h1>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateTime;
