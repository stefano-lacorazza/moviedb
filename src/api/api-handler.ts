import { PopularMovieResponse, UpcomingMovieResponse, SimplifiedMovie } from "../models/types";
import { simplifyPopularMovies, simplifyUpcomingMovies } from "../utils/helpers";


/**
 * Fetches a list of popular movies from The Movie Database (TMDb) API.
 * 
 * This function makes an HTTP GET request to the TMDb API's "popular" endpoint,
 * retrieving a list of popular movies. It simplifies the response to an array
 * of `SimplifiedMovie` objects, which contain a subset of the movie information.
 * 
 * @param {number} page - The page number of movie results to fetch. Defaults to 1.
 * @returns {Promise<SimplifiedMovie[]>} A promise that resolves to an array of `SimplifiedMovie` objects.
 * 
 * @throws {Error} Throws an error if the HTTP request fails or if the API returns an error response.
 */
async function fetchPopularMovies(page:number = 1): Promise<SimplifiedMovie[]> {
    const url: string = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    try {
      const response = await fetch(url, {
        method: 'GET', // Method is GET
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTU4YWQzMjBjN2ZkYzE5MjEwODUyMjRjMmQwYjliOSIsIm5iZiI6MTcxOTc4ODAzMi41ODA2OTgsInN1YiI6IjY2ODFlMTYzZWVjZDExM2I0YWY1ZGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bFp6ebjRp8zjBhkrP81x64m0-6IELJG1vWoQuz4pnc`, // Use accessToken in the Authorization header
          'accept': 'application/json' // Accept header for JSON response
        }
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: PopularMovieResponse = await response.json();
      const simplifiedMovies: SimplifiedMovie[] = simplifyPopularMovies(data);
      return simplifiedMovies;
    } catch (error) {

        throw new Error(`Failed to fetch API data: ${error}`);
    }
  }


  /**
 * Fetches a list of top-rated movies from The Movie Database (TMDb) API.
 * 
 * This function makes an HTTP GET request to the TMDb API's "top_rated" endpoint,
 * retrieving a list of top-rated movies. It simplifies the response to an array
 * of `SimplifiedMovie` objects, which contain a subset of the movie information.
 * 
 * @param {number} page - The page number of movie results to fetch. Defaults to 1.
 * @returns {Promise<SimplifiedMovie[]>} A promise that resolves to an array of `SimplifiedMovie` objects.
 * 
 * @throws {Error} Throws an error if the HTTP request fails or if the API returns an error response.
 */
  async function fetchTopRatedMovies(page:number = 1): Promise<SimplifiedMovie[]> {
    const url: string = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
    try {
      const response = await fetch(url, {
        method: 'GET', // Method is GET
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTU4YWQzMjBjN2ZkYzE5MjEwODUyMjRjMmQwYjliOSIsIm5iZiI6MTcxOTc4ODAzMi41ODA2OTgsInN1YiI6IjY2ODFlMTYzZWVjZDExM2I0YWY1ZGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bFp6ebjRp8zjBhkrP81x64m0-6IELJG1vWoQuz4pnc`, // Use accessToken in the Authorization header
          'accept': 'application/json' // Accept header for JSON response
        }
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: PopularMovieResponse = await response.json();
      const simplifiedMovies: SimplifiedMovie[] = simplifyPopularMovies(data);
      return simplifiedMovies;
    } catch (error) {

        throw new Error(`Failed to fetch API data: ${error}`);
    }
  }

/**
 * Fetches a list of upcoming movies from The Movie Database (TMDb) API.
 * 
 * This function makes an HTTP GET request to the TMDb API's "upcoming" endpoint,
 * retrieving a list of movies that are scheduled to be released in the future. It
 * simplifies the response to an array of `SimplifiedMovie` objects, which contain
 * a subset of the movie information.
 * 
 * @param {number} page - The page number of movie results to fetch. Defaults to 1.
 * @returns {Promise<SimplifiedMovie[]>} A promise that resolves to an array of `SimplifiedMovie` objects.
 * 
 * @throws {Error} Throws an error if the HTTP request fails or if the API returns an error response.
 */
  async function fetchUpcomingMovies(page:number = 1): Promise<SimplifiedMovie[]> {
    const url: string = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
    try {
      const response = await fetch(url, {
        method: 'GET', // Method is GET
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTU4YWQzMjBjN2ZkYzE5MjEwODUyMjRjMmQwYjliOSIsIm5iZiI6MTcxOTc4ODAzMi41ODA2OTgsInN1YiI6IjY2ODFlMTYzZWVjZDExM2I0YWY1ZGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bFp6ebjRp8zjBhkrP81x64m0-6IELJG1vWoQuz4pnc`, // Use accessToken in the Authorization header
          'accept': 'application/json' // Accept header for JSON response
        }
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: UpcomingMovieResponse = await response.json();
      const simplifiedMovies: SimplifiedMovie[] = simplifyUpcomingMovies(data);
      return simplifiedMovies;
    } catch (error) {

        throw new Error(`Failed to fetch API data: ${error}`);
    }
  }


  /**
 * Fetches a list of movies based on a search query from The Movie Database (TMDb) API.
 * 
 * This function makes an HTTP GET request to the TMDb API's search endpoint for movies,
 * using the provided query string. It includes parameters to exclude adult content and
 * to use English as the language. The search results are simplified to an array of
 * `SimplifiedMovie` objects, which contain a subset of the movie information.
 * 
 * @param {string} query - The search query string used to find movies.
 * @returns {Promise<SimplifiedMovie[]>} A promise that resolves to an array of `SimplifiedMovie` objects.
 * 
 * @throws {Error} Throws an error if the HTTP request fails, if the API returns an error response, or if the search query is empty.
 */
  async function fetchSearchedMovies(query:string): Promise<SimplifiedMovie[]> {
    const url: string = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    try {
      const response = await fetch(url, {
        method: 'GET', // Method is GET
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTU4YWQzMjBjN2ZkYzE5MjEwODUyMjRjMmQwYjliOSIsIm5iZiI6MTcxOTc4ODAzMi41ODA2OTgsInN1YiI6IjY2ODFlMTYzZWVjZDExM2I0YWY1ZGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bFp6ebjRp8zjBhkrP81x64m0-6IELJG1vWoQuz4pnc`, // Use accessToken in the Authorization header
          'accept': 'application/json' // Accept header for JSON response
        }
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: PopularMovieResponse = await response.json();
      const simplifiedMovies: SimplifiedMovie[] = simplifyPopularMovies(data);
      return simplifiedMovies;
    } catch (error) {

        throw new Error(`Failed to fetch API data: ${error}`);
    }
  }



  export { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchSearchedMovies };