import React, { Component } from 'react';
import Search from '../pages/Search';
import Saved from '../pages/Saved';
import Nav from './Nav';

class Page extends Component {
  state = { 
    currentPage: "Search"
   };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Saved") {
      return <Saved />;
    };
  };

  render() { 
    return ( 
      <React.Fragment>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </React.Fragment>
     );
  }
}
 
export default Page;