import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import "./site.css";
export default class App extends Component {
  state = {
    currentCategory: "",
    movies: [],
    favoriteMovies: [],
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = (categoryId) => {
    let url = "http://localhost:3000/movies";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data }));
  };
  // Kategori değiştirme fonksiyonu ve ekrana filmleri getirme
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getMovies(category.id);
  };
  // Favorilere ekleme işlemleri ve json dosyasına yazma ve okuma
  updateFavorite = (movie) => {
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then(() => {
        return fetch(`http://localhost:3000/movies?isFavorite=true`);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ favoriteMovies: data });
      });
  };
  getFavs = () => {
    this.setState({ currentCategory: "Favoriler" });
  };
  changeFavorite = (movie) => {
    movie.isFavorite = !movie.isFavorite;
    this.updateFavorite(movie);
  };

  render() {
    return (
      <div className="main">
        <Header getFavs={this.getFavs} />
        <Container>
          <Row>
            <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
            />
            <Movies
              changeFavorite={this.changeFavorite}
              movies={this.state.movies}
              favoriteMovies={this.state.favoriteMovies}
              currentCategory={this.state.currentCategory}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
