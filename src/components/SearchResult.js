import React, { Component } from 'react';
import { FaHeart, FaDownload } from 'react-icons/fa';
import './SearchResult.scss';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.resultImageRef = React.createRef();
  }

  componentDidMount() {
    this.resultImageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.resultImageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    console.log('called');

    this.setState({
      spans
    });
  };

  render() {
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className="search-result"
      >
        <img
          ref={this.resultImageRef}
          src={this.props.src}
          alt={this.props.alt}
          className="img-fluid"
        />
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
