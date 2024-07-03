import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchSearchedMovies } from './api/api-handler';
import './styles/styles.css';
import { Header } from './components/header';
import { Button } from './components/button';
import { Favourites } from './components/favorites';
import { MoviesContainer } from './components/movie-container';
import { SearchBar } from './components/search-bar';
import { SimplifiedMovie } from './models/types';
import { randomMovieBanner, orderedButtons} from './utils/helpers';
import { MovieType } from './models/enums';
import { MoviePreview } from './components/movie-preview';

let count:number = 1;
let moviesContainer = new MoviesContainer();
let moviesType: MovieType = MovieType.POPULAR;
const favourites = new Favourites();

/**
 * Initializes and renders the main application interface.
 * 
 * This asynchronous function orchestrates the rendering of the main components of the movie application. It fetches a list of popular
 * movies and then sequentially creates and appends various UI components to the document body, including a header, a favorites section,
 * a banner featuring a random movie, buttons for filtering movies, a search bar, a container for displaying movies, and a button for
 * loading more movies.
 * 
 * The process involves:
 * - Fetching a list of popular movies and storing them in `popularMovies`.
 * - Creating a header with the application title and a toggle function for the favorites section, then appending it to the document.
 * - Rendering and appending the favorites section.
 * - Selecting a random movie from `popularMovies` to feature in a banner and appending the banner.
 * - Creating buttons for filtering movies by popular, upcoming, and top-rated categories, arranging them in a container, and appending
 *   the container.
 * - Creating and appending a search bar for movie searches.
 * - Displaying the initial list of popular movies in a movies container.
 * - Creating and appending a button to load more movies.
 * 
 * Each component is created using its respective class and rendered by calling its `render` method or, in the case of buttons, by
 * arranging them using the `orderedButtons` utility function.
 */
async function renderApp() {
    
    
    const popularMovies: SimplifiedMovie[] = await fetchPopularMovies();

    // Create a new instance of the Header class and append it to the body of the document
    const header = new Header('Franflix', favourites.toggleVisibility );
    document.body.appendChild(header.render());

    
    document.body.appendChild(favourites.render());


    // Create a new instance of the Banner class and append it to the body of the document
    const banner = randomMovieBanner(popularMovies);
    document.body.appendChild(banner.render());


    // Create a new instances of the Buttons class for a button to display the popular movies,upcoming movies and top rated movies
    const popularMoviesButton = new Button('Popular', seePopularMovies, "popular");
    const upcomingMoviesButton = new Button('Upcoming', seeUpcomingMovies, "upcoming");
    const topRatedMoviesButton = new Button('Top Rated', seeTopRatedMovies, "top_rated");

    // Append the three buttons to the body of the document side by side
    const buttonsContainer = orderedButtons([popularMoviesButton, upcomingMoviesButton, topRatedMoviesButton]);
    document.body.appendChild(buttonsContainer);

    // Create a new instance of the SearchBar class and append it to the body of the document
    const searchBar = new SearchBar(seeSearchedMovies, 'Search Movies...');
    document.body.appendChild(searchBar.render());

    // Create a new instance of the MoviesContainer class and append it to the body of the document
    
    appendMoviesToContainer(popularMovies);
    document.body.appendChild(  moviesContainer.render());

     // Create a new instance of the Button class for a button to Load More Movies
    const loadMoreMoviesButton = new Button('Load More', loadMoreMovies, "load-more");
    const buttonsContainer2= orderedButtons([loadMoreMoviesButton]);
    document.body.appendChild(buttonsContainer2);
}


/**
 * Loads more movies based on the current selection and appends them to the movie display container.
 * 
 * This asynchronous function increments a global `count` variable, which tracks the number of times movies have been loaded,
 * to fetch the next set of movies based on the current `moviesType` selection. The `moviesType` can be one of `MovieType.POPULAR`,
 * `MovieType.TOP_RATED`, or another category, determining which API call to make: `fetchPopularMovies`, `fetchTopRatedMovies`, or
 * `fetchUpcomingMovies`, respectively.
 * 
 * After fetching the next set of movies, the function appends these movies to the existing display container using the
 * `appendMoviesToContainer` function. This allows for a dynamic and continuous addition of movies as the user requests more content.
 */
async function loadMoreMovies() : Promise<void>{
    count +=1;
    let movies: SimplifiedMovie[] = [];
    if (moviesType === MovieType.POPULAR){
         movies = await fetchPopularMovies(count);
    }
    else if (moviesType === MovieType.TOP_RATED){
         movies = await fetchTopRatedMovies(count);
    }
    else {
         movies = await fetchUpcomingMovies(count)
    }
    appendMoviesToContainer(movies);
}

