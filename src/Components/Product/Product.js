import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.pro;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">name: {name}</h4>

        <span>pric: {price}</span>
        <p>seller: {seller} </p>
        <span> ratting: {ratings}</span>

        <button onClick={() => props.handel(props.pro)} className="btn-card">
          add to cart <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
