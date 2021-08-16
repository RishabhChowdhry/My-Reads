import React, { Component } from "react";
import { connect } from "react-redux";
import { filterbooks, sortbooks } from "../actions/productActions";

class Filter extends Component {
  render() {
    return !this.props.filteredbooks ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredbroducts.length} books
        </div>
        <div className="filter-sort">
          Order{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortbooks(
                this.props.filteredbooks,
                e.target.value
              )
            }
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterbooks(this.props.books, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="Rl">Real Life</option>
            <option value="In">Inspiring</option>
            <option value="M">Moral</option>
            <option value="Mo">Motivation</option>
            <option value="Mi">Money Investing</option>
            <option value="Fi">Finance</option>
            <option value="Su">Suspense</option>
            <option value="Th">Thriller</option>
            <option value="Cr">Crime</option>
            <option value="NR">Fiction</option>
            <option value="Su">Murder Mysteries</option>
          </select>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    size: state.books.size,
    sort: state.books.sort,
    books: state.books.items,
    filteredbooks: state.books.filteredItems,
  }),
  {
    filterbooks,
    sortbooks,
  }
)(Filter);
