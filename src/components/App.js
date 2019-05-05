import React, { Component } from 'react';
import api from '../api/api';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class App extends Component {
  state = { isResults: false, searchTerm: null, searchResults: [] };

  onSearchSubmit = async searchTerm => {
    const response = await api.get('/search/photos', {
      params: { query: searchTerm }
    });

    this.setState({
      isResults: true,
      searchTerm,
      searchResults: response.data.results
    });
  };

  isResults = () => {
    if (this.state.isResults) {
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
        {this.isResults()}
      </div>
    );
  }
}

export default App;
