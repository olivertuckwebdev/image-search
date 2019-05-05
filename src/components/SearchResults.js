import React from 'react';
import { Container } from 'reactstrap';
import SearchResult from './SearchResult';
import './SearchResults.scss';

const SearchResults = props => {
  const results = props.searchResults.map(({ id, urls, alt_description }) => {
    return <SearchResult key={id} src={urls.regular} alt={alt_description} />;
  });

  return (
    <main className="search-results py-5">
      <Container>
        <h1 className="mb-5">{props.searchTerm}</h1>
        <div className="search-results-grid">{results}</div>
      </Container>
    </main>
  );
};

export default SearchResults;
