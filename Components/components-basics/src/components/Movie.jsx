export default Movie(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>Year: {props.year}</p>
      <p>Cast: {props.actors}</p>
    </article>
  );
}