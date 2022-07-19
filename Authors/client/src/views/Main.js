import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../components/AuthorList'; // Change this line

const Main = (props) => {
    const [authors, setAuthors] = useState([]); // Change this line
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [authors]);

    const removeFromDom = _Id => {
        setAuthors(authors.filter(author => author._id !== _Id));
    }

    // Change all perpson and peopple to match current project
    return (
        <div>
            {loaded && <AuthorList authors={authors}  removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;