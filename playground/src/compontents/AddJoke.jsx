import React from "react";

const AddJoke = (props) => {
    const {jokeList} = props
    // console.log(jokeList)
    return (
        <>
        {jokeList.map((joke, idx) => (
            <div key={idx}>
                <p>{joke}</p>
            </div>
        ))}
        </>
        
    )
}

export default AddJoke;