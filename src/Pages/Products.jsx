import React, { useState } from "react";
import products from "../data";

import { Link } from "react-router-dom";
const Products = () => {
  // style
  const style = {
    parent: `container mx-auto overflow-hidden `,
    container: `px-2 container overflow-hidden mx-auto flex flex-col justify-center items-center md:grid  md:grid-cols-2 gap-2`,
    h1: `text-center my-8 text-3xl font-semibold font-[poppins]`,
    card: `overflow-hidden  relative md:max-w-l  rounded-lg bg-gray-300 shadow border rounded text-center`,
    img: `w-full -mt-12 h-1/2`,
    input: `"shadow border p-2 m-4  w-1/2`,
    label: `mx-4`,
    btn: `p-2 bg-green-500 my-2`,
  };
  // user input
  const [query, setquery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    console.log();
    return setquery(e.target.value);
  };
  //filter data to see it includes user query
  const filters = products.filter((items) =>
    items.Location.toLowerCase().includes(query)
  );
  // console.log(filter);
  return (
    <div className={style.parent}>
      <h1 className={style.h1}> Products </h1>
      <label className={style.label} htmlFor="">
        Enter Location
      </label>
      <input
        type="text"
        placeholder="mogadishu"
        className={style.input}
        onChange={handleChange}
      />

      <div className={style.container}>
        {filters.map((product) => (
          <article key={product.id} className={style.card}>
            <Link to={`/products/${product.id}`} className={style.card}>
              <img src={product.img} alt={product.id} className={style.img} />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi, nemo nihil vero hic consequatur fugit perferendis
                tenetur aliquam, facilis, eius deleniti molestiae ducimus
                voluptas facere praesentium id a delectus assumenda?
              </p>
              <button className={style.btn}>Read More</button>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Products;
