import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import "./site.css";
export default class App extends Component {
  state = {
    currentCategory: "",
    movies: [],
    fav: [],
    statu: false,
  };
  chanceCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getMovies(category.id);
    this.setState({ statu: false });
  };
  getMovies = (categoryId) => {
    let url = "http://localhost:3000/movies";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data }));
  };

  getFavs = () => {
    this.setState({ currentCategory: "Favoriler" });
    this.setState({ statu: true });
  };
  componentDidMount() {
    this.getMovies();
  }

  addToFav = (movie) => {
    this.setState({ statu: false });
    movie.isFavorite = !movie.isFavorite;
    let newFav = this.state.movies.filter((c) => c.isFavorite === true);
    this.setState({ fav: newFav });
  };

  removeToFav = (movie) => {
    movie.isFavorite = !movie.isFavorite;

    let newFav = this.state.movies.filter((c) => c.isFavorite === true);
    this.setState({ fav: newFav });
  };

  render() {
    return (
      <div className="main">
        <Header
          fav={this.state.fav}
          statu={this.state.statu}
          getFavs={this.getFavs}
        />
        <Container>
          <Row>
            <Categories
              chanceCategory={this.chanceCategory}
              currentCategory={this.state.currentCategory}
            />
            <Movies
              addToFav={this.addToFav}
              removeToFav={this.removeToFav}
              movies={this.state.movies}
              fav={this.state.fav}
              statu={this.state.statu}
              currentCategory={this.state.currentCategory}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
