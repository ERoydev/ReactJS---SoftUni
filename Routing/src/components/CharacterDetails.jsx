import { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import CharacterFilms from './CharacterFilms';

export default function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found');
                }

                return res.json();
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/characters')
            });
    }, [id])

    return (
        <>
            <h1>{character.name}</h1>
            {character && <CharacterFilms movies={character.films} name={character.name}/>}
        </>
    );
}