async function seePopularMovies() : Promise<void>{
    count =1;
    moviesType = MovieType.POPULAR;
    const movies: SimplifiedMovie[] = await fetchPopularMovies();
    moviesContainer = new MoviesContainer();
    appendMoviesToContainer(movies);
    const existingContainerElement = document.getElementById('movie-container');
    if (existingContainerElement && existingContainerElement.parentNode) {
        existingContainerElement.parentNode.replaceChild(moviesContainer.render(), existingContainerElement);
    } else {
        // If the container doesn't exist or has no ID, append the new container to the body
        // This might not be the desired behavior if you have a specific place in the DOM for the container
        document.body.appendChild(moviesContainer.render());
    }
}


/**
 * Fetches and displays popular movies in the application.
 * 
 * This asynchronous function is responsible for initiating the process of fetching popular movies from an API, resetting the global
 * `count` variable to 1, and setting the `moviesType` to `MovieType.POPULAR`. It then awaits the fetching of popular movies, which
 * returns an array of `SimplifiedMovie` objects.
 * 
 * A new `MoviesContainer` instance is created to hold the movie elements. The function then calls `appendMoviesToContainer` to add
 * the fetched movies to this container. If an existing movie container is found in the DOM (identified by the ID 'movie-container'),
 * it is replaced with the new `MoviesContainer`. If no such container exists, the new container is appended directly to the document
 * body.
 * 
 * This function effectively refreshes the movie display area with popular movies, making it a key part of the application's functionality
 * for users interested in popular titles.
 */
async function seeTopRatedMovies() : Promise<void>{
    count =1;
    moviesType = MovieType.TOP_RATED;
    const movies: SimplifiedMovie[] = await fetchTopRatedMovies();
    moviesContainer = new MoviesContainer();
    appendMoviesToContainer(movies);
    const existingContainerElement = document.getElementById('movie-container');
    if (existingContainerElement && existingContainerElement.parentNode) {
        existingContainerElement.parentNode.replaceChild(moviesContainer.render(), existingContainerElement);
    } else {
        document.body.appendChild(moviesContainer.render());
    }
}

/**
 * Displays upcoming movies in the application.
 * 
 * This asynchronous function is designed to update the application's movie display area with a list of upcoming movies. It starts by
 * resetting the global `count` variable to 1 and setting the `moviesType` to `MovieType.UPCOMING`, indicating the current selection
 * of movie types.
 * 
 * It then fetches an array of `SimplifiedMovie` objects representing upcoming movies by calling `fetchUpcomingMovies`. A new instance
 * of `MoviesContainer` is created to hold these movies, and the `appendMoviesToContainer` function is used to add the fetched movies
 * to this container.
 * 
 * If an existing movie container (identified by the ID 'movie-container') is found in the DOM, it is replaced with the newly created
 * `MoviesContainer`. If no such container exists, the new container is appended directly to the document body.
 * 
 * This function allows users to view a curated list of movies that are scheduled for release, keeping them informed about future
 * entertainment options.
 */
async function seeUpcomingMovies() : Promise<void>{
    count =1;
    moviesType = MovieType.UPCOMING;
    const movies: SimplifiedMovie[] = await fetchUpcomingMovies();
    moviesContainer = new MoviesContainer();
    appendMoviesToContainer(movies);
    const existingContainerElement = document.getElementById('movie-container');
    if (existingContainerElement && existingContainerElement.parentNode) {
        existingContainerElement.parentNode.replaceChild(moviesContainer.render(), existingContainerElement);
    } else {
        document.body.appendChild(moviesContainer.render());
    }
}


/**
 * Displays movies based on a user's search query in the application.
 * 
 * This asynchronous function is tasked with displaying movies that match a user's search query. It begins by resetting the global
 * `count` variable to 1 and setting the `moviesType` to `MovieType.SEARCH`, indicating that the current movie display is based on
 * a search operation.
 * 
 * It then fetches an array of `SimplifiedMovie` objects that match the search term by calling `fetchSearchedMovies`. A new
 * `MoviesContainer` instance is created to hold these movies, and the `appendMoviesToContainer` function is used to add the fetched
 * movies to this container.
 * 
 * If an existing movie container (identified by the ID 'movie-container') is found in the DOM, this function replaces it with the
 * newly created `MoviesContainer` using the `replaceChild` method. If no such container exists, the new container is appended
 * directly to the document body.
 * 
 * This function enables dynamic content display based on user input, allowing for a tailored viewing experience.
 */
async function seeSearchedMovies(searchTerm: string) : Promise<void>{
    count =1;
    moviesType = MovieType.SEARCH;
    const movies: SimplifiedMovie[] = await fetchSearchedMovies(searchTerm);
    moviesContainer = new MoviesContainer();
    appendMoviesToContainer(movies);
    const existingContainerElement = document.getElementById('movie-container');
    if (existingContainerElement && existingContainerElement.parentNode) {
        existingContainerElement.parentNode.replaceChild(moviesContainer.render(), existingContainerElement);
    } else {
        document.body.appendChild(moviesContainer.render());
    }
}


