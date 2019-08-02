import React, { Component } from 'react';
import API from '../utils/API';

class Saved extends Component {
  state = { 

   };

   componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  render() { 
    return ( 
      <h1>Replace me.</h1>
     );
  }
}
 
export default Saved;