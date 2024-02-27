import { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import styles from './Character.module.css'

const baseUrl = 'https://swapi.dev/api';

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/people`)
            .then(res => res.json())
            .then(data => setCharacters(data.results))
    }, [])

    return (
        <div className={styles.characterItem}>
        {characters.map((character, index) =>  
            <CharacterItem key={character.name} {...character} id={index + 1} />
        )}
        </div>

    );
}