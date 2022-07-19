import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


// Change all persons and people and params from dot notation to match current project
const AuthorList = (props) => {

    const { removeFromDom } = props;

    const deleteAuthor = (_Id) => {
        axios.delete(`http://localhost:8000/api/authors/${_Id}`)
            .then(res => {
                removeFromDom(_Id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='w-50' >
            <h1>Favorite Authors</h1>
            <Link to={`/authors/create`}>
                <p>Add An Author</p>
            </Link>
            <h4>We Have Quotes By:</h4>
            <table className='table table-striped table-dark' >
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td className='d-flex gap-1' >
                                <Link to={`/authors/${author._id}/edit`}>
                                    <button className='btn-warning' >Edit</button>
                                </Link>
                                <button className='btn-danger ' onClick={(e) => { deleteAuthor(author._id) }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;