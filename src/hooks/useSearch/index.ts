import { useEffect, useState } from 'react'

import searchMovies from '@src/services/search'
import { MovieDetail } from '@src/types/movie'
import useDebounce from '../useDebounce'

const useSearch = (query: string) => {
  const [searchResults, setSearchResults] = useState<Array<MovieDetail>>()
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const debouncedValue = useDebounce<string>(query, 500)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsFetching(true)
        if (!query) {
          setSearchResults(undefined)
        } else {
          const response = await searchMovies(query)
          setSearchResults(response?.results)
        }
      } catch (e) {
        setError(e as Error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchMovie()
  }, [debouncedValue])

  return { searchResults, error, isFetching }
}

export default useSearch
