// import { useParams } from "react-router-dom";
// import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import axios from "axios";
import StarWarsSearchForm from "./components/StarWarsSearchForm";
import People from "./components/views/People";
import Planet from "./components/views/Planet";

function App() {
  // const [apiSearch, setApiSearch] = useState('')
  const [noun, setNoun] = useState('people')
  const [searchId, setSearchId] = useState(1)
  const [error, setError] = useState(null)
  const [display, setDisplay] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  const [isPerson, setIsPerson] = useState(false)
  const [isPlanet, setIsPlanet] = useState(false)


  const handleOnSubmitClick = (event) => {
    event.preventDefault();
    // setIsLoading(true)
    setNoun(noun)
    setSearchId(searchId)
    if (noun === "planets") {
      setIsPlanet(true)
      setIsPerson(false)
    } else {
      setIsPerson(true)
      setIsPlanet(false)
    }

    //fetch('http://httpstat.us/404')
    axios.get(`https://swapi.dev/api/${noun}/${searchId}`)
      .then((result) => {
        console.log(result)
        setDisplay(result.data)
        setError(null)
      })
      .catch((error) => {
        setError(error.message)
        setIsPerson(false)
        setIsPlanet(false)
        console.log(error);
      })
      .finally(() => {
        // setIsLoading(false)
      })
    // setSearchId(1)
  }

  return (
    <>
      <div className="">
        <StarWarsSearchForm
          handleOnSubmitClick={handleOnSubmitClick}
          noun={noun}
          setNoun={setNoun}
          setSearchId={setSearchId}
          searchId={searchId} />
        <hr />
        {error &&
          <>
            <p style={{ color: 'red' }}>These aren't the droids you're looking for</p>
            <p style={{ color: 'red' }}>{error}</p>
            <img style={{ height: 300 }} src="https://i.kym-cdn.com/entries/icons/mobile/000/018/682/obi-wan.jpg" alt="Obi" ></img>
          </>
        }
          {/* <Routes> */}
        {isPerson &&
          <People display={display} />
        }
        {isPlanet &&
          <Planet display={display} />
        }
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
