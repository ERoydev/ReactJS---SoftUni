import { useParams } from "react-router-dom";


export default function GameDetails() {

    const { gameId } = useParams();
    
    console.log(gameId)
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src="images/MineCraft.png" />
                    <h1>Bright</h1>
                    <span className="levels">MaxLevel: 4</span>
                    <p className="type">Action, Crime, Fantasy</p>
                </div>

                <p className="text">
                Set in a world where fantasy creatures live side by side with humans. A
                human cop is forced to work with an Orc to find a weapon everyone is
                prepared to kill for. Set in a world where fantasy creatures live side by
                side with humans. A human cop is forced to work with an Orc to find a
                weapon everyone is prepared to kill for.
                </p>
            </div>
        </section>
    );
}