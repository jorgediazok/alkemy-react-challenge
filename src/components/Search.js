import React, { useState } from 'react';

import debounce from 'lodash.debounce';
import '../styles/Search.scss';

const Search = ({ data, searchSuperHeros, term, setTerm, heros }) => {
  //STATES
  const [suggest, setSuggest] = useState([]);

  //SUBMIT FORM
  const handleSubmit = (e, term) => {
    e.preventDefault();
    searchSuperHeros(term);
    setSuggest([]);
    setTerm('');
  };

  //HANDLE SEARCH
  const handleSearch = debounce((e) => {
    let searchValue = e.target.value;
    let suggestion = [];

    const regex = new RegExp(`^${searchValue}`, `i`);
    suggestion = data.sort().filter((option) => regex.test(option.name));
    if (searchValue === '') {
      setSuggest([]);
      setTerm('');
    } else {
      setSuggest(suggestion);
      setTerm(searchValue);
    }
  }, 1000);

  return (
    <>
      <div className="search-container-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search Hero ... "
            autoFocus
            onChange={handleSearch}
          />
        </form>
        <div
          className="fa fa-search search-icon"
          onClick={() => searchSuperHeros(term) && setSuggest([])}></div>
      </div>
      <div className="search-result">
        {suggest.map(
          (value) =>
            suggest !== 0 && (
              <div
                className="search-item"
                key={value.id}
                onClick={() => searchSuperHeros(term) && setSuggest([])}>
                {value.name}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Search;
