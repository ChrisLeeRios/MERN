import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import StarWarsSearchForm from "./components/StarWarsSearchForm";
import People from "./components/views/People";
import Planet from "./components/views/Planet";
// import axios from "axios";

function App() {
  // const [apiSearch, setApiSearch] = useState('')
  // const [error, setError] = useState(null)
  // const [display, setDisplay] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  const [noun, setNoun] = useState('people')
  const [searchId, setSearchId] = useState(1)
  const [isPerson, setIsPerson] = useState(false)
  const [isPlanet, setIsPlanet] = useState(false)
const navigate = useNavigate();

  const handleOnSubmitClick = (event) => {
    event.preventDefault();
    // setIsLoading(true)
    setNoun(noun)
    setSearchId(searchId)
    navigate(`/${noun}/${searchId}`)
    if (noun === "planets") {
      setIsPlanet(true)
      setIsPerson(false)
    } else {
      setIsPerson(true)
      setIsPlanet(false)
    }

    //fetch('http://httpstat.us/404')
    // axios.get(`https://swapi.dev/api/${noun}/${searchId}`)
    //   .then((result) => {
    //     console.log(result)
    //     setDisplay(result.data)
    //     setError(null)
    //   })
    //   .catch((error) => {
    //     setError(error.message)
    //     setIsPerson(false)
    //     setIsPlanet(false)
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     // setIsLoading(false)
    //   })
    // // setSearchId(1)
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
          <Routes>
        {isPerson &&
          <Route path="/people/:searchId" element={<People />} />
        }
        {isPlanet &&
          <Route path="/planets/:searchId" element={<Planet />} />
        }
        </Routes>
      </div>
    </>
  );
}

export default App;
