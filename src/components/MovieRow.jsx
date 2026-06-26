import MovieCard from './MovieCard'

const movies = [
  { id: 1, title: 'Interstellar', year: 2014 },
  { id: 2, title: 'Inception', year: 2010 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'Dune', year: 2021 },
]

function MovieRow({ title }) {
  return (
    <section className="movie-row">
      <h2>{title}</h2>

      <div className="movie-row__list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} year={movie.year} />
        ))}
      </div>
    </section>
  )
}

export default MovieRow