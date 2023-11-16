import React, { Component } from "react";
import CardsModal from "./CardsModal";
import Popular from "./Popular";
import Tags from "./Tags";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchCards();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      this.fetchCards();
    }
  }

  fetchCards() {
    const apiUrl = this.props.selectedCategory
      ? `http://localhost:3000/urunler?kategoriId=${this.props.selectedCategory}`
      : "http://localhost:3000/urunler";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Gelen veri:", data);
        if (data) {
          this.setState({ cards: data });
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
    const { cards, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div
        className="row mx-0"
        style={{ backgroundColor: "#484848", padding: "10px" }}
      >
        <div className="col-md-9 animate-box" data-animate-effect="fadeInRight">
          <Tags />
        </div>
        <div className="clearfix"></div>
        <div
          className="col-md-12 animate-box"
          data-animate-effect="fadeInRight"
        >
          <div>
            <div className="fh5co_heading fh5co_heading_border_bottom text-white pt-3 py-2 mb-4">
              En Çok Satın Alınanlar
            </div>
          </div>
          <Popular onCardClick={this.props.onCardClick} />
        </div>
        <div
          className=" animate-box text-white"
          style={{ backgroundColor: "#1f1f1f", padding: "10px" }}
          data-animate-effect="fadeIn"
        >
          <div className="row text-white">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => this.props.onCardClick(card)}
                className="col-md-2"
              >
                <div className="pb-4">
                  <div className="col-md-12">
                    <div className="fh5co_hover_news_img">
                      <div className="fh5co_news_img d-flex">
                        <img src={card.resim} alt="" width="20px !important" />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="col-md-12 animate-box">
                    <h3
                      className="fh5co_magna py-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      {card.baslik}
                    </h3>
                    <div className="fh5co_consectetur">{card.aciklama}</div>
                    <div className="fh5co_consectetur">
                      <i className="fa fa-heart-o"></i> {card.favoriSayisi}
                    </div>
                    <div className="fh5co_consectetur">{card.fiyat} ₺</div>
                    <button
                      className="btn btn-primary"
                      onClick={() => card && this.props.addToCart(card)}
                    >
                      sepete ekle
                    </button>
                    <div className="fh5co_consectetur">
                      {card.tag.map((tag, index) => (
                        <a key={index} href="test" className="fh5co_tagg">
                          {tag}
                        </a>
                      ))}
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="col-md-12 animate-box"
          data-animate-effect="fadeInRight"
        ></div>
        {this.props.selectedCard && (
          <CardsModal
            card={this.props.selectedCard}
            onClose={this.props.onClose}
            showModal={this.props.showModal}
            cards={this.state.cards}
          />
        )}
      </div>
    );
  }
}

export default Cards;
