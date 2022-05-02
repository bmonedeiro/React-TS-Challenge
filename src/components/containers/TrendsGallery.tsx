import { Trend } from "@src/types/trending"
import Gallery from "@src/components/core/Gallery"

interface TrendsGalleryProps {
  trends: Array<Trend>
}

const TrendsGallery = ({ trends }: TrendsGalleryProps) => {
  return (
    <div className="flex flex-col">
      <h5 className="ml-6 sm:ml-10 text-2xl font-bold tracking-tight text-secondary">Trends</h5>
      <Gallery items={trends} />
    </div>
  )
}

export default TrendsGallery
