import React, { Component } from "react";
import logo from "../logo.png";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: "0",
    };
  }
  handleCategoryClick = (kategoriId) => {
    this.props.onCategorySelect(kategoriId);
  };
  showCart = () => {
    this.setState({ opacity: "1" });
  };
  render() {
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
                  <button
                    onClick={() => this.showCart()}
                    style={{
                      zIndex: "11",
                      width: "20%",
                      textAlign: "center",
                      color: "black",
                      backgroundColor: "transparent",
                    }}
                    className="col-4 col-md-3"
                  >
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>{" "}
                  </button>
                </ul>
                <li
                  style={{
                    position: "fixed",
                    opacity: this.state.opacity,
                    right: "0px",
                    zIndex: "11",
                    width: "20%",
                    textAlign: "center",
                    backgroundColor: "red",
                  }}
                  className="nav-item"
                  key="111"
                >
                  {this.props.cartList}
                </li>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
