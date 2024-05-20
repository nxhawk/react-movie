import { useQuery } from "@tanstack/react-query"
import { MovieType } from "../constants/movieType"
import movieApi from "../apis/movie.api"
import BannerSlider from "../components/BannerSlider"
import { useNavigate } from "react-router-dom"
import { path } from "../constants/path"
import { generateNameId } from "../utils/helpers"
import MovieList from "../components/MovieList"

const Home = () => {
  const navigate = useNavigate()
  
  const { data: nowPlayingMovies, isLoading: isLoadingNowPlayingMovies } = useQuery({
    queryKey: ['movies', MovieType.now_playing],
    queryFn: () =>
      movieApi.getMovies({
        movie_type: MovieType.now_playing
      })
  })

  const onMovieClicked = ({ id, name }: { id: string; name: string }) => {
    const nameId = generateNameId({
      id,
      name
    })
    navigate(`${path.movie}/${nameId}`)
  }

  return (
    <div>
      <BannerSlider 
        movies={nowPlayingMovies?.data.results} 
        isLoading={isLoadingNowPlayingMovies}
        onMovieClicked={onMovieClicked} 
      />

    <section className='page-container px-3 sm:px-5 mt-10'>
      <MovieList
        title='Now Playing'
        movies={nowPlayingMovies?.data.results}
        isLoading={isLoadingNowPlayingMovies}
        onMovieClicked={onMovieClicked}
      />
    </section>

    </div>
  )
}

export default Home