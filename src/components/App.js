import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaCamera } from 'react-icons/fa';
import api from '../api/api';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './App.scss';

class App extends Component {
  state = { searchTerm: '', searchResults: [] };

  onSearchSubmit = async searchTerm => {
    const response = await api.get('/search/photos', {
      params: { query: searchTerm, per_page: 30 }
    });

    this.setState({
      searchTerm,
      searchResults: response.data.results
    });
  };

  isSearch = () => {
    if (this.state.searchResults.length > 0 || this.state.searchTerm) {
      return (
        <SearchResults
          searchTerm={this.state.searchTerm}
          searchResults={this.state.searchResults}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="fixed-top py-4 bg-white shadow-sm">
          <Container>
            <Row className="align-items-center">
              <Col
                md={3}
                className="d-flex justify-content-center justify-content-md-start mb-4 mb-md-0"
              >
                <FaCamera size={32} />
              </Col>
              <Col md={6}>
                <SearchBar onSubmit={this.onSearchSubmit} />
              </Col>
            </Row>
          </Container>
        </header>
        <main className="search-results py-5">
          <Container>{this.isSearch()}</Container>
        </main>
      </div>
    );
  }
}

export default App;