/**
 * Appends an array of movies to the movie display container.
 * 
 * This function iterates over an array of `SimplifiedMovie` objects, creating a `MoviePreview` component for each movie. The
 * `MoviePreview` component is initialized with the movie's ID, title, poster path, overview, and release date, along with a
 * callback function `favoriteMovie` that can be triggered to mark a movie as a favorite.
 * 
 * Each `MoviePreview` component is then rendered and appended to the `moviesContainer`, a predefined container for movie previews.
 * This process dynamically populates the movie display area with individual movie previews, allowing users to browse through a
 * collection of movies.
 */
function appendMoviesToContainer(movies: SimplifiedMovie[]): void {
    const keys = returnListStorageIds();
    movies.forEach(movie => {
        const moviePreview = new MoviePreview(
            movie.id,
            movie.title,
            movie.poster_path,
            movie.overview,
            movie.release_date,
            movie.vote_average,
            favoriteMovie
        );

        if (keys.includes(movie.id.toString().trim())){

            moviePreview.toggleHeartState();
        }
        moviesContainer.appendMovie(moviePreview.render());
    });
}

/**
 * Toggles a movie's favorite status and updates the favorites display.
 * 
 * This function is responsible for adding or removing a movie from the user's favorites. It takes a `SimplifiedMovie` object as its
 * parameter. The function first converts the movie object into a JSON string for storage purposes.
 * 
 * It then checks if the movie is already marked as a favorite by attempting to retrieve it from `localStorage` using the movie's ID
 * as the key. If the movie is found (indicating it is already a favorite), it is removed from `localStorage`, effectively unmarking
 * it as a favorite.
 * 
 * If the movie is not found in `localStorage` (indicating it is not currently a favorite), it is added to `localStorage` with its ID
 * as the key and the JSON string as the value. Additionally, a new `MoviePreview` component for the movie is created and appended to
 * the favorites section of the UI, visually indicating that the movie has been added to favorites.
 * 
 * This toggle functionality allows users to easily add or remove movies from their favorites with a single action, and updates the
 * UI to reflect these changes in real-time.
 */
function favoriteMovie(movie: SimplifiedMovie): void {
    // Retrieve the favoriteMovies array from localStorage, or initialize it as an empty array if it doesn't exist
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');

    // Find the index of the movie in the array
    const movieIndex = favoriteMovies.findIndex((m: SimplifiedMovie) => m.id === movie.id);

    if (movieIndex > -1) {
        // If the movie is already in the array, remove it
        favoriteMovies.splice(movieIndex, 1);
        favourites.removeMovie(movie.id);
    } else {
        // If the movie is not in the array, add it
        favoriteMovies.push(movie);
        const moviePreview = new MoviePreview(movie.id, movie.title, movie.poster_path, movie.overview, movie.release_date,movie.vote_average, favoriteMovie);
        favourites.appendMovie(moviePreview.render());
    }

    // Save the updated favoriteMovies array to localStorage
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
}

/**
 * Adds all movies stored in the local storage to the favorites list.
 * 
 * This function iterates over all items stored in the local storage. For each item,
 * it checks if the item key is valid and then retrieves the item's value. The value,
 * expected to be a JSON string representing a movie, is parsed into a movie object.
 * A new MoviePreview instance is created for the movie, and this instance is then
 * appended to the favorites list using its `render` method.
 * 
 * Assumptions:
 * - Each item in the local storage represents a movie, stored as a JSON string.
 * - The `MoviePreview` class is used to create a preview of the movie, which includes
 *   the movie's id, title, poster path, overview, and release date. The `favoriteMovie`
 *   parameter in the constructor is assumed to be a method or property related to
 *   marking a movie as a favorite.
 * - The `favourites` object has an `appendMovie` method that takes a rendered movie
 *   preview and appends it to the favorites list.
 * 
 */
function addAllMoviesFromLocalStorageToFavorites(): void {
    // Retrieve the favoriteMovies array from localStorage
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    // Iterate over the favoriteMovies array
// Iterate over the favoriteMovies array
    favoriteMovies.forEach((movie: SimplifiedMovie) => {
    // Create a new MoviePreview instance for each movie
    const moviePreview = new MoviePreview(movie.id, movie.title, movie.poster_path, movie.overview, movie.release_date, movie.vote_average, favoriteMovie);
    // Append the moviePreview to the favorites list
    favourites.appendMovie(moviePreview.render());
});
}

function returnListStorageIds(): string[] {
    // Retrieve the favoriteMovies array from localStorage
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    // Extract and return the IDs from the favoriteMovies array
    
    const keys: string[] = favoriteMovies.map((movie: { id: string }) => movie.id.toString().trim());

    return keys
}


renderApp();
addAllMoviesFromLocalStorageToFavorites();
