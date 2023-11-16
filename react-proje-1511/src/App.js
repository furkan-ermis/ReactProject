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
      showModal: false,
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
  openModal = (card) => {
    this.setState({ selectedCard: card, showModal: true });
  };

  closeModal = () => {
    this.setState({ selectedCard: null, showModal: false });
  };
  render() {
    return (
      <div>
        <Header
          cartList={this.state.cartList}
          onCategorySelect={this.handleCategorySelect}
        />
        <Slider1 onCardClick={this.openModal} />
        <Cards
          onCardClick={this.openModal}
          showModal={this.state.showModal}
          onClose={this.closeModal}
          addToCart={this.addToCart}
          selectedCategory={this.state.selectedCategoryId}
          selectedCard={this.state.selectedCard}
        />
      </div>
    );
  }
}

export default App;
