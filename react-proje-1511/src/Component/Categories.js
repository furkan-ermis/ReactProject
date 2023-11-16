import React, { Component } from "react";
import "../App.css";
import logo from "../logo.png";

class Categories extends Component {
  handleCategoryClick = (kategoriId) => {
    this.props.onCategorySelect(kategoriId);
  };

  render() {
    const carts = this.props.cartList;
    return (
      <div>
        <div className="container-fluid bg-dark fh5co_padd_mediya padding_786">
          <div className="container padding_786">
            <nav className="navbar navbar-toggleable-md navbar-dark ">
              <button
                className="navbar-toggler navbar-toggler-right mt-3"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars"></span>
              </button>
              <a className="navbar-brand" href="test">
                <img src={logo} alt="img" className="mobile_logo_width" />
              </a>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  {this.props.Kategoriler.map((kategori, index) => (
                    <li className="nav-item" key={index}>
                      <button
                        className="nav-link"
                        onClick={() => this.handleCategoryClick(kategori.id)}
                      >
                        {kategori.ad} <span className="sr-only">(current)</span>
                      </button>
                    </li>
                  ))}
                  <div className="toggleCart">
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>{" "}
                    <ul className="nav-item toggledList" key="111">
                      {carts.map((cart) => (
                        <li>
                          <strong>{cart.baslik}</strong>
                          <img
                            style={{
                              textAlign: "center",
                            }}
                            src={cart.resim}
                            width="40"
                          />
                          <strong>{cart.fiyat} ₺</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
