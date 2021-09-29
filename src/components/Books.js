import React, { Component } from "react";
import Search from "./Search";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      sort: "",
    };
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };
  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          onChange={(e) => this.handleSearch(e)}
        />
      </div>
    );
  }
}

export default Books;
