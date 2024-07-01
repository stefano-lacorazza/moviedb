interface PopularMovieResponse {
    results: Movie[];
    page: number;
    total_results: number;
    total_pages: number;
  }
  
interface Movie {
  adult: boolean; // Defaults to true
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean; // Defaults to true
  vote_average: number;
  vote_count: number;
}

interface SimplifiedMovie {
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
}

export type { PopularMovieResponse, Movie, SimplifiedMovie}