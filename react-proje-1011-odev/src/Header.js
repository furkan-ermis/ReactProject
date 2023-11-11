import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.jpg";
function Header({ sepetItem, total, DeletSepet }) {
  return (
    <div className="header">
      {alertify.alert("Ready!")}
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
                  <li>
                    <strong>ADI</strong>
                    <strong>FİYAT</strong>
                    <strong>RESİM</strong>
                    <strong>ADET</strong>
                    <strong>Durum</strong>
                  </li>
                  {sepetItem.map((item) => (
                    <>
                      <li key={item.id}>
                        {/* {setTotal(...total, item.count * item.fiyat)} */}
                        <strong>{item.ad}</strong>
                        <em>{item.fiyat * item.count} ₺</em>
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
                        <button
                          className="btn btn-danger"
                          onClick={() => DeletSepet(item)}
                        >
                          Sil
                        </button>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a href="">Toplam = {total}</a>
              <span></span>
            </li>
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
