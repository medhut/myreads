import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './BookShelfChanger';
import noCover from './images/noCover.png';

const Book = (props) => {
  const { book, books, changeShelf } = props;

  const cover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail: noCover;

const title = book.title ? book.title : 'No title available';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${cover})` }}>
          </div>
          <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
