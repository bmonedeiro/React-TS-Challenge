import { useParams } from "react-router-dom";

import useMovie from '../hooks/useMovie'

export const About = () => {
  let { movieId } = useParams();
  const id = movieId ? +movieId : 0
  const { movie, error, isFetching } = useMovie(id);

  if(error) return <h1>{ error }</h1>
  return (
    <>
      <h1>ID: {movieId}</h1>
      <h1>{movie?.title}</h1>
    </>
  );
};

export default About;
