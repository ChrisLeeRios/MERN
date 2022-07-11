import React, { useState } from 'react';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState(null);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFetchClick = (_event) => {
    setIsLoading(true)
    // fetch('http://httpstat.us/404')
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((pokemons) => {
        setPokemons(pokemons.results);
        setError(null);
        console.log(pokemons.results);
      })
      .catch((error) => {
        setError(error.message)
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className='container' >
      <button onClick={handleFetchClick} className="fetch-poke-btn">FETCH POKEMON</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <hr />
      <ul className=''>
        {pokemons && pokemons.map((pokemon, i ) => 
          <li key={i} >{pokemon.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
