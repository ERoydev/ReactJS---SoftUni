import { useEffect, useState } from "react";
const baseUrl = 'https://swapi.dev/api';

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/people`)
            .then(res => res.json())
            .then(data => setCharacters(data.results))
    }, [])

    return (
        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}
        </ul>

    );
}