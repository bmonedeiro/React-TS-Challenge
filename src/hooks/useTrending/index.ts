import { useEffect, useState } from "react"

import { getTrending } from '@src/services/trending'
import { Trend, TimeWindow } from "@src/types/trending"

const useTrending = ( timeWindow: TimeWindow  = 'week') => {
  const [trends, setTrends] = useState<Array<Trend>>([])
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(true)

  useEffect(() => {
    const fetchTrending = async() => {
      try {
        setIsFetching(true)
        const { results } = await getTrending({ media_type:'movie', time_window: timeWindow })
        setTrends(results)
      } catch(e) {
        setError(e as Error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchTrending()
  }, [timeWindow])

  return { trends, error, isFetching }
}

export default useTrending;
