import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function People(props) {
    const [display, setDisplay] = useState(null)
    const [error, setError] = useState(null)
    const { searchId } = useParams();
    useEffect(() => {

        axios.get(`https://swapi.dev/api/people/${searchId}`)
            .then((result) => {
                console.log(result)
                setDisplay(result.data)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
                // setIsPerson(false)
                // setIsPlanet(false)
                console.log(error);
            })
            .finally(() => {
                // setIsLoading(false)
            })
    }, [searchId]);

    return (
        <div>
            {error ?
                <>
                    <p style={{ color: 'red' }}>These aren't the droids you're looking for</p>
                    <p style={{ color: 'red' }}>{error}</p>
                    <img style={{ height: 300 }} src="https://i.kym-cdn.com/entries/icons/mobile/000/018/682/obi-wan.jpg" alt="Obi" ></img>
                </> :
                <>
                    <h2>Name: {display && display.name}</h2>
                    <h2>Height: {display && display.height}</h2>
                    <h2>Mass: {display && display.mass}</h2>
                    <h2>Birth Year: {display && display.birth_year}</h2>
                </>
            }

        </div>

    )
}
