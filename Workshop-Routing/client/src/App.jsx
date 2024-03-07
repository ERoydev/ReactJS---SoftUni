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
import Logout from './components/Logout/Logout.jsx';


function App() {
  const navigate = useNavigate();
  const [gameList, setGameList] = useState([]);
  const [auth, setAuth] = useState(() => {
    // Kogato refreshna stranicata tokena ostava, za tova kogato se renderva za purvi put shte iztrie accessTokena
    localStorage.removeItem('accessToken');

    return {};
  });

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
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home)
    }
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password)
    
    if (values.password !== values.confirmPassword) {
      console.log("Error with Register")
    } else {
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
    }
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  }

  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
    
  }

  return (
    <>
      <AuthContext.Provider value={{ values }}>
        <Header />
        <div id='box'>

          <Routes>
              <Route path={Path.Home} element={<Home games={gameList}/>}></Route>
              <Route path={Path.Games} element={<GameList games={gameList}/>}></Route>
              <Route path={Path.CreateGame} element={<GameCreate createGame={createGameHandler}/>}></Route>
              <Route path={Path.Login} element={<Login />}></Route>
              <Route path={Path.Register} element={<Register />}></Route>
              <Route path={Path.GameDetails} element={<GameDetails />}></Route>
              <Route path={Path.Logout} element={<Logout />}></Route>
          </Routes>
        </div>
      </AuthContext.Provider>
    </>
  )
}

export default App
