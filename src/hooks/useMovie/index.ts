import { useEffect, useState } from "react"

import { getMovie } from '@src/services/movie'
import { MovieDetail, MovieProfile } from "@src/types/movie"
import currencyFormatter from "@src/utils/currencyFormatter"

const formatterMovieData = (movie: MovieDetail): MovieProfile => {
  const formattedGenre = movie.genres.map((genre) => genre.name).join(', ')
  const productionCompaniesName = movie.production_companies.map((company) => company.name).join(', ')

  return [
    { name: 'Genre', value: formattedGenre, type: 'string' },
    { name: 'Overview', value: movie.overview, type: 'string' },
    { name: 'Production Companies Name', value: productionCompaniesName, type: 'string' },
    { name: 'Release Date', value: movie.release_date, type: 'string' },
    { name: 'Vote', value: `${movie.vote_average}(${movie.vote_count})`, type: 'string' },
    { name: 'IMDB ID', value: (movie.imdb_id) || '', type: 'string' },
    { name: 'Revenue', value: currencyFormatter.format(movie.revenue), type: 'string' },
    { name: 'Title', value: movie.title, type: 'string' },
    { name: 'Homepage', value: movie.homepage || '', type: 'link' },
    { name: 'Poster', value: movie.poster_path || '', type: 'img' },
  ]
}

const useMovie = (movieId: number | null) => {
  const [movie, setMovie] = useState<MovieProfile>()
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    const fetchMovie = async() => {
      if(!movieId) return
      try {
        setIsFetching(true)
        const response = await getMovie(movieId)
        setMovie(formatterMovieData(response))
      } catch(e) {
        setError(e as Error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchMovie()
  }, [movieId])


  return { movie, error, isFetching }
}

export default useMovie;
