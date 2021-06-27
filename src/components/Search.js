import React, { useState } from 'react';

//DEBOUNCE
import debounce from 'lodash.debounce';

//STYLES
import '../styles/Search.scss';

//ICONS
import { GoSearch } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

const Search = ({ data, searchSuperHeros, term, setTerm }) => {
  //STATES
  const [suggest, setSuggest] = useState([]);

  //SUBMIT FORM
  const handleSubmit = async (e, term) => {
    e.preventDefault();
    await searchSuperHeros(term);
    setSuggest([]);
    clearInput();
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

  //CLEAR INPUT

  const clearInput = () => {
    setSuggest([]);
    document.getElementById('input').value = '';
  };

  return (
    <>
      <div className="search-container-input">
        <form onSubmit={handleSubmit}>
          <input
            id="input"
            name="search"
            type="text"
            className="search-input"
            placeholder="Search Hero ... "
            autoFocus
            onChange={handleSearch}
          />
        </form>
        <div className="search-icon">
          {term === '' ? (
            <GoSearch onClick={() => searchSuperHeros(term)} />
          ) : (
            <GrClose onClick={clearInput} />
          )}
        </div>
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
