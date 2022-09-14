// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AddJoke from "./compontents/AddJoke";

function App() {
  const [keilaKisses, setKeilaKisses] = useState(0);
  // const [fetchedRandomJoke, setFetchedRandomJoke] = useState();
  const [jokeList, setJokeList] = useState([])
  
  const AddKeilaKiss = () => {
    setKeilaKisses(keilaKisses + 1);
  };

  useEffect(() => {
    axios
      .get(`https://v2.jokeapi.dev/joke/Programming?type=single`)
      .then((result) => {
        setJokeList([result.data.joke]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const FetchJoke = () => {

    axios
      .get(`https://v2.jokeapi.dev/joke/Programming?type=single`)
      .then((result) => {
        setJokeList([...jokeList, result.data.joke]);
      })
      .catch((error) => {
        console.log(error.message);
      })
  };

  return (
    <>
      <div className="App">
        <h1>Keila Kisses! {keilaKisses} </h1>
        <button
          onClick={() => {
            AddKeilaKiss();
          }}
        >
          Add A Keila Kiss
        </button>
        <button
          onClick={() => {
            FetchJoke();
          }}
        >
          Add Joke
        </button>
          <AddJoke jokeList={jokeList} />
      </div>
    </>
  );
}

export default App;
