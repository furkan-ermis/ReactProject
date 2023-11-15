import React, { Component } from "react";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularCards: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/urunler")
      .then((response) => response.json())
      .then((data) => {
        console.log("Gelen veri:", data);
        if (data) {
          const sortedCards = data.sort(
            (a, b) => b.favoriSayisi - a.favoriSayisi
          );
          const popularCards = sortedCards.slice(0, 6);
          this.setState({ popularCards: popularCards });
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
    const { popularCards, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="d-flex">
        <div className="row pb-3">
          {popularCards.map((card, index) => (
            <>
              <div
                key={index}
                className="col-1 align-self-center"
                onClick={() => this.props.onCardClick(card)}
              >
                <img
                  src={card.resim}
                  alt="img"
                  className="fh5co_most_trading"
                />
              </div>
              <div className="col-1 paddding">
                <div className="most_fh5co_treding_font">{card.baslik}</div>
                <div className="fh5co_consectetur">
                  <i className="fa fa-heart-o"></i> {card.favoriSayisi}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Popular;
