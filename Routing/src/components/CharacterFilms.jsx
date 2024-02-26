import { useEffect } from "react";
import CharacterFilmItem from "./CharacterFilmItem";

export default function CharacterFilms({
    movies,
    name,
}) {



    return (
        <div>
            <h2>Movies that {name} was in;</h2>
            <ul>
                {movies && movies.map(movie => (<CharacterFilmItem movie={movie}/>))}
            </ul>
        </div>
    );

}