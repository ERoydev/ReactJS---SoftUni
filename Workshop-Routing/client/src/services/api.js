import { json } from "react-router-dom";
import * as request from "../lib/request";


const baseUrl = 'http://localhost:3030/jsonstore/games/';

export const getAllGames = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`)
    
    return result;
}

export const createGame = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;   
}
