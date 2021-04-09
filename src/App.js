import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './css/App.css';
import ListBooks from './ListBooks';
import Search from './Search';

class MyReads extends Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  changeShelf = (item, shelf) => {
    BooksAPI.update(item, shelf).then(response => {
      item.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== item.id)
          .concat(item)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <ListBooks books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search"><button>Add Book</button></Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default MyReads;
