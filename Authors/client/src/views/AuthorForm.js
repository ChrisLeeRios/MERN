import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
const AuthorForm = () => {
    //keep track of what is being typed via useState hook
    // Change the use states to match current thingyyyyy

    const [name, setName] = useState("");
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new author
        // Change route and params to match current thingyyyy
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then((res) => {
                console.log(res)
                setName("");
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
    //onChange to update title and price and description
    return (
        <div className='w-25'>
            <h1>Favorite Authors</h1>
            <h4>Add A New Author:</h4>
            <form onSubmit={onSubmitHandler}>
                {/* To display the errors add this line below  */}
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-group'>
                    <label>Name</label><br />
                    <input className='form-control' type="text" onChange={(e) => setName(e.target.value)} value={name} />
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

export default AuthorForm;