import React from "react";
import "./App.css";
import img from "./img1.jpg";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <img src={{ img }} alt="" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="evenColumn">
        <aside>
          <h2>Kategoriler</h2>
          <div className="categories">
            <ul>
              <li>Kategori 1</li>
              <li>Kategori 2</li>
              <li>Kategori 3</li>
              <li>Kategori 4</li>
            </ul>
          </div>
        </aside>
        <article>
          <div className="box">
            <h3>Urun Adı</h3>
            <img src="#" alt="" />
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              aliquam leo nec ex aliquet elementum. Nunc fringilla tortor
              ultrices nibh commodo, nec blandit urna maximus.
            </p>
            <div>Fiyat: 2000</div>
          </div>
          <div className="box">
            <h3>Urun Adı</h3>
            <img src="#" alt="" />
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              aliquam leo nec ex aliquet elementum. Nunc fringilla tortor
              ultrices nibh commodo, nec blandit urna maximus.
            </p>
            <div>Fiyat: 2000</div>
          </div>
          <div className="box">
            <h3>Urun Adı</h3>
            <img src="#" alt="" />
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              aliquam leo nec ex aliquet elementum. Nunc fringilla tortor
              ultrices nibh commodo, nec blandit urna maximus.
            </p>
            <div>Fiyat: 2000</div>
          </div>
          <div className="box">
            <h3>Urun Adı</h3>
            <img src="#" alt="" />
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              aliquam leo nec ex aliquet elementum. Nunc fringilla tortor
              ultrices nibh commodo, nec blandit urna maximus.
            </p>
            <div>Fiyat: 2000</div>
          </div>
          <div className="box">
            <h3>Urun Adı</h3>
            <img src="#" alt="" />
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              aliquam leo nec ex aliquet elementum. Nunc fringilla tortor
              ultrices nibh commodo, nec blandit urna maximus.
            </p>
            <div>Fiyat: 2000</div>
          </div>
          <div className="box">
            <h3>Urun Adı</h3>
            <img src="#" alt="" />
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              aliquam leo nec ex aliquet elementum. Nunc fringilla tortor
              ultrices nibh commodo, nec blandit urna maximus.
            </p>
            <div>Fiyat: 2000</div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
