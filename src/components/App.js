import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
