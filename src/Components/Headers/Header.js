import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="headers">
      <img src={logo} alt="logo" />
      <div>
        <a href="/home">home</a>
        <a href="/shop">shop</a>
        <a href="/cart">cart</a>
        <a href="/user">user</a>
        <a href="/logout">logout</a>
      </div>
    </nav>
  );
};

export default Header;
