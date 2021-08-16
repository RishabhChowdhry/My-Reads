import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { fetchbooks } from "../actions/booksActions";
import { addToCart } from "../actions/cartActions";

class books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
    };
  }
  componentDidMount() {
    this.props.fetchbooks();
  }
  openModal = (books) => {
    this.setState({ books });
  };
  closeModal = () => {
    this.setState({ books: null });
  };
  render() {
    const { books } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.books ? (
            <div>Loading...</div>
          ) : (
            <ul className="books">
              {this.props.books.map((books) => (
                <li key={books._id}>
                  <div className="books">
                    <a
                      href={"#" + books._id}
                      onClick={() => this.openModal(books)}
                    >
                      <img src={books.image} alt={books.title}></img>
                      <p>{books.title}</p>
                    </a>
                    <div className="books-price">
                      <div>{formatCurrency(books.price)}</div>
                      
                      <button
                        onClick={() => this.props.addToCart(books)}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {books && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={books.image} alt={books.title}></img>
                <div className="books-details-description">
                  <p>
                    <strong>{books.title}</strong>
                  </p>
                  <p>{books.description}</p>
                  <p>
                    Avaiable Genre:{" "}
                    {books.availableGenre.map((x) => (
                      <span>
                        {" "}
                        <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(books.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(books);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
export default connect(
  (state) => ({ books: state.books.filteredItems }),
  {
    fetchbooks,
    addToCart,
  }
)(books)