import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [author, setAuthor] = useState({}) // Change this line
    const { _id } = useParams();
    const navigate = useNavigate();

    // Change these lines to match current project route and states
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, [_id]);

    const deleteAuthor = (_Id) => {
        axios.delete(`http://localhost:8000/api/authors/${_Id}`)
            .then(res => {
                // removeFromDom(_Id)
                navigate(`/authors`)
            })
            .catch(err => console.error(err));

    }

    // Change these lines to match current project route and states
    return (
        <div>
            <p>Name: {author.name}</p>
            <Link to={`/authors/${author._id}/edit`}>
                Edit
            </Link>
            <button onClick={(e) => { deleteAuthor(author._id) }}>
                Delete
            </button>
        </div>
    )
}

export default Detail;