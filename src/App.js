import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = `https://superheroapi.com/api/10159438099248670/245`;

const fetchSuperheroes = async () => {
  const res = await axios.get(BASE_URL);
  const data = res.json();
  console.log(data);
};

function App() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  return (
    <div className="App">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="/"
            tabIndex="-1"
            aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
