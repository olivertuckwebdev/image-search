import React, { Component } from 'react';
import { Container, Row, Col, Form, Input } from 'reactstrap';
import { FaGoogle } from 'react-icons/fa';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.searchTerm);
  };

  render() {
    return (
      <header className="py-4 border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col
              md={3}
              className="d-flex justify-content-center justify-content-md-start mb-4 mb-md-0"
            >
              <FaGoogle size={32} className="text-primary" />
            </Col>
            <Col md={6}>
              <Form onSubmit={this.onFormSubmit}>
                <Input
                  type="search"
                  placeholder="Search"
                  value={this.state.searchTerm}
                  onChange={e => this.setState({ searchTerm: e.target.value })}
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default SearchBar;
