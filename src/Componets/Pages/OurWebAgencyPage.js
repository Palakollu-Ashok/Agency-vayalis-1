import React from "react";
import OurWebAgency from "../OurWebAgency/OurWebAgency";
import BreadCrumb from "../Common/BreadCrumb";
function OurWebAgencyPage() {
  return (
    <>
      <div className="bg-slate-900">
        <BreadCrumb
          title="Home"
          icon="»"
          heading="Our Agency"
          description="Our Agency"
        />
      </div>
      <OurWebAgency />
    </>
  );
}

export default OurWebAgencyPage;
