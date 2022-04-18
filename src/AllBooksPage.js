import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class AllBooksPage extends Component {
  render() {
    const { bookracks, books, onMove } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookracks.map(shelf => (
              <Bookshelf
                key={shelf.key}
                shelf={shelf}
                books={books}
                onMove={onMove}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
            <button>Add a Book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AllBooksPage;
