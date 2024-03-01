import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";


import { Routes, Route} from 'react-router-dom';
import Register from "./components/Register/Register";

function App() {

  return (
    <div id='box'>
      <Header />

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/games' element={<GameList />}></Route>
          <Route path='games/create' element={<GameCreate />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default App
