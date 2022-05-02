import { useNavigate } from 'react-router-dom';

import Card from "@src/components/core/Card"
import getImageURL from "@src/utils/getImageURL"

interface GalleryProps {
  items: Array<any>
}

const Gallery = ({items}: GalleryProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-wrap p-4 justify-center">
      {items?.map((data) => (
        <Card
          key={data.id}
          onClickHandler={() => { navigate(`/about/${data.id}`)}}
          image={getImageURL(data.poster_path)}
          name={data.title}
        />
      ))}
    </div>
  )
}

export default Gallery
