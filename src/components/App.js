import React, { Component } from 'react';
import { Container } from 'reactstrap';
import api from '../api/api';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class App extends Component {
  state = { searchTerm: '', searchResults: [] };

  onSearchSubmit = async searchTerm => {
    const response = await api.get('/search/photos', {
      params: { query: searchTerm }
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
        <SearchBar onSubmit={this.onSearchSubmit} />
        <main className="search-results py-5">
          <Container>{this.isSearch()}</Container>
        </main>
      </div>
    );
  }
}

export default App;
