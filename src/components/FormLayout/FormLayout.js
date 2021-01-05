import React from "react";
import Navbar from "../Navbar";

function FormLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">{children}</div>
    </div>
  );
}

export default FormLayout;
