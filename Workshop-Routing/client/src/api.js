import { json } from "react-router-dom";
import { request } from "./lib/request";


const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAllGames = async () => {
    const result = await request('GET', baseUrl);
    return Object.values(result);
}

export const createGame = async (data) => {
    const response = await fetch({baseUrl}, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const result = response.json();
    return result;
}