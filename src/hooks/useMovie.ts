import { useEffect, useState } from "react"

import { getMovie } from '../services/movie'
import { MovieDetail } from "../types/movie"

const useMovie = (movieId: number | null) => {
  const [movie, setMovie] = useState<MovieDetail>()
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    const fetchMovie = async() => {
      if(!movieId) return
      try {
        setIsFetching(true)
        const response = await getMovie(movieId)
        setMovie(response)
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
