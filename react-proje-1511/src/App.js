import React, { Component } from "react";
import "./App.css";
import Cards from "./Component/Cards";
import Header from "./Component/Header";
import Slider1 from "./Component/Slider1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryId: null,
      selectedCard: null,
      cartList: [],
    };
  }
  handleCategorySelect = (selectedCategoryId) => {
    this.setState({ selectedCategoryId });
  };
  addToCart = (item) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, item],
    }));
  };

  render() {
    return (
      <div>
        <Header
          cartList={this.state.cartList}
          onCategorySelect={this.handleCategorySelect}
        />
        <Slider1 />
        <Cards
          addToCart={this.addToCart}
          selectedCategory={this.state.selectedCategoryId}
          selectedCard={this.state.selectedCard}
        />
      </div>
    );
  }
}

export default App;
