import React from "react";
import DateTime from "../ToStartUp/DateTime";
import Essentinalsrequests from "../ToStartUp/Essentinalsrequests";
import Contact from "../Common/Contact";
import BreadCrumb from "../Common/BreadCrumb";

function ToStartUp() {
  return (
    <>
      <div className="bg-slate-900">
        <BreadCrumb
          title="Home"
          icon="»"
          heading="Make an Appointment"
          description="Make an Appointment"
          description2="Contact our digital agency now to turn your ideas into reality!"
          address="FaHome"
          title1="Address"
          desc1="78, Avenue des Champs-Élysées, 75008 Paris"
          email="MdEmail"
          title2="Email"
          desc2="contact@agence-vayalis.fr"
          contact={true}
        />
      </div>
      <DateTime />
      <Essentinalsrequests />
      <Contact />
    </>
  );
}

export default ToStartUp;
