import React from 'react';
import SearchResult from './SearchResult';
import './SearchResults.scss';

const SearchResults = props => {
  const results = props.searchResults.map(
    ({ id, urls, alt_description, likes }) => {
      return (
        <SearchResult
          key={id}
          src={urls.regular}
          srcFull={urls.full}
          alt={alt_description}
          likes={likes}
        />
      );
    }
  );

  return (
    <React.Fragment>
      <h1 className="mb-5">
        {`${results.length} results for ${props.searchTerm}`}
      </h1>
      <div className="search-results-grid">{results}</div>
    </React.Fragment>
  );
};

export default SearchResults;
