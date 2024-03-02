import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";

import * as api from '../src/api.js';

import { Routes, Route} from 'react-router-dom';
import Register from "./components/Register/Register";

import { useEffect, useState } from "react";
import GameDetails from "./components/DetailsPage/GameDetails.jsx";

function App() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    api.getAllGames()
      .then(data => setGameList(data))
      .catch(error => console.log(error))
  }, [])

  const createGameHandler = (data) => {
    api.createGame(data)
      .then(result => {
        setGameList(state => [...state, result])
      })
      .catch(err => {
        throw new Error("create game request failed")
      })
  }

  return (
    <>
      <Header />
      <div id='box'>

        <Routes>
            <Route path="/" element={<Home games={gameList}/>}></Route>
            <Route path='/games' element={<GameList games={gameList}/>}></Route>
            <Route path='games/create' element={<GameCreate createGame={createGameHandler}/>}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/games/:gameId/details' element={<GameDetails />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
