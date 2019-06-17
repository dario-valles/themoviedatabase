export interface Movie {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
}

export interface Movies {
  Movies: Movie[];
}

export interface List {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path?: null;
}

export interface Lists {
  Lists: List[]
}
