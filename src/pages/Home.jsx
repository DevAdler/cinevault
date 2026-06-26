import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieRow title="Trending Now" />
      <MovieRow title="Popular Movies" />
      <MovieRow title="Top Rated" />
      <MovieRow title="Action" />
    </>
  );
}

export default Home;
