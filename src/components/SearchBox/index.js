import React, { Component } from "react";
import { Link } from "gatsby";
import { Index } from "elasticlunr";

import { SearchOutlined } from "@ant-design/icons";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
      isActive: false,
    };
  }

  render() {
    return (
      <div className={`search-area ${this.state.isActive ? "is-active" : ""}`}>
        <label htmlFor="search-field">
          <SearchOutlined />
          <span className="qs">Quick Search</span>
          <input
            type="text"
            value={this.state.query}
            onChange={this.search}
            id="search-field"
            placeholder="Search"
            aria-label="search"
          />
        </label>

        <div className="navbar-dropdown">
          {this.state.results.map((page) => (
            <Link className="navbar-item" key={page.id} to={page.slug}>
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex);

  search = (evt) => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      isActive: !!query,
    });
  };
}
