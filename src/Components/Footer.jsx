import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  const style = {
    parent: `md:text-xl text-sm mt-10 p-8 flex justify-around bg-gradient-to-r from-[#00B09B] to-[#8EC842] max-h-sm text-white font-[poppins]  `,
    container: `md:flex  gap-12 block text-center  `,
    card: `flex flex-col my-5 text-left`,
    h1: `font-bold md:text-xl text-sm`,
    a: `flex gap-2 items-center`,
  };
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.h1}>KIREEYE INC. </h1>
          <Link to="/"> HOME </Link>
          <Link to="/Products"> Products</Link>
          <Link to="/Contact">CONTACT</Link>
        </div>
        <div className={style.card}>
          <h1 className={style.h1}>OUR CONTACTS </h1>
          <p className={style.a} href="">
            {" "}
            <IoLocationSharp /> Mogadishu , Somalia{" "}
          </p>
          <p className={style.a} href="">
            {" "}
            <BsFillTelephoneFill /> 06XXXXXXX{" "}
          </p>
          <p className={style.a} href="">
            <MdEmail /> info@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
