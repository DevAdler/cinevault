function MovieCard({ title, year }) {
  return (
    <article className="movie-card">
      <h3>{title}</h3>
      <p>{year}</p>
    </article>
  )
}

export default MovieCard