import { Trend, TimeWindow } from "@src/types/trending"
import Gallery from "@src/components/core/Gallery"
import GroupButton from "@src/components/core/GroupButton"
interface TrendsGalleryProps {
  trends: Array<Trend>
  activeTimeWindow: string
  onClickHandler: (timeWindow: TimeWindow) => void
}

const timeWindowOptions: TimeWindow[] = ['week', 'day']
const TrendsGallery = ({ trends, activeTimeWindow, onClickHandler }: TrendsGalleryProps) => {
  return (
    <div className="flex flex-col">
      <div className="mx-6 sm:mx-10 flex justify-between items-center">
        <h5 className="text-2xl font-bold tracking-tight text-secondary">Trends</h5>
        <GroupButton
          options={timeWindowOptions}
          active={activeTimeWindow}
          onClickHandler={onClickHandler}
        />
      </div>
      <Gallery items={trends} />
    </div>
  )
}

export default TrendsGallery
