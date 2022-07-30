import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const ExamForm = () => {
    //keep track of what is being typed via useState hook
    // Change the use states to match current thingyyyyy

    const [title, setTitle] = useState(""); //Change this line
    const [price, setPrice] = useState(""); //Change this line
    const [description, setDescription] = useState(""); //Change this line
    const [imgUrl, setImgUrl] = useState(""); //Change this line
    const [expirationDate, setExpirationDate] = useState(""); //Change this line
    const [isExpensive, setIsExpensive] = useState(true); //Change this line
    const [eyePatch, setEyePatch] = useState(true); //Change this line
    const [hookHand, setHookHand] = useState(true); //Change this line
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new exam
        // Change route and params to match current thingyyyy
        axios.post('http://localhost:8000/api/exams', {
            title,
            price,
            description,
            imgUrl,
            expirationDate,
            isExpensive,
            eyePatch,
            hookHand
        })
            .then((res) => {
                console.log(res)
                setTitle("");
                setPrice("");
                setDescription("");
                setImgUrl("");
                setExpirationDate("Captain");
                setIsExpensive(true);
                setEyePatch(true);
                setHookHand(true);
                navigate("/exams")
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
        <div className='w-100 mx-auto' >
            <div className='d-flex align-items-center justify-content-center gap-5' >
                <h1>Add Pirate</h1>
                <Link to={`/exams`}>
                    <button className='btn-primary' >Crew Board</button>
                </Link>
            </div>
            <hr />
        <form onSubmit={onSubmitHandler} className='w-50 mx-auto' >
            {/* To display the errors add this line below  */}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className='form-group' >
                <label>Pirate Name</label><br />
                <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className='form-group' >
                <label>Image Url</label><br />
                <input className='form-control' type="text" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
            </div>
            <div className='form-group' >
                <label># Of Treasure Chests</label><br />
                <input className='form-control' type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>
            <div className='form-group' >
                <label>Pirate Catch Phrase</label><br />
                <input className='form-control' type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>
            <div className='form-group' >
                <label>Crew Position</label><br />
                <select className='form-control' type="text" onChange={(e) => setExpirationDate(e.target.value)} value={expirationDate} >
                    <option>Choose Position</option>
                    <option>Captain</option>
                    <option>First Mate</option>
                    <option>Quarter Master</option>
                    <option>Boatswain</option>
                    <option>Powder Monkey</option>
                </select>
            </div>
            <div className='form-group d-flex gap-2' >
            {isExpensive === true && <input checked className='form-check-input' type="checkbox" onChange={(e) => setIsExpensive(e.target.checked)} value={isExpensive} />}
            {isExpensive !== true && <input className='form-check-input' type="checkbox" onChange={(e) => setIsExpensive(e.target.checked)} value={isExpensive} />}
                <label>Peg Leg</label>
            </div>
            <div className='form-group d-flex gap-2' >
            {eyePatch === true && <input checked className='form-check-input' type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} value={eyePatch} />}
            {eyePatch !== true && <input  className='form-check-input' type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} value={eyePatch} />}
                <label>Eye Patch</label>
            </div>
            <div className='form-group d-flex gap-2' >
            {hookHand === true && <input checked className='form-check-input' type="checkbox" onChange={(e) => setHookHand(e.target.checked)} value={hookHand} />}
            {hookHand !== true && <input  className='form-check-input' type="checkbox" onChange={(e) => setHookHand(e.target.checked)} value={hookHand} />}
                <label>Hook Hand</label>
            </div>
            <div className='d-flex gap-1'>
                <Link to={`/exams`} >
                    <button className='btn btn-primary mt-1  '>Cancel</button>
                </Link>
                <input type="submit" className='btn btn-primary mt-1 '/>
                </div>
        </form>

        </div>
    )
}

export default ExamForm;