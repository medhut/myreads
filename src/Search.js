import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    result: [],
    error: false
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // if user input => run the search
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ result: books, error: false })
          : this.setState({ result: [], error: true });
      });

    } else this.setState({ result: [], error: false });
  };

  render() {
    const { query, result, error } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {result.length > 0 && (
            <div>
              <h3>Search returned {result.length} books </h3>
              <ol className="books-grid">
                {result.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {error && (
            <h3> No Availale titles, Try another search </h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
