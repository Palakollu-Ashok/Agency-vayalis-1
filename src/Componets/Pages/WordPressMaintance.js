import React from "react";
import WordPressMaintance from "../Maintance/WordPressMaintance";
import BreadCrumb from "../Common/BreadCrumb";
import Technical from "../Maintance/Technical";
import YourQuetions from "../Maintance/YourQuetions";
import Contact from "../Common/Contact";
function WordPressMaintancePage() {
  return (
    <>
      <div className="bg-slate-900">
        <BreadCrumb
          title="Home"
          icon="»"
          heading="WordPress Maintenance"
          description="WordPress Maintenance"
        />
      </div>
      <WordPressMaintance />
      <Technical />
      <YourQuetions />
      <Contact />
    </>
  );
}

export default WordPressMaintancePage;
