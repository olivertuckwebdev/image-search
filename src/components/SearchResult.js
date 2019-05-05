import React from 'react';
import './SearchResult.scss';

const SearchResult = props => {
  return (
    <div className="search-result">
      <img src={props.src} alt={props.alt} className="img-fluid" />
      <div className="information p-3">
        <h2 className="mb-0">Title</h2>
      </div>
    </div>
  );
};

export default SearchResult;
