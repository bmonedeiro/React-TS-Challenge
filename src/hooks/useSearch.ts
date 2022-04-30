

import { useEffect, useState } from "react"

import useDebounce from './useDebounce'
import { searchMovies } from '../services/search'
import { MovieDetail } from "../types/movie"

const useSearch = (query: string) => {
  const [searchResults, setSearchResults] = useState<MovieDetail>()
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const debouncedValue = useDebounce<string>(query, 1000)

  useEffect(() => {
    const fetchMovie = async() => {
      try {
        setIsFetching(true)
        const response = await searchMovies(query)
        setSearchResults(response)
      } catch(e) {
        setError(e as Error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchMovie()
  }, [debouncedValue])


  return { searchResults, error, isFetching }
}

export default useSearch;
