import React, { useState } from 'react';
import Loading from '../images/loading.gif';
import debounce from 'lodash.debounce';
import '../styles/Search.scss';

const Search = ({ data, searchSuperHeros, term, setTerm, heros }) => {
  const [searchText, setSearchText] = useState(''); //Es lo mismo que setterm?
  const [suggest, setSuggest] = useState([]);

  const handleSubmit = (e, term) => {
    e.preventDefault();
    searchSuperHeros(term);
    setTerm('');
  };

  const handleSearch = debounce((e) => {
    let searchValue = e.target.value;
    // let suggestion = [];
    // if (searchValue.length > 0) {
    //   suggestion = data
    //     .sort()
    //     .filter((e) => e.toLowerCase().includes(searchValue.toLowerCase()));
    // }
    // console.log(suggestion);
    // setSuggest(suggestion);
    setTerm(searchValue);
  }, 1000);

  console.log(heros);

  if (!heros) {
    return (
      <div className="loading-container">
        <img src={Loading} alt="" className="loading"></img>
      </div>
    );
  }

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
          onClick={() => searchSuperHeros(term)}></div>
      </div>
      <div className="search-result">
        {data.map((value, i) => (
          <div className="search-item" key={i}>
            {value.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
