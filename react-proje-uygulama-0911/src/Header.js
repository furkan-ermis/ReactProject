import React from "react";
import "./Header.css";
import logo from "./logo.jpg";
function Header({ sepetItem }) {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <ul className="design-flex">
        <li>
          <a href="">Books</a>
          <span></span>
        </li>
        <li className="order">
          <a href="">
            <i className="fa-solid fa-basket-shopping"></i>
            <span>{sepetItem.length}</span>
          </a>
          {sepetItem.length !== 0 ? (
            <div className="sepet">
              <ul>
                {sepetItem.map((item) => (
                  <li key={item.id}>
                    <strong>{item.ad}</strong>
                    <em>{item.fiyat} ₺</em>
                    <img width="40" height="40" src={item.resim} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </li>
        <li>
          <a href="">SignUp</a>
          <span></span>
        </li>
        <li>
          <a href="">Login</a>
          <span></span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
