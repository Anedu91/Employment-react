import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Filter from "../Filter";

function DefaultLayout({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <Navbar />
      <Header />
      <Filter />
      {children}
    </div>
  );
}

export default DefaultLayout;
