import React from "react";
import "./Product.css";

const Product = ({ title, image, price, description }) => {
  return (
    <div>
      {/* // style="width:100%;" */}
      <img src={image} alt={title} />
      <h4>{title} </h4>
    </div>
  );
};

export default Product;
