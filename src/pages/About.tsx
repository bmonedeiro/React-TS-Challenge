import { useParams } from 'react-router-dom'

import useMovie from '@src/hooks/useMovie'
import Header from '@src/components/core/Header'
import Table from '@src/components/core/Table'
import Banner from '@src/components/core/Banner'
import SpinnerIcon from '@src/components/icons/SpinnerIcon'
import getImageURL from '@src/utils/getImageURL'
import ErrorPage from '@src/pages/Error'

export function About() {
  const { movieId } = useParams()
  const id = movieId ? +movieId : 0
  const { movie, error, isFetching } = useMovie(id)

  const posterPath = movie?.filter(prop => prop.name === 'Poster')[0]?.value || ''
  const title = movie?.filter(prop => prop.name === 'Title')[0]?.value || ''

  if (error)
    return (
      <ErrorPage
        errorCode="500 error"
        title="Whoops, looks like something went wrong"
        description="Sorry, try again later"
      />
    )

  return (
    <div className="flex flex-col justify-between">
      <Header />
      {isFetching || !movie ? (
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <SpinnerIcon />
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <div className="h-full max-w-screen-md">
            <Banner image={getImageURL(posterPath)} title={title} />
            <Table {...{ data: movie }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default About
