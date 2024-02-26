import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterFilms from './CharacterFilms';

export default function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(setCharacter)
    }, [id])

    console.log(character.films)
    return (
        <>
            <h1>{character.name}</h1>
            {character && <CharacterFilms movies={character.films} name={character.name}/>}
        </>
    );
}