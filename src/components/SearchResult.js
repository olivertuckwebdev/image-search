import React from 'react';
import { FaHeart, FaDownload } from 'react-icons/fa';
import './SearchResult.scss';

const SearchResult = props => {
  return (
    <div className="search-result">
      <img src={props.src} alt={props.alt} className="img-fluid" />
      <div className="information d-flex justify-content-between px-2 px-sm-0 mt-2">
        <div className="d-flex align-items-center">
          <FaHeart className="mr-1 text-likes" />
          <span className="font-weight-bold">{props.likes}</span>
        </div>
        <a
          href={props.srcFull}
          className="d-flex align-items-center btn btn-sm btn-dark"
          download
        >
          Download
          <FaDownload className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default SearchResult;
