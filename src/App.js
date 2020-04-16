import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBook from './ListBook';
import BookSearch from './BookSearch';
import './App.css';

class BooksApp extends Component {
  state = {
    Books: [],
  }

  componentDidMount() {
    this.fetchBooksDetails()
  }

  fetchBooksDetails = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    })
  }

  updateBooksDetails = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooksDetails()
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => 
         (<ListBook
         books={this.state.Books}
         onChange={this.updateBooksDetails}/>)}
        />

        <Route exact path="/search" render={({history}) => 
          (<BookSearch 
          onChange={this.updateBooksDetails}
          myBooks={this.state.Books}/>)}
        />
      </div>
    )
  }
}

export default BooksApp;
