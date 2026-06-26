import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'

const movieRows = [
  {
    id: 1,
    title: 'Trending Now',
    endpoint: '/trending/movie/week',
  },
  {
    id: 2,
    title: 'Popular Movies',
    endpoint: '/movie/popular',
  },
  {
    id: 3,
    title: 'Top Rated',
    endpoint: '/movie/top_rated',
  },
  {
    id: 4,
    title: 'Upcoming',
    endpoint: '/movie/upcoming',
  },
  {
    id: 5,
    title: 'Action',
    endpoint: '/discover/movie?with_genres=28',
  },
]

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {movieRows.map((row) => (
        <MovieRow key={row.id} title={row.title} endpoint={row.endpoint} />
      ))}
    </>
  )
}

export default Home