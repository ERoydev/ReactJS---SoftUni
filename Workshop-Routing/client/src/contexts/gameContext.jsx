import { createContext, useState, useEffect } from "react";
import * as api from '../services/api';

const GameContext = createContext()

GameContext.displayName = 'GameContext';


export const GameProvider = ({
    children,
}) => {
    const [gameList, setGameList] = useState([]);
    useEffect(() => {
        api.getAllGames()
        .then(data => setGameList(data))
        .catch(error => {
            console.log(error.message)
        })
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