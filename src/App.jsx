import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ErrorPage, SharedLayout, Contact } from "./Pages";
import { Hero, Products, SingleProduct } from "./Components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="Products" element={<Products />} />
          <Route path="Products/:productId" element={<SingleProduct />} />
          <Route path="Contact" element={<Contact />} />
          <Route
            path="products/:productId/congrats"
            element={<h1>congrats</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
