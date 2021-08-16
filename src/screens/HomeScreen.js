import React, { Component } from "react";
import Filter from "../components/Filter";
import Cart from "../components/Cart";
import Books from "../Components/Books";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter></Filter>
            <Books></Books>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
