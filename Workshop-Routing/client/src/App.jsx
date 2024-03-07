import { Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";

import * as api from '../src/services/api.js';
import * as authService from './services/authService.js';
import AuthContext from "./contexts/authContext.js";
import Path from './Paths.js';

import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/DetailsPage/GameDetails.jsx";


function App() {
  const navigate = useNavigate();
  const [gameList, setGameList] = useState([]);
  const [auth, setAuth] = useState({});

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


  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    if (result.code) {
      console.log('Error with login')
    } else {
      setAuth(result);
  
      navigate(Path.Home)
    }
  }

  return (
    <>
      <AuthContext.Provider value={{ loginSubmitHandler  }}>
        <Header />
        <div id='box'>

          <Routes>
              <Route path="/" element={<Home games={gameList}/>}></Route>
              <Route path='/games' element={<GameList games={gameList}/>}></Route>
              <Route path='games/create' element={<GameCreate createGame={createGameHandler}/>}></Route>
              <Route path='login' element={<Login loginSubmitHandler={loginSubmitHandler}/>}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/games/:gameId/details' element={<GameDetails />}></Route>
          </Routes>
        </div>
      </AuthContext.Provider>
    </>
  )
}

export default App
