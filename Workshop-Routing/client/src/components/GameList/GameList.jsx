import GameListItem from "./GameListItem";

export default function GameList({
    games,
}) {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games ? games.map(game => <GameListItem key={game._id} {...game}/>): <h3 className="no-articles">No articles yet</h3>}
        </section>

    );
}