type BelongsToCollection = {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

type Genre = {
  id: number
  name: string
}

type ProductionCompany = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type Language = {
  iso_639_1: string
  name: string
}

type StatusValues = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'

export type DataObject = {
  name: string
  value: string
  type: string
}

export type MovieProfile = Array<DataObject>

export type MovieDetail = {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: BelongsToCollection | null
  budget: number
  genres: Array<Genre>
  homepage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Array<ProductionCompany>
  production_countries: Array<ProductionCountry>
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: Array<Language>
  status: StatusValues
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
