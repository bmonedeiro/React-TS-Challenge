import MovieIcon from '@src/components/icons/MovieIcon'

interface CardProps {
  onClickHandler: () => void
  image: string | null
  name: string
}

function Card(props: CardProps) {
  const { image, name, onClickHandler } = props
  return (
    <button
      className="max-w-sm w-72 flex flex-col shrink-0 bg-white rounded-lg border border-gray-200 shadow-md m-2 cursor-pointer"
      onClick={onClickHandler}
      type="button"
      tabIndex={0}
    >
      {image ? (
        <img className="rounded-t-lg" src={image} alt="" />
      ) : (
        <div className="rounded-t-lg bg-gray-300 flex w-full h-full items-center justify-center">
          <MovieIcon />
        </div>
      )}
      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-secondary">{name}</h5>
      </div>
    </button>
  )
}

export default Card
