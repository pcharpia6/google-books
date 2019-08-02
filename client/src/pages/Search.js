import React, { Component } from 'react';
import API from '../utils/API';
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";


class Search extends Component {
  state = { 
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
   }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  render() { 
    return ( 
      <Container fluid> 
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and save books of interest.</h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
     );
  }
};
 
export default Search;