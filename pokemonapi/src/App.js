import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import FetchPokemon from './components/FetchPokemon';

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
      <FetchPokemon 
      handleFetchClick={handleFetchClick} 
      pokemons={pokemons} 
      error={error}/>
    </div>
  );
}

export default App;
