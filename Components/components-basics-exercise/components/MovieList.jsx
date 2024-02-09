export default function MovieList({
    headingText,
    movies
}) {

    return(
        <div className="movie-list">
            <h2>{headingText}</h2>

            <ul>
                <li>{movies[0].title}</li>
                <li>{movies[1].title}</li>
            </ul>
        </div>
    );
}