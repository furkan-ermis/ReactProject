import React, { useState } from "react";

const CardsModal = ({ card, onClose, showModal }) => {
  const [favorited, setFavorited] = useState(false);

  const handleFavoriteClick = () => {
    const updatedData = {
      kategoriId: card.kategoriId,
      baslik: card.baslik,
      aciklama: card.aciklama,
      resim: card.resim,
      favoriSayisi: card.favoriSayisi + 1,
      banner: card.banner,
      date: card.date,
      tag: card.tag,
    };

    fetch(`http://localhost:3000/urunler/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Favori eklendi:", data);
        setFavorited(true);
      })
      .catch((error) => console.error("Favori ekleme hatası:", error));
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{
        display: showModal ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{card.baslik}</h5>
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {card.resim && (
              <img src={card.resim} alt={card.baslik} className="img-fluid" />
            )}
            <p>{card.aciklama}</p>
            <div className="fh5co_consectetur">
              <i className="fa fa-heart-o"></i> {card.favoriSayisi}
            </div>

            <div className="fh5co_consectetur">
              <i className="fa fa-clock-o"></i> {card.date}
            </div>
            {!favorited && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleFavoriteClick}
              >
                Favoriye Ekle
              </button>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsModal;
