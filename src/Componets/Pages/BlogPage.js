import React from "react";
import Blog from "../Blog/Blog";
import BreadCrumb from "../Common/BreadCrumb";
import Contact from "../Common/Contact";
function BlogPage() {
  return (
    <>
      <div className="bg-slate-900">
        <BreadCrumb
          title="Home"
          icon="»"
          heading="Blog"
          description="Blog"
          showInput={true}
        />
      </div>
      <Blog />
      <Contact />
    </>
  );
}

export default BlogPage;
