function MovieCard({ title, year, imageUrl, rating }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster">
        <img src={imageUrl} alt={`${title} poster`} />
      </div>

      <div className="movie-card__content">
        <h3 className="movie-card__title">{title}</h3>

        <div className="movie-card__meta">
          <span>{year}</span>
          <span>{rating}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;