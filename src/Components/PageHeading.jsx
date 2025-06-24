import React from "react";
import PageTitle from "./PageTitle";
export default function PageHeading({ children, title }) {
  return (
    <div className="page-heading-container">
      <PageTitle title={title} />
      {children}
    </div>
  );
}
