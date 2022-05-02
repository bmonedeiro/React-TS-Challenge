import { AxiosError } from 'axios'

import api from './api'
import { MovieDetail } from '../types/movie'

type SearchResultsResponse = {
  page: number
  results: Array<MovieDetail>
  total_pages: number
  total_results: number
}

export const searchMovies = async(query: string) => {
  try {
    const encodedQuery = encodeURI(query);
    const { data } = await api.get<SearchResultsResponse>(`search/movie/?query=${encodedQuery}`)
    return data
  } catch (err) {
    const error = err as Error | AxiosError;
    throw(error?.message)
  }
}
