import React from "react";
import WordPressCreation from "../SiteCreation/WordPressCreation";
import BreathTaking from "../SiteCreation/BreathTaking";
import TailoredCreativeProject from "../SiteCreation/TailoredCreativeProject";
import Quetions from "../SiteCreation/Quetions";
import Contact from "../Common/Contact";
import Breadcrumb from "../Common/BreadCrumb";
function SiteCrationPAge() {
  return (
    <>
      <div className="bg-slate-900">
        <Breadcrumb
          title="Home"
          icon="»"
          heading="WordPress site creation"
          description="WordPress site creation"
        />
      </div>

      <WordPressCreation />

      <BreathTaking />
      <TailoredCreativeProject />
      <Quetions />
      <Contact />
    </>
  );
}

export default SiteCrationPAge;









    