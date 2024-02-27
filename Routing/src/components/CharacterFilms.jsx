import { useEffect } from "react";
import CharacterFilmItem from "./CharacterFilmItem";

export default function CharacterFilms({
    movies,
    name,
}) {

    return (
        <div>
            <ul>
                {movies && movies.map(movie => (<CharacterFilmItem movie={movie}/>))}
            </ul>
        </div>
    );

}