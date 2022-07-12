import React from 'react'

export default function People(props) {
    const {display} = props
    return (
                <div>
                    <h2>Name: {display && display.name}</h2>
                    <h2>Height: {display && display.height}</h2>
                    <h2>Mass: {display && display.mass}</h2>
                    <h2>Birth Year: {display && display.birth_year}</h2>
                </div>
    )
}
