import { useEffect, useState } from "react"

import { getTrending } from '@src/services/trending'
import { Trend, TimeWindow } from "@src/types/trending"

const useTrending = ( timeWindow: TimeWindow  = 'week', currentPage: number = 1) => {
  const [trends, setTrends] = useState<Array<Trend>>([])
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [totalResults, setTotalResults] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    const fetchTrending = async() => {
      try {
        setIsFetching(true)
        const { results, total_results, total_pages } = await getTrending({ media_type:'movie', time_window: timeWindow, page: currentPage })
        setTrends(results)
        setTotalResults(total_results)
        setTotalPages(total_pages)
      } catch(e) {
        setError(e as Error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchTrending()
  }, [timeWindow, currentPage])

  return { trends, error, isFetching, totalResults, totalPages }
}

export default useTrending;
