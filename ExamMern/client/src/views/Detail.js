import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [exam, setExam] = useState({}) // Change this line
    const { _id } = useParams();
    const navigate = useNavigate();

    // Change these lines to match current project route and states
    useEffect(() => {
        axios.get(`http://localhost:8000/api/exams/${_id}`)
            .then(res => setExam(res.data))
            .catch(err => console.error(err));
    }, [_id]);

    const deleteExam = (_Id) => {
        axios.delete(`http://localhost:8000/api/exams/${_Id}`)
            .then(res => {
                // removeFromDom(_Id)
                navigate(`/exams`)
            })
            .catch(err => console.error(err));

    }

    // Change these lines to match current project route and states
    return (
        <div className='w-100 mx-auto' >
            <div className='d-flex align-items-center justify-content-center gap-5' >
                <h1>{exam.title}</h1>
                <Link to={`/exams`}>
                    <button className='btn-primary' >Crew Board</button>
                </Link>
            </div>
            <hr />
            <div className='d-flex gap-5 justify-content-center'>
                <div>
                    <img
                        className="shadow rounded"
                        width="100%"
                        src={exam.imgUrl}
                        alt="Welp, no pic here bud"
                    />
                    <h2>"{exam.description}"</h2>
                </div>
                <div>
                    <h2>About</h2>
                    <p>Position: {exam.expirationDate}</p>
                    <p>Treasures: {exam.price}</p>
                    {exam.isExpensive === true && <p>Peg Leg: Yes</p>}
                    {exam.isExpensive !== true && <p>Peg Leg: No</p>}
                    {exam.eyePatch === true && <p>Eye Patch: Yes</p>}
                    {exam.eyePatch !== true && <p>Eye Patch: No</p>}
                    {exam.hookHand === true && <p>Hook Hand: Yes</p>}
                    {exam.hookHand !== true && <p>Hook Hand: No</p>}
                    <div className='d-flex gap-1 justify-content-center' >
                        {/* <Link to={`/exams/${exam._id}/edit`}>
                            <button className='btn-warning' >Edit</button>
                        </Link> */}
                        {/* <Link to={`/exams/${exam._id}`}>
                    <button className='btn-primary' >Details</button>
                </Link> */}
                        <Link to={`/exams`} >
                            <button className='btn-primary '>Home</button>
                        </Link>
                        <button className='btn-danger' onClick={(e) => { deleteExam(exam._id) }}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;