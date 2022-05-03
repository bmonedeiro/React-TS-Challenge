import { useState } from 'react'

import Header from "@src/components/core/Header";
import SearchInput from "@src/components/core/SearchInput";
import useTrending from '@src/hooks/useTrending'
import useSearch from '@src/hooks/useSearch'
import ErrorPage from "@src/pages/Error"
import Loading from "@src/components/core/Loading"
import TrendsGallery from "@src/components/containers/TrendsGallery"
import SearchResultGallery from "@src/components/containers/SearchResultsGallery"
import { TimeWindow } from "@src/types/trending"

export const Home = () => {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTimeWindow, setActiveTimeWindow] = useState<TimeWindow>('day')

  const { trends, error: trendError, totalResults, totalPages, isFetching: isFetchingTrends} = useTrending(activeTimeWindow, currentPage)
  const { searchResults, error: searchError, isFetching: isFetchingSearchResults } = useSearch(query)

  if (trendError || searchError) return <ErrorPage errorCode="500 error" title="Whoops, looks like something went wrong" description="Sorry, try again later"/>

  const paginationHandler = (pageNumber: number) => {
    if (pageNumber > 0  && pageNumber <= totalPages) setCurrentPage(pageNumber)
  }

  const getContent = () => {
    if (isFetchingSearchResults || isFetchingTrends) return <Loading />
    if (searchResults) return <SearchResultGallery {...{searchResults}} />
    else if (trends) {
      return (
      <TrendsGallery
        {...{trends}}
        activeTimeWindow={activeTimeWindow}
        onClickHandler={(timeWindow: TimeWindow) => setActiveTimeWindow(timeWindow)}
        totalResults={totalResults}
        page={currentPage}
        paginationHandler={(pageNumber: number) => paginationHandler(pageNumber)}
      />
      )
    }
  }

  return (
    <div className="flex flex-col justify-between">
      <Header />
      <SearchInput
        query={query}
        onChangeHandler={({ target }) => setQuery(target.value)}
      />
      {getContent()}
    </div>
  );
};

export default Home;
