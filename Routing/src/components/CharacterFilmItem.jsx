
import styles from './CharacterFilmItem.module.css';

export default function CharacterFilmItem({
    movie,
}) {
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        fetch(movie)
            .then(res => res.json())
            .then(setMovieData)
    }, [])

    return (
        <div>
            <h2>Movies</h2>
            {movieData && <ul class={styles.site}>
                <li>
                    <p className={styles.title}>{movieData.title}</p>
                    <p className={styles.description}> {movieData.opening_crawl}</p>
                    <div className={styles.container}>
                        <p className={styles.director}>directed by: {movieData.director}</p>
                        <p className={styles.released}>released date: {movieData.release_date}</p>
                        <p className={styles.producer}>produced by: {movieData.producer}</p>
                    </div>
                </li>

            </ul>}
        </div>
    );
}