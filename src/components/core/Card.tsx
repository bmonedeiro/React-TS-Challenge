interface CardProps {
  onClickHandler: () => void
  image: string | null
  name: any
}

const Card = (props: CardProps) => {
  const {image, name, onClickHandler } = props;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m-2 cursor-pointer" onClick={onClickHandler}>
      {image && (
        <img className="rounded-t-lg" src={image} alt="" />
      )}
      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-secondary">{name}</h5>
      </div>
    </div>
  )
}

export default Card
