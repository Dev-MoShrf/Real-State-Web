import React, { useState } from "react";
import Modal from "../Components/Modal";
function Contact() {
  const style = {
    parent: ` font-[poppins] container  h-[50vh] my-5  `,
    form: `w-1/2 h-44 m-auto flex flex-col  `,
    input: `border border-b-gray-500 `,
    btn: `p-2  bg-green-500 w-[100px] text-white rounded-lg mx-auto my-2`,
    h1: `font-bold `,
  };
  // get input value
  const [input, setInput] = useState({
    firstNam: "",
    lastName: "",
    email: "",
  });

  // set  input fields
  const updatefirstName = (e) => {
    setInput({
      ...input,
      firstNam: e.target.value,
    });
  };
  const updateLastName = (e) => {
    setInput({
      ...input,
      lastName: e.target.value,
    });
  };
  const updateEmail = (e) => {
    setInput({
      ...input,
      email: e.target.value,
    });
  };

  // validate input
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((input.firstNam == "" || input.lastName == "", input.email == "")) {
      alert("Please fill all required fields");
    } else {
      alert("thanks for contacting us");
    }
  };

  return (
    <div className={style.parent}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.h1}>Contact Us</h1>
        <label htmlFor="firstname">First Name</label>
        <input
          className={style.input}
          type="text"
          id="input"
          onChange={updatefirstName}
        />
        <label htmlFor="">Last Name</label>
        <input
          className={style.input}
          type="text"
          id="input"
          onChange={updateLastName}
        />
        <label htmlFor="">Email</label>
        <input
          className={style.input}
          type="email"
          id="input"
          onChange={updateEmail}
        />
        <button className={style.btn}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
