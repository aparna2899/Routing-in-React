import React from 'react';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    let booksArray = [];
    if (!this.state.searchInput) {
      booksArray = this.props.data;
    } else {
      for (let i = 0; i < this.props.data.length; i++) {
        if (this.props.data[i].title.includes(this.state.searchInput)) {
          booksArray.push(this.props.data[i]);
        }
      }
    }
    return (
      <main className="flex-85">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleInput}
        />

        <ul className="flex wrap flex-between">
          {booksArray.map((book) => (
            <li className="card center flex-20">
              <div className="img-box center">
                <img src={book.image} alt="" />
              </div>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <a href={book.website}>
                <button>Buy Now</button>
              </a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
export default Books;
