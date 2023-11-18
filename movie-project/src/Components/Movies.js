import React, { Component } from "react";
import FavoriteButton from "./FavoriteButton";
import MovieModal from "./MovieModal";
export default class Movies extends Component {
  horizontalScroll(event) {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 250;
  }
  render() {
    let movies = this.props.movies;
    let favoriteMovies = this.props.favoriteMovies;
    if (this.props.currentCategory === "Favoriler") {
      movies = favoriteMovies;
    }
    return (
      <div className="wrapper-cards">
        <h2>{this.props.currentCategory}</h2>
        <div className="above-cards">
          <div className="cards" onWheel={this.horizontalScroll}>
            {movies.map((movie) => (
              <div className="card" key={movie.id}>
                <img
                  width="100%"
                  height="100%"
                  src={movie.image}
                  alt={movie.movieName}
                />

                <div className="cardBody">
                  <MovieModal
                    movie={movie}
                    changeFavorite={this.props.changeFavorite}
                  />
                  <div className="cardTitle">{movie.movieName}</div>
                  <div className="cardText">{movie.desc}</div>
                  <div className="cardText">
                    <small className="text-muted">{movie.price} ₺</small>
                  </div>

                  <FavoriteButton
                    movie={movie}
                    changeFavorite={this.props.changeFavorite}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vVJeYMRam0o?autoplay=1&si=rb30dYNM5wtRZyPR&amp;controls=0&amp"
        ></iframe> */}
      </div>
    );
  }
}
