import { useState } from 'react'

import Header from "@src/components/core/Header";
import SearchInput from "@src/components/core/SearchInput";
import useTrending from '@src/hooks/useTrending'
import useSearch from '@src/hooks/useSearch'
import ErrorPage from "@src/pages/Error"
import SpinnerIcon from "@src/components/icons/SpinnerIcon"
import TrendsGallery from "@src/components/containers/TrendsGallery"
import SearchResultGallery from "@src/components/containers/SearchResultsGallery"
import { TimeWindow } from "@src/types/trending"

export const Home = () => {
  const [value, setValue] = useState('')
  const [activeTimeWindow, setActiveTimeWindow] = useState<TimeWindow>('day')
  const { trends, error, isFetching: isFetchingTrends} = useTrending(activeTimeWindow)
  const { searchResults, isFetching: isFetchingSearchResults } = useSearch(value)

  if (error) return <ErrorPage errorCode="500 error" title="Whoops, looks like something went wrong" description="Sorry, try again later"/>

  const Loading = () => {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <SpinnerIcon />
      </div>
    )
  }
  const getContent = () => {
    if (isFetchingSearchResults || isFetchingTrends) return Loading()
    if (searchResults) return <SearchResultGallery {...{searchResults}} />
    else if (trends) return <TrendsGallery {...{trends}} activeTimeWindow={activeTimeWindow} onClickHandler={(timeWindow: TimeWindow) => setActiveTimeWindow(timeWindow)}/>
  }

  return (
    <div className="flex flex-col justify-between">
      <Header />
      <SearchInput
        value={value}
        onChangeHandler={({ target }) => setValue(target.value)}
      />
      {getContent()}
    </div>
  );
};

export default Home;
