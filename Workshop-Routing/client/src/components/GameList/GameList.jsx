import { useContext } from "react";
import GameListItem from "./GameListItem";
import GameContext from "../../contexts/gameContext";

export default function GameList() {
    const { gameList } = useContext(GameContext);
    
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {gameList.length > 0 ? gameList.map(game => <GameListItem key={game._id} {...game}/>): <h3 className="no-articles">No articles yet</h3>}
        </section>

    );
}