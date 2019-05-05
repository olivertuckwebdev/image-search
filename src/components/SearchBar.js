import React, { Component } from 'react';
import { Container, Row, Col, Form, Input } from 'reactstrap';
import { FaCamera } from 'react-icons/fa';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <header className="py-4 shadow-sm">
        <Container>
          <Row className="align-items-center">
            <Col
              md={3}
              className="d-flex justify-content-center justify-content-md-start mb-4 mb-md-0"
            >
              <FaCamera size={32} />
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
