import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from './api/api-handler';
import './styles/styles.css';
import { Header } from './components/header';
import { Button } from './components/button';
import { MoviesContainer } from './components/movie-container';
import { SearchBar } from './components/search-bar';
import { SimplifiedMovie } from './models/types';
import { randomMovieBanner, orderedButtons, appendMoviesToContainer } from './utils/helpers';
import { MovieType } from './models/enums';


let count:number = 1;
let moviesContainer = new MoviesContainer();
let moviesType: MovieType = MovieType.POPULAR;

async function renderApp() {
    
    
    const popularMovies: SimplifiedMovie[] = await fetchPopularMovies();
    // Create a new instance of the Header class and append it to the body of the document
    const header = new Header('Movie App');
    document.body.appendChild(header.render());


    // Create a new instance of the Banner class and append it to the body of the document
    const banner = randomMovieBanner(popularMovies);
    document.body.appendChild(banner.render());


    // Create a new instances of the Buttons class for a button to display the popular movies,upcoming movies and top rated movies
    const popularMoviesButton = new Button('Popular', seePopularMovies);
    const upcomingMoviesButton = new Button('Upcoming', seeUpcomingMovies);
    const topRatedMoviesButton = new Button('Top Rated', seeTopRatedMovies);

    // Append the three buttons to the body of the document side by side
    const buttonsContainer = orderedButtons([popularMoviesButton, upcomingMoviesButton, topRatedMoviesButton]);
    document.body.appendChild(buttonsContainer);

    // Create a new instance of the SearchBar class and append it to the body of the document
    const searchBar = new SearchBar('Search');
    document.body.appendChild(searchBar.render());

    // Create a new instance of the MoviesContainer class and append it to the body of the document
    
    appendMoviesToContainer(popularMovies, moviesContainer);
    document.body.appendChild(  moviesContainer.render());

     // Create a new instance of the Button class for a button to Load More Movies
    const loadMoreMoviesButton = new Button('Load More', loadMoreMovies);
    const buttonsContainer2= orderedButtons([loadMoreMoviesButton]);
    document.body.appendChild(buttonsContainer2);
}

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
    appendMoviesToContainer(movies, moviesContainer);
}

async function seePopularMovies() : Promise<void>{
    count =1;
    moviesType = MovieType.POPULAR;
    const movies: SimplifiedMovie[] = await fetchPopularMovies();
    moviesContainer = new MoviesContainer();
    appendMoviesToContainer(movies, moviesContainer);
    const existingContainerElement = document.getElementById('movie-container');
    if (existingContainerElement && existingContainerElement.parentNode) {
        existingContainerElement.parentNode.replaceChild(moviesContainer.render(), existingContainerElement);
    } else {
        // If the container doesn't exist or has no ID, append the new container to the body
        // This might not be the desired behavior if you have a specific place in the DOM for the container
        document.body.appendChild(moviesContainer.render());
    }
}

async function seeTopRatedMovies() : Promise<void>{
    count =1;
    moviesType = MovieType.TOP_RATED;
    const movies: SimplifiedMovie[] = await fetchTopRatedMovies();
    moviesContainer = new MoviesContainer();
    appendMoviesToContainer(movies, moviesContainer);
    const existingContainerElement = document.getElementById('movie-container');
    if (existingContainerElement && existingContainerElement.parentNode) {
        existingContainerElement.parentNode.replaceChild(moviesContainer.render(), existingContainerElement);
    } else {
        // If the container doesn't exist or has no ID, append the new container to the body
        // This might not be the desired behavior if you have a specific place in the DOM for the container
        document.body.appendChild(moviesContainer.render());
    }
}

async function seeUpcomingMovies() : Promise<void>{
    count =1;
    moviesType = MovieType.UPCOMING;
    const movies: SimplifiedMovie[] = await fetchUpcomingMovies();
    moviesContainer = new MoviesContainer();
    appendMoviesToContainer(movies, moviesContainer);
    const existingContainerElement = document.getElementById('movie-container');
    if (existingContainerElement && existingContainerElement.parentNode) {
        existingContainerElement.parentNode.replaceChild(moviesContainer.render(), existingContainerElement);
    } else {
        // If the container doesn't exist or has no ID, append the new container to the body
        // This might not be the desired behavior if you have a specific place in the DOM for the container
        document.body.appendChild(moviesContainer.render());
    }
}


renderApp();
