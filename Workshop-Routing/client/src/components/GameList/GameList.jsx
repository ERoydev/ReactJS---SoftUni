import GameListItem from "./GameListItem";

export default function GameList({
    games,
}) {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}

            {games.map(game => <GameListItem key={game._id} {...game}/>)}

            {/* Display paragraph: If there is no games  */}
            <h3 className="no-articles">No articles yet</h3>
        </section>

    );
}