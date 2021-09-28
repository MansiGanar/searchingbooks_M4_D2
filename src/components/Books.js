import React, { Component } from "react";
import Search from "./Search";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }
  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };
  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Books;
