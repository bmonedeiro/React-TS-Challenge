interface BannerProps {
  image: string;
  title: string;
}

const Banner = ({image, title}: BannerProps) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className="bg-cover">
      <div className="h-96 bg-opacity-50 bg-black flex items-center justify-center" style={{background: 'rgba(0,0,0,0.5)'}}>
        <div className="mx-2 text-center">
          <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
