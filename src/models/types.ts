
/**
 * Defines interfaces for movie responses and movie data structures.
 * 
 * `PopularMovieResponse` and `UpcomingMovieResponse` interfaces are designed to model the responses from an API for popular and upcoming movies, respectively. 
 * Both include a list of movies (`results`), pagination data (`page`), and for `PopularMovieResponse`, total results and pages information. 
 * `UpcomingMovieResponse` includes date range information (`dates`) for the upcoming movies.
 * 
 * The `Movie` interface represents the detailed structure of a movie, including metadata such as title, release date, and poster path. 
 * It also includes fields for adult content and video availability, which default to true but are not explicitly set in the interface.
 * 
 * `SimplifiedMovie` provides a reduced version of the movie data, focusing on essential fields used for display purposes in the application.
 * 
 * These interfaces are exported for use across the application, ensuring type safety and consistency when handling movie data.
 */
interface PopularMovieResponse {
    results: Movie[];
    page: number;
    total_results: number;
    total_pages: number;
  }
  

  interface UpcomingMovieResponse {
    dates: {
      maximum: string;
      minimum: string;
    };
    page: number;
    results: Movie[];
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
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
}

export type { PopularMovieResponse, UpcomingMovieResponse, Movie, SimplifiedMovie}