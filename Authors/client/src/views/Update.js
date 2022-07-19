import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Update = (props) => {
    const { _id } = useParams();
    const [name, setName] = useState(''); //Change this line
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    // Change the lines below to match current projects params
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                setName(res.data.name);
                console.log(res.data)
                console.log(_id)
            })
    }, [_id]);

    // Change the lines below to match current projects params
    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${_id}`, {
            name
        })
            .then(res => {
                console.log(res)
                navigate("/authors")
            })
            .catch(err => {
                console.log(err)
                // Get the errors from err.response.data
                const errorResponse = err.response.data.errors;
                // Define a temp error array to push the messages in
                const errorArr = [];
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    // Change the lines below to match current projects params
    return (
        <div className='w-25'>
            <h1>Favorite Authors</h1>
            <h4>Edit This Author:</h4>
            <form onSubmit={updateAuthor}>
                {/* To display the errors add this line below  */}
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-group'>
                    <label>Name</label><br />
                    <input className='form-control' type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='d-flex gap-1'>
                <Link to={`/authors`} >
                    <button className='btn btn-primary mt-1  '>Cancel</button>
                </Link>
                <input type="submit" className='btn btn-primary mt-1 '/>
                </div>
            </form>
        </div>
    )
}

export default Update;