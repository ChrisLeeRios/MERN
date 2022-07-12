import React from 'react'
// import { useParams } from 'react-router-dom'

export default function Planet(props) {
    const {display} = props
    return (
        <div>
            <h2>Name: {display && display.name}</h2>
            <h2>Climate: {display && display.climate}</h2>
            <h2>Terrain: {display && display.terrain}</h2>
            <h2>Population: {display && display.population}</h2>
        </div>
    )
}
