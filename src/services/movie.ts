import { AxiosError } from 'axios'

import api from './api'
import { MovieDetail } from '../types/movie'

const getMovie = async (movieId: number) => {
  try {
    const { data } = await api.get<MovieDetail>(`movie/${movieId}`)
    return data
  } catch (err) {
    const error = err as Error | AxiosError
    throw error?.message
  }
}

export default getMovie
