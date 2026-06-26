import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { fetchMovies, getPosterUrl } from '../services/tmdbApi'

function MovieRow({ title, endpoint }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadMovies() {
      try {
        setIsLoading(true)
        setError(null)

        const movieData = await fetchMovies(endpoint)
        setMovies(movieData)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadMovies()
  }, [endpoint])

  return (
    <section className="movie-row">
      <h2 className="movie-row__title">{title}</h2>

      {isLoading && <p>Loading movies...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className="movie-row__list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.release_date?.slice(0, 4)}
              rating={`${movie.vote_average.toFixed(1)} ★`}
              imageUrl={getPosterUrl(movie.poster_path)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default MovieRow