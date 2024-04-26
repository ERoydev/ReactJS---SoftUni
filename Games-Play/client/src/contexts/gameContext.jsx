import { createContext, useState, useEffect } from "react";
import * as api from '../services/api';
import { useContext } from "react";
import AuthContext from "./authContext";

const GameContext = createContext()

GameContext.displayName = 'GameContext';


export const GameProvider = ({
    children,
}) => {
    const [gameList, setGameList] = useState([]);
    const {userId} = useContext(AuthContext);
    
    useEffect(() => {
        api.getAllGames()
            .then(data => setGameList(Object.values(data)))
            .catch(error => {
                console.log(error.message)
            })
    }, [])
    
    const createGameHandler = (data) => {
        api.createGame({...data, ownerId: userId})
            .then(result => {
                setGameList(state => [...state, result])
            })
            .catch(err => {
                throw new Error("create game request failed")
            })
    }

    const values = {
        createGameHandler,
        gameList,
    }

    return (
        <GameContext.Provider value={values}>
            {children}
        </GameContext.Provider>

    );
}

export default GameContext;