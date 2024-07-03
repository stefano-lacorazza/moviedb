import { PopularMovieResponse, UpcomingMovieResponse, Movie, SimplifiedMovie } from '../models/types';
import { Banner } from '../components/banner';
import { Button } from '../components/button';


/**
 * Simplifies the data structure of popular movies from an API response.
 * 
 * This function takes a `PopularMovieResponse` object as input and returns an array of `SimplifiedMovie` objects. Each `SimplifiedMovie`
 * object contains a subset of the properties from the original movie data, focusing on those most relevant for application use: `id`,
 * `title`, `overview`, `release_date`, and `poster_path`. The `poster_path` is constructed by concatenating a base URL for movie poster
 * images with the `poster_path` value from the original movie data, ensuring that the application can directly use the URLs for image
 * rendering.
 * 
 * @param {PopularMovieResponse} data - The full response object from the API containing an array of movies.
 * @returns {SimplifiedMovie[]} An array of simplified movie objects, each containing essential information for display.
 */
function simplifyPopularMovies(data: PopularMovieResponse): SimplifiedMovie[] {
    const imgurl:string = 'https://image.tmdb.org/t/p/w500';
    return data.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: imgurl+movie.poster_path
    }));
}

/**
 * Simplifies the data structure of upcoming movies from an API response.
 * 
 * This function processes an `UpcomingMovieResponse` object, extracting and transforming the movie data into a more manageable format
 * for use within the application. It returns an array of `SimplifiedMovie` objects, each containing essential information about an
 * upcoming movie, including its ID, title, overview, release date, and a URL for its poster image.
 * 
 * The poster image URL is constructed by appending the movie's `poster_path` to a predefined base URL, enabling direct use of these
 * URLs for displaying movie posters in the UI.
 * 
 * @param {UpcomingMovieResponse} data - The full response object from the API containing an array of upcoming movies.
 * @returns {SimplifiedMovie[]} An array of simplified movie objects, each containing essential information for display.
 */
function simplifyUpcomingMovies(data: UpcomingMovieResponse): SimplifiedMovie[] {
    const imgurl:string = 'https://image.tmdb.org/t/p/w500';
    return data.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: imgurl+movie.poster_path
    }));
}

/**
 * Simplifies the data structure of upcoming movies from an API response.
 * 
 * This function processes an `UpcomingMovieResponse` object, extracting and transforming the movie data into a more manageable format
 * for use within the application. It returns an array of `SimplifiedMovie` objects, each containing essential information about an
 * upcoming movie, including its ID, title, overview, release date, and a URL for its poster image.
 * 
 * The poster image URL is constructed by appending the movie's `poster_path` to a predefined base URL, enabling direct use of these
 * URLs for displaying movie posters in the UI.
 * 
 * @param {UpcomingMovieResponse} data - The full response object from the API containing an array of upcoming movies.
 * @returns {SimplifiedMovie[]} An array of simplified movie objects, each containing essential information for display.
 */
function randomMovieBanner(movieList : SimplifiedMovie[]): Banner {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const randomMovie = movieList[randomIndex];

    randomMovie.poster_path = randomMovie.poster_path.replace('w500', 'original');
    return new Banner(randomMovie.title, randomMovie.overview, randomMovie.poster_path);
}


/**
 * Arranges a collection of button components in a horizontally centered layout.
 * 
 * This function creates a container `div` element and applies CSS styles to arrange the provided button components in a row,
 * centered both horizontally and vertically. The buttons are spaced evenly with a fixed gap between them, and additional
 * margin is applied above and below the container for visual separation from other elements.
 * 
 * Each button component is assumed to have a `buttonElement` property that references its underlying HTML button element.
 * These elements are appended to the container, resulting in a visually cohesive and flexible button group.
 * 
 * @param {Button[]} buttons - An array of button components to be arranged.
 * @returns {HTMLElement} The container `div` with the button components arranged inside.
 */
function orderedButtons(buttons: Button[]): HTMLElement {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'center';
    buttonsContainer.style.alignItems = 'center';
    buttonsContainer.style.flexDirection = 'row'; 
    buttonsContainer.style.gap = '10px'; 
    // Add space above and below
    buttonsContainer.style.marginTop = '20px'; // Adjust the value as needed
    buttonsContainer.style.marginBottom = '20px'; // Adjust the value as needed
    buttons.forEach(button => buttonsContainer.appendChild(button.buttonElement));
    return buttonsContainer;
}




export { simplifyPopularMovies, simplifyUpcomingMovies, randomMovieBanner, orderedButtons};
