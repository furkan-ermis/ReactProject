import React, { Component } from "react";
import logo from "../logo.png";
import Categories from "./Categories";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategorilerData: [],
      selectedCategoryId: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/kategoriler")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ kategorilerData: data });
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#212529", margin: "0", padding: "0" }}>
          <div>
            <div className="row">
              <div className="col-12 col-md-3">
                <img src={logo} alt="img" className="fh5co_logo_width" />
              </div>
              <div className="col-12 col-md-9 align-self-center ">
                <Categories
                  Kategoriler={this.state.kategorilerData}
                  onCategorySelect={this.props.onCategorySelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
