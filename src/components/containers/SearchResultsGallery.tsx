import { MovieDetail } from "@src/types/movie"
import Gallery from "@src/components/core/Gallery"

interface SearchResultsGalleryProps {
  searchResults: Array<MovieDetail>
}

const SearchResultsGallery = ({searchResults}: SearchResultsGalleryProps) => {
  return (
    <div className="flex flex-col">
      <h5 className="ml-6 sm:ml-10 text-2xl font-bold tracking-tight text-secondary">Results</h5>
      {searchResults.length > 0 ? (
        <Gallery items={searchResults} />
      ) : (
        <div className="flex h-96 w-full justify-center items-center">
          <h5>Sorry, we didn't find any results for your search.</h5>
        </div>
      )}
    </div>
  )
}

export default SearchResultsGallery
