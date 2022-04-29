import { Link } from 'react-router-dom';

import useTrending from '../hooks/useTrending'

export const Home = () => {
  const { trends, error, isFetching } = useTrending();

  return (
    <>
      <h1>Trend Movies</h1>
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        {trends.map((data) => (
          <Link to={`/about/${data.id}`} key={data.id}>
            {data.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
