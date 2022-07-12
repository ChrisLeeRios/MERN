import React from 'react'

export default function FetchPokemon(props) {
    const {handleFetchClick , pokemons , error} = props
    return (
        <>
            <button onClick={handleFetchClick} className="fetch-poke-btn">FETCH POKEMON</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <hr />
            <ul className=''>
                {pokemons && pokemons.map((pokemon, i) =>
                    <li key={i} >{pokemon.name}</li>
                )}
            </ul>
        </>
    )
}
