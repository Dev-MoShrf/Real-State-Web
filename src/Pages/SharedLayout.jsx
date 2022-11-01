import React from "react";
import { Navbar, Footer } from "../Components";
import { Outlet } from "react-router-dom";
function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
