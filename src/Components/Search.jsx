import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../data";

const Search = () => {
  const style = {
    parent: `relative`,
    container: `container flex items-center justify-center  absolute -top-16`,
    input: `focus:outline-none md:placeholder:text-3xl font-[poppins]  placeholder:text-xl  w-1/2 md:h-[75px] h-[50px] -top-16 p-2  bg-gray-500`,
    Search: `cursor-pointer bg-gray-500 w-16 md:h-[75px] h-[50px] text-white p-2`,
  };

  // user input
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault;

    setInput(e.target.value);
  };
  const Location = data.map((product) => product.Location);

  const search = data.filter((item) =>
    item.Location.toLowerCase().includes(input)
  );
  console.log(search);
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <input
          type="text"
          placeholder="Search Location"
          className={style.input}
          onChange={handleChange}
        />
        <FaSearch className={style.Search} />
      </div>
    </div>
  );
};

export default Search;
