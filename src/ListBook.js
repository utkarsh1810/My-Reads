import React from 'react'
import BookGrid from './BookGrid'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function ListBook(props) {
  
  const books = props.books;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookGrid
           books={books.filter((book) => 
           (book.shelf === "currentlyReading")
           )} 
           title="Currently Reading" 
           onChangeShelf={props.onChange}
          />

          <BookGrid 
          books={books.filter((book) => 
          (book.shelf === "read")
          )} 
          title="Read" 
          onChangeShelf={props.onChange}
          />

          <BookGrid 
          books={books.filter((book) => 
          (book.shelf === "wantToRead"))} 
          title="Want to Read" 
          onChangeShelf={props.onChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  ) 
}

ListBook.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ListBook;
