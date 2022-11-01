import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  //All Navbar style
  const style = {
    bg: `container m-auto  h-20 flex items-center justify-between`,
    bg_gradient: `bg-gradient-to-r from-[#00B09B] to-[#8EC842]`,
    size: `w-44 h-50`,
    ul: `hidden md:flex font-[Poppins] text-white flex  gap-5 `,
    ul_Mobile: `z-10 absolute top-16 -left-0 bg-gradient-to-r from-[#00B09B] to-[#8EC842] w-full h-44 px-4 py-8 space-y-5 font-[Poppins] text-white flex flex-col`,
    btn_menu: `cursor-pointer`,
    Ai_Menu: `md:hidden text-white w-16 h-8`,
  };
  //menu

  return (
    <div className={style.bg_gradient}>
      <div className={style.bg}>
        {/* logo */}
        <Link to="/">
          <img className={style.size} src={logo} alt="Logo" />
        </Link>
        {/* Menu Icon */}
        <div className={style.btn_menu} onClick={() => setNav(!nav)}>
          {nav ? (
            <AiOutlineClose className={style.Ai_Menu} />
          ) : (
            <AiOutlineMenu className={style.Ai_Menu} />
          )}
        </div>

        {/* List_Responsive  */}
        <ul className={nav ? style.ul_Mobile : style.ul}>
          <Link to="/"> Home </Link>
          <Link to="Products"> Products</Link>
          <Link to="Contact"> Contact</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
