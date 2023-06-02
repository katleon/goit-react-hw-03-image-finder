import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  static defaultProps = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    searchRequest: '',
    lastSearchRequest: '', // przechowuje ostatnio wyszukiwaną frazę
  };

  handleRequestChange = event => {
    this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchRequest.trim() === '') {
      return toast.warning('Search field is empty!');
    }

    if (this.state.searchRequest === this.state.lastSearchRequest) {
      return toast.warning('You have already searched for this phrase!');
    }

    this.props.onSearch(this.state.searchRequest);
    this.setState({
      searchRequest: '',
      lastSearchRequest: this.state.searchRequest,
    });
  };

  render() {
    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <FaSearch size={12} />
          </button>

          <input
            className={css.input}
            type="text"
            name="searchRequest"
            value={this.state.searchRequest}
            onChange={this.handleRequestChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
