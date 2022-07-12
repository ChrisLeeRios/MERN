import React from 'react'

export default function StarWarsSearchForm(props) {
    const {
        handleOnSubmitClick,
        noun,
        setNoun, 
        setSearchId,
        searchId} = props
    return (
        <div>
            <form onSubmit={(event) => {
                handleOnSubmitClick(event)
            }}>
                <label>Search For: </label>
                <select value={noun} onChange={(event) => {
                    setNoun(event.target.value);
                }}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    {/* <option value="starships">Starships</option> */}
                </select>
                <label>ID: </label>
                <input onChange={(event) => {
                    setSearchId(event.target.value);
                }}
                    type="number"
                    value={searchId}
                    id="searchId"
                    name="searchId"
                    min="1"
                    max="1000" ></input>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
