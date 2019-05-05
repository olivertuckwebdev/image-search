import React, { Component } from 'react';
import { Container, Row, Col, Form, Input } from 'reactstrap';
import { FaGoogle } from 'react-icons/fa';

class SearchBar extends Component {
  render() {
    return (
      <header className="py-4 border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col
              lg={3}
              className="d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0"
            >
              <FaGoogle size={32} className="text-primary" />
            </Col>
            <Col lg={6}>
              <Form>
                <Input placeholder="Search" />
              </Form>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default SearchBar;
