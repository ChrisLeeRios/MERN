import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ExamForm from '../components/ExamForm'; // Change this line
import ExamList from '../components/ExamList'; // Change this line

const Main = (props) => {
    const [exams, setExams] = useState([]); // Change this line
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/exams')
            .then(res => {
                setExams(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [exams]);

    const removeFromDom = _Id => {
        setExams(exams.filter(exam => exam._id !== _Id));
    }

    // Change all perpson and peopple to match current project
    return (
        <div>
            {/* <ExamForm />
            <hr /> */}
            {loaded && <ExamList exams={exams}  removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;