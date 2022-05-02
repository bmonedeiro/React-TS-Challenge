

import { useEffect, useState } from "react"

import useDebounce from '../useDebounce'
import { searchMovies } from '@src/services/search'
import { MovieDetail } from "@src/types/movie"

const useSearch = (query: string) => {
  const [searchResults, setSearchResults] = useState<Array<MovieDetail>>()
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const debouncedValue = useDebounce<string>(query, 1000)

  useEffect(() => {
    const fetchMovie = async() => {
      try {
        setIsFetching(true)
        if (!query) {
          setSearchResults(undefined)
        } else {
          const { results } = await searchMovies(query)
          setSearchResults(results)
        }
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
