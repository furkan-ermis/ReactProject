import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
function FavoriteButton({ movie, changeFavorite }) {
  return (
    <>
      {movie.isFavorite ? (
        <button
          className="btn btn-outline-danger"
          onClick={() => changeFavorite(movie)}
        >
          Favorilerden Çıkar
          <span>
            &nbsp; &nbsp;
            <IoMdHeart size="18" />
          </span>
        </button>
      ) : (
        <button
          className="btn btn-outline-warning"
          onClick={() => changeFavorite(movie)}
        >
          Favorilere Ekle
          <span>
            &nbsp; &nbsp;
            <FaRegHeart size="18" />
          </span>
        </button>
      )}
    </>
  );
}

export default FavoriteButton;
