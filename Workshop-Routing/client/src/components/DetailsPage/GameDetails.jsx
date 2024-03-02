import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as api from '../../api.js';



export default function GameDetails() {
    const [game, setGame] = useState([]);
    const { gameId } = useParams();
    
    useEffect(() => {
        api.getOne(gameId)
            .then(data => setGame(data))
            .catch(err => console.log(err))
    }, [gameId])

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                {game.summary}
                </p>
            </div>
        </section>
    );
}