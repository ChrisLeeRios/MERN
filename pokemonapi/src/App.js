import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState(null);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFetchClick = (_event) => {
    setIsLoading(true)
    //fetch('http://httpstat.us/404')

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset807')
      // .then(result => setPokemons(result.data.results))
      .then((result) => {
        console.log(result)
        setPokemons(result.data.results)})
      // .catch(err => console.log(err))
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
        {pokemons && pokemons.map((pokemon, i) =>
          <li key={i} >{pokemon.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
