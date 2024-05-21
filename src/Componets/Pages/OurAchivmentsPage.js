import React from "react";
import WordPressAchivements from "../OurAchivements/WordPressAchivements";
import BreadCrumb from "../Common/BreadCrumb";
import Contact from "../Common/Contact";
function OurAchivmentsPage() {
  return (
    <div>
      <div className="bg-slate-900">
        <BreadCrumb
          title="Home"
          icon="»"
          heading="Our achievements"
          description="Our achievements"
        />
      </div>
      <WordPressAchivements />
      <Contact />
    </div>
  );
}

export default OurAchivmentsPage;
