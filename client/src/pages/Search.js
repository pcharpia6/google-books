import React, { Component } from 'react';
import API from '../utils/API';
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";


class Search extends Component {
  state = { 
    books:[]
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
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and save books of interest.</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-9">
            <form>
              <h4>Search for a Book</h4>
              <Input name="title" placeholder="Book Title" />
              <FormBtn>Search</FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Book />
                    <SaveBtn />
                  </ListItem>
                ))}
              </List>
            )}
          </Col>
        </Row>
      </Container>
     );
  }
};
 
export default Search;