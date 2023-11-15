import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Categories extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <div className="categories">
          {this.state.categories.map((category) => (
            <div
              className="categoryItem"
              data-active={category.categoryName === this.props.currentCategory}
              onClick={() => this.props.chanceCategory(category)}
              key={category.id}
            >
              {category.categoryName}
              <span></span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
