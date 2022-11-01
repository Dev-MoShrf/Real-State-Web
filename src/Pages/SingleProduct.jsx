import { Link, useParams } from "react-router-dom";
import products from "../data";
import { FaBed, FaBath } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import Modal from "../Components/Modal";
import { useState } from "react";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((i) => i.id == productId);
  const { img, bedroom, bathroom, price } = product;

  const style = {
    product: `text-black  pt-8 flex flex-col justify-center items-center font-[poppins] `,
    img: `mx-4 mb-4 max-w-sm text-center text-black rounded-lg shadow-lg border border-bg-gray-500`,
    container: `px-[15px] flex flex-col md:flex-row items-center justify-center`,
    ul: `flex flex-col relative `,
    li: `flex gap-4 text-xl`,
    empty: `m-100`,
    btns: `flex md:flex-row flex-col items-center justify-center gap-10 my-4 `,
    pp: `font-bold  mb-2`,
    p1: `md:hidden`,
    p2: `hidden md:block`,
  };

  const [model, setModel] = useState(false);
  //onclick
  const handleClick = (e) => {
    e.preventDefault();
    setModel(!model);
  };

  return (
    <>
      <section className={style.product}>
        <div className={style.container}>
          <div className="img_cont">
            <img src={img} alt="" className={style.img} />
          </div>

          <ul className={style.ul}>
            <p className={style.pp}>Guri Villa ah</p>
            <li className={style.li}>
              {" "}
              <FaBed /> {product.bedroom} bedroom{" "}
            </li>
            <li className={style.li}>
              {" "}
              <FaBath /> {product.bathroom} bathroom{" "}
            </li>
            <li className={style.li}>
              {" "}
              <MdOutlinePhotoSizeSelectSmall /> {product.sqft} sqft
            </li>
            <li className={style.li}>
              {" "}
              <IoPricetagsOutline /> {product.price} ${" "}
            </li>
            <p className={style.p1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis dolore cum maiores deleniti fugiat impedit molestias
              corporis error blanditiis alias voluptates id magnam ipsa vitae
              velit modi necessitatibus, soluta minus.
            </p>
            <p className={style.p2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              ad, aut debitis optio adipisci repellat obcaecati, quibusdam
              suscipit laudantium nisi quis facere fugiat sapiente rem
              praesentium asperiores alias sed corrupti nulla. Obcaecati
              distinctio nam aspernatur, praesentium at, perspiciatis maiores
              est doloribus nemo cum consequatur. Quod perspiciatis corrupti
              veritatis porro sit eligendi qui numquam sed rerum! Nobis, dolore
              deserunt sit, laborum nostrum amet sed accusamus labore quam, nemo
              illum autem. Nesciunt, aliquam odit. Quia, hic laudantium sit
              voluptatibus minus perferendis nemo, eius libero in deleniti
              asperiores quidem blanditiis! Sequi aspernatur reprehenderit at
              quam delectus quasi quod quia ab rerum ex. Sit!
            </p>
          </ul>
        </div>
        <div className={style.btns}>
          <Modal />
          <Link to="/products">back to products</Link>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
