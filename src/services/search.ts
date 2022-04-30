import { AxiosError } from 'axios'

import api from './api'
import { MovieDetail } from '../types/movie'

export const searchMovies = async(query: string) => {
  try {
    const encodedQuery = encodeURI(query);
    const { data } = await api.get<MovieDetail>(`search/movie/?query=${encodedQuery}`)
    return data
  } catch (err) {
    const error = err as Error | AxiosError;
    throw(error?.message)
  }
}
