import React from "react";
import AllProducts from "../data";
import { FaBed, FaBath } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
const Featured = () => {
  const style = {
    parent: `md:text-2xl reltive container mx-auto absolute top-48 right-8 bg-[#00B09B] w-[12rem] md:w-[30rem] h-[15rem] p-2 rounded`,
    empty: `h-6`,
    Featured: `text-[#8DC843] font-[poppins] absolute bg-white -my-6 py-1 px-6 left-4`,
    content: `font-[poppins] text-white `,
    h1: `font-bold text-center`,
    // item: `flex justif-between items-center gap-4`,
    li: `flex gap-3 `,
  };

  //random featured obj
  const item = AllProducts[Math.floor(Math.random() * AllProducts.length)];

  return (
    <div className={style.parent}>
      {/* header */}
      <div className={style.Featured}>Featured</div>
      <div className={style.empty}></div>
      {/* content */}
      <div className={style.content}>
        <h1 className={style.h1}>Guri Villa ah</h1>

        {/* lists */}
        <ul>
          <li className={style.li}>
            {" "}
            <FaBed /> {item.bedroom} bedroom{" "}
          </li>
          <li className={style.li}>
            {" "}
            <FaBath /> {item.bathroom} bathroom{" "}
          </li>
          <li className={style.li}>
            {" "}
            <MdOutlinePhotoSizeSelectSmall /> {item.sqft} sqft
          </li>
          <li className={style.li}>
            {" "}
            <IoPricetagsOutline /> {item.price} ${" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Featured;
