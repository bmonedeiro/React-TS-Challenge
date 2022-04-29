import axios, { AxiosError } from 'axios'

import api from './api'
import { Trend, MediaType, TimeWindow } from '../types/trending'

type TrendResponse = {
  page: number
  results: Array<Trend>
  total_pages: number
  total_results: number
}

//TODO: filter by timeWindow
interface TrendRequest {
  media_type: MediaType
  time_window: TimeWindow
}

export const getTrending = async({ media_type, time_window }: TrendRequest) => {
  try {
    const { data } = await api.get<TrendResponse>(`trending/${media_type}/${time_window}`)
    return data
  } catch (err) {
    const error = err as Error | AxiosError;
    throw(error?.message)
  }
}
