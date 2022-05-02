const getImageURL = (path: string | null): string => {
  return `https://image.tmdb.org/t/p/w500${path}`
}

export default getImageURL;
