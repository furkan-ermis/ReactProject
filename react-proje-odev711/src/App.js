import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="wrapper">
      <header className="navbar ">
        <a class="ms-5 me-5 navbar-brand d-flex" href="#">
          <img
            src="https://picsum.photos/200/300"
            alt="Logo"
            width="50"
            height="54"
            class="me-3 rounded d-inline-block align-text-top"
          />
          <h3 class="align-middle">Sales Center</h3>
        </a>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Ana Sayfa
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Hakkımızda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Galeri
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="row container">
        <aside className="col-sm-3 text-center">
          <h2>Kategoriler</h2>
          <div class="categories bg-secondary d-grid gap-2 col-6 mx-auto">
            <button class="btn" type="button">
              Kategori 1
            </button>
            <button class="btn" type="button">
              Kategori 2
            </button>
            <button class="btn" type="button">
              Kategori 3
            </button>
            <button class="btn" type="button">
              Kategori 4
            </button>
            <button class="btn" type="button">
              Kategori 5
            </button>
          </div>
        </aside>
        <article className="col-sm-8 m-2 ">
          <h2>Ürünler</h2>
          <div class="container text-center">
            <div class="row card-group ">
              <div class="card bg-transparent shadows rounded col-sm m-2">
                <img
                  src="https://picsum.photos/200/300"
                  className=" rounded mt-2 card-img-top "
                  alt="..."
                  height="120"
                />
                <div class="card-body">
                  <h5 class="card-title">Ürün Adı</h5>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p class="card-text">
                    Fiyat:&nbsp;&nbsp;
                    <small class="text-body-secondary">2250 ₺</small>
                  </p>
                </div>
              </div>
              <div class="card bg-transparent shadows rounded col-sm m-2">
                <img
                  src="https://picsum.photos/200/300"
                  className=" rounded mt-2 card-img-top "
                  alt="..."
                  height="120"
                />
                <div class="card-body">
                  <h5 class="card-title">Ürün Adı</h5>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p class="card-text">
                    Fiyat:&nbsp;&nbsp;
                    <small class="text-body-secondary">2250 ₺</small>
                  </p>
                </div>
              </div>
              <div class="card bg-transparent shadows rounded col-sm m-2">
                <img
                  src="https://picsum.photos/200/300"
                  className=" rounded mt-2 card-img-top "
                  alt="..."
                  height="120"
                />
                <div class="card-body">
                  <h5 class="card-title">Ürün Adı</h5>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p class="card-text">
                    Fiyat:&nbsp;&nbsp;
                    <small class="text-body-secondary">2250 ₺</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="row card-group ">
              <div class="card bg-transparent shadows rounded col-sm m-2">
                <img
                  src="https://picsum.photos/200/300"
                  className=" rounded mt-2 card-img-top "
                  alt="..."
                  height="120"
                />
                <div class="card-body">
                  <h5 class="card-title">Ürün Adı</h5>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p class="card-text">
                    Fiyat:&nbsp;&nbsp;
                    <small class="text-body-secondary">2250 ₺</small>
                  </p>
                </div>
              </div>
              <div class="card bg-transparent shadows rounded col-sm m-2">
                <img
                  src="https://picsum.photos/200/300"
                  className=" rounded mt-2 card-img-top "
                  alt="..."
                  height="120"
                />
                <div class="card-body">
                  <h5 class="card-title">Ürün Adı</h5>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p class="card-text">
                    Fiyat:&nbsp;&nbsp;
                    <small class="text-body-secondary">2250 ₺</small>
                  </p>
                </div>
              </div>
              <div class="card bg-transparent shadows rounded col-sm m-2">
                <img
                  src="https://picsum.photos/200/300"
                  className=" rounded mt-2 card-img-top "
                  alt="..."
                  height="120"
                />
                <div class="card-body">
                  <h5 class="card-title">Ürün Adı</h5>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p class="card-text">
                    Fiyat:&nbsp;&nbsp;
                    <small class="text-body-secondary">2250 ₺</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="row card-group "></div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
