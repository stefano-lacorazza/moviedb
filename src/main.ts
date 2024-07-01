import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPopularMovies } from './api/api-handler';
import './styles/styles.css';
import { Header } from './components/header';
import { Button } from './components/button';
import { MoviesContainer } from './components/movie-container';
import { SearchBar } from './components/search-bar';
import { SimplifiedMovie } from './models/types';
import { randomMovieBanner, orderedButtons, appendMoviesToContainer } from './utils/helpers';

async function renderApp() {
    
    const popularMovies: SimplifiedMovie[] = await fetchPopularMovies();
    // Create a new instance of the Header class and append it to the body of the document
    const header = new Header('Movie App');
    document.body.appendChild(header.render());


    // Create a new instance of the Banner class and append it to the body of the document
    const banner = randomMovieBanner(popularMovies);
    document.body.appendChild(banner.render());


    // Create a new instances of the Buttons class for a button to display the popular movies,upcoming movies and top rated movies
    const popularMoviesButton = new Button('Popular', () => {});
    const upcomingMoviesButton = new Button('Upcoming', () => {});
    const topRatedMoviesButton = new Button('Top Rated', () => {});

    // Append the three buttons to the body of the document side by side
    const buttonsContainer = orderedButtons([popularMoviesButton, upcomingMoviesButton, topRatedMoviesButton]);
    document.body.appendChild(buttonsContainer);

    // Create a new instance of the SearchBar class and append it to the body of the document
    const searchBar = new SearchBar('Search');
    document.body.appendChild(searchBar.render());

    // Create a new instance of the MoviesContainer class and append it to the body of the document
    const moviesContainer = new MoviesContainer();
    appendMoviesToContainer(popularMovies, moviesContainer);
    document.body.appendChild(  moviesContainer.render());

     // Create a new instance of the Button class for a button to Load More Movies
    const loadMoreMoviesButton = new Button('Load More', () => {});
    const buttonsContainer2= orderedButtons([loadMoreMoviesButton]);
    document.body.appendChild(buttonsContainer2);
}


renderApp();
