import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


// Change all persons and people and params from dot notation to match current project
const ExamList = (props) => {

    const { removeFromDom } = props;

    const deleteExam = (_Id) => {
        axios.delete(`http://localhost:8000/api/exams/${_Id}`)
            .then(res => {
                removeFromDom(_Id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='w-100 mx-auto' >
            <div className='d-flex align-items-center justify-content-center gap-5' >
                <h1>Pirate Crew</h1>
                <Link to={`/exams/create`}>
                    <button className='btn-primary' >Add Pirate</button>
                </Link>
            </div>
            <hr />
            {props.exams.map((exam, i) =>
                <div className='justify-content-center mb-4 d-flex gap-4' key={i} >
                    <img
                        className="shadow rounded"
                        width="10%"
                        src={exam.imgUrl}
                        alt="Welp, no pic here bud"
                    />
                    <div className='text-center' >
                        <h3>{exam.title}</h3>
                        {/* <p>Price: {exam.price}</p>
                    <p>Description: {exam.description}</p>
                    <p>Expiration Date: {exam.expirationDate}</p> */}
                        {/* {exam.isExpensive === true && <p>This Is Expensive</p>}
                    {exam.isExpensive !== true && <p>This Is Cheap</p>} */}
                        <div className='d-flex gap-1 justify-content-center' >
                            {/* <Link to={`/exams/${exam._id}/edit`}>
                        <button className='btn-warning' >Edit</button>
                    </Link> */}
                            <Link to={`/exams/${exam._id}`}>
                                <button className='btn-primary' >View Pirate</button>
                            </Link>
                            <button className='btn-danger' onClick={(e) => { deleteExam(exam._id) }}>
                                Walk The Plank
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExamList;