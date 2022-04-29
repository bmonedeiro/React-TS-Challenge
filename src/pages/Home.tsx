import { Link } from 'react-router-dom';

import Card from '../components/Card';
import dummyData from "../dummyData.json"; // To be replaced with your api response data

export const Home = () => {
  return (
    <>
      <h1>Space X Ships</h1>
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        {dummyData.map((data) => (
          <Link to="/about" key={data.id}>
            <Card image={data.image} name={data.name} home_port={data.home_port} roles={data.roles} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
