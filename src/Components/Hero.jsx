import React from "react";
import P4 from "../assets/p4.jpg";
import AllProducts from "../data";
import Featured from "./Featured";
import Search from "./Search";
import Products from "../Pages/Products";
const Hero = () => {
  const style = {
    parent: `relative`,
    img_size: ` object-cover  w-full h-[555px]`,
  };
  const item = AllProducts[Math.floor(Math.random() * AllProducts.length)];

  return (
    <div className={style.parent}>
      <img className={style.img_size} src={item.img} alt="" />.
      <Featured />
      {/* <Search /> */}
      <Products />
    </div>
  );
};

export default Hero;
