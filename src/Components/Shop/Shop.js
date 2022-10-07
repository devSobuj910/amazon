import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setproducts(products));
  }, []);

  const [cart, setCart] = useState([]);
  const handaler = (product) => {
    const newcart = [...cart, product];
    setCart(newcart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product pro={product} key={product.id} handel={handaler}></Product>
        ))}
      </div>
      <div className="shope-container">
        <h3>order summmury: {cart.length}</h3>
      </div>
    </div>
  );
};

export default Shop;
