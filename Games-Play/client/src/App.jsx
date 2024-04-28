import { Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider } from './contexts/authContext.jsx';
import { GameProvider } from './contexts/gameContext.jsx';
import Path from './Paths.js';

import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from './components/Logout/Logout.jsx';
import GameEdit from './components/GameEdit/GameEdit.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import AuthGuard from './components/guards/AuthGuard.jsx';
// import GameDetails from "./components/DetailsPage/GameDetails.jsx";
const GameDetails = lazy(() => import('./components/DetailsPage/GameDetails.jsx'))

function App() {

  return (
      <ErrorBoundary>
        <AuthProvider>
          <Header />
          <div id='box'>

            <GameProvider>
              <Suspense fallback={<h1>Loading...</h1>}> 
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Games} element={<GameList/>} />
                    <Route path={Path.CreateGame} element={<GameCreate />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.GameDetails} element={<GameDetails />} />
                    <Route path={Path.GameEdit} element={<GameEdit />} />
                    <Route path={Path.Logout} element={<Logout />} />

                    <Route element={<AuthGuard />}>
                      <Route path="/games/create" element={<GameCreate />} />
                      <Route path={Path.GameEdit} element={<GameEdit />} />
                      <Route path={Path.Logout} element={<Logout />} />
                    </Route>
                </Routes>
              </Suspense>
            </GameProvider>
          </div>
        </AuthProvider>
      </ErrorBoundary>
  )
}

export default App
