import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Hero } from "../Components";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
