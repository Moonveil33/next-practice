import { forbidden, redirect } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }) => {
  const user = null;
  if (!user) {
    // redirect("/");
    // notFound();
    forbidden();
  }

  return (
    <>
      <h2>Dashboard Layout</h2>
      {children}
    </>
  );
};

export default DashboardLayout;
