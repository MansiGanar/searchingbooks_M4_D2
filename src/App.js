import React, { Component } from "react";
import Header from "./components/Header";
import Books from "./components/Books";
import SeeBooks from "./components/SeeBooks";
import "./App.css";
import SeeComments from "./components/SeeComments";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
        <SeeBooks />
        <SeeComments />
      </div>
    );
  }
}

export default App;
