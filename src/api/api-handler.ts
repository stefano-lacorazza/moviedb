import { PopularMovieResponse, UpcomingMovieResponse, SimplifiedMovie } from "../models/types";
import { simplifyPopularMovies, simplifyUpcomingMovies } from "../utils/helpers";

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

// Example usage
/*
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const accessToken = 'YOUR_ACCESS_TOKEN_HERE'; // Replace YOUR_ACCESS_TOKEN_HERE with your actual access token
fetchApiDataWithHeaders(url, accessToken)
  .then(data => console.log(data))
  .catch(error => console.error(error));

  */

  export { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchSearchedMovies };