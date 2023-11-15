import React, { Component } from "react";
import Slider from "./Slider";
class Slider1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerCards: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/urunler")
      .then((response) => response.json())
      .then((data) => {
        console.log("Gelen veri:", data);
        if (data) {
          const bannerCards = data.filter((card) => card.banner === 1);
          this.setState({ bannerCards: bannerCards });
        } else {
          this.setState({ error: "API verisi beklenen formatta değil" });
        }
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        this.setState({ error: "Veri çekme hatası" });
      });
  }

  render() {
    const { bannerCards, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <>
        <Slider items={bannerCards} onCardClick={this.props.onCardClick} />
      </>
    );
  }
}

export default Slider1;
