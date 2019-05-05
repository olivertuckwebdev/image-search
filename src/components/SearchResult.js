import React, { Component } from 'react';
import { FaHeart, FaDownload } from 'react-icons/fa';
import './SearchResult.scss';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.resultRef = React.createRef();
  }

  render() {
    return (
      <div ref={this.resultRef} className="search-result">
        <img src={this.props.src} alt={this.props.alt} className="img-fluid" />
        <div className="information d-flex justify-content-between px-2 px-sm-0 mt-2">
          <div className="d-flex align-items-center">
            <FaHeart className="mr-1 text-likes" />
            <span className="font-weight-bold">{this.props.likes}</span>
          </div>
          <a
            href={this.props.srcFull}
            className="d-flex align-items-center btn btn-sm btn-dark"
            download
          >
            Download
            <FaDownload className="ml-1" />
          </a>
        </div>
      </div>
    );
  }
}

export default SearchResult;
