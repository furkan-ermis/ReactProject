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
      showModal: false,
    };
  }
  handleCategorySelect = (selectedCategoryId) => {
    this.setState({ selectedCategoryId });
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
        <Header onCategorySelect={this.handleCategorySelect} />
        <Slider1 onCardClick={this.openModal} />
        <Cards
          selectedCategory={this.state.selectedCategoryId}
          onCardClick={this.openModal}
          showModal={this.state.showModal}
          selectedCard={this.state.selectedCard}
          onClose={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
