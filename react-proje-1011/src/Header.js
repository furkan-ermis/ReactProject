import React from "react";
import "./Header.css";
import logo from "./logo.jpg";
function Header({ sepetItem }) {
  let total = 0;
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <ul className="design-flex">
        <li>
          <a href="">Books</a>
          <span></span>
        </li>
        {sepetItem.length !== 0 && (
          <>
            <li className="order">
              <a href="">
                <i className="fa-solid fa-basket-shopping"></i>
                <span>{sepetItem.length}</span>
              </a>
              <div className="sepet">
                <ul>
                  {sepetItem.map((item) => (
                    <li key={item.id}>
                      <strong>{item.ad}</strong>
                      <em>{item.fiyat} ₺</em>
                      <img width="40" height="40" src={item.resim} alt="" />
                      <em
                        style={{
                          backgroundColor: "lightblue",
                          borderRadius: "4px",
                          padding: "2px 4px",
                          border: "1px solid gray",
                        }}
                      >
                        {item.count}
                      </em>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>Toplam= {total}</li>
          </>
        )}
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
