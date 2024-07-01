import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPopularMovies } from './api/api-handler';
import './styles/styles.css';
import { MoviePreview } from './components/movie-preview';
import { Header } from './components/header';
import { Banner } from './components/banner';
import { Button } from './components/button';
import { MoviesContainer } from './components/movie-container';
import { SearchBar } from './components/search-bar';
import { SimplifiedMovie } from './models/types';
import { randomMovieBanner } from './utils/helpers';

async function renderApp() {
    const popularMovies: SimplifiedMovie[] = await fetchPopularMovies();
    // Create a new instance of the Header class and append it to the body of the document
    const header = new Header('Movie App');
    document.body.appendChild(header.render());


    // Create a new instance of the Banner class and append it to the body of the document
    const banner = randomMovieBanner(popularMovies);
    document.body.appendChild(banner.render());


    // Create a new instance of the Button class for a button to display the popular movies
    const popularMoviesButton = new Button('Popular', () => {
        });

    // Create a new instance of the Button class for a button to display the upcoming movies
    const upcomingMoviesButton = new Button('Upcoming', () => {});

    // Create a new instance of the Button class for a button to display the top rated movies
    const topRatedMoviesButton = new Button('Top Rated', () => {});

    // Append the three buttons to the body of the document side by side
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'center';
    buttonsContainer.style.alignItems = 'center';
    buttonsContainer.style.flexDirection = 'row'; 
    buttonsContainer.style.gap = '10px'; 
    buttonsContainer.appendChild(upcomingMoviesButton.buttonElement);
    buttonsContainer.appendChild(topRatedMoviesButton.buttonElement);
    buttonsContainer.appendChild(popularMoviesButton.buttonElement);
    document.body.appendChild(buttonsContainer);

    // Create a new instance of the SearchBar class and append it to the body of the document
    const searchBar = new SearchBar('Search');
    document.body.appendChild(searchBar.render());

    // Create a new instance of the MoviesContainer class and append it to the body of the document
    const moviesContainer = new MoviesContainer();

   
    popularMovies.forEach(movie => {
        const moviePreview = new MoviePreview(
            movie.title,
            movie.poster_path,
            movie.overview,
            movie.release_date
        );
        moviesContainer.appendMovie(moviePreview.render());
    });

    
    document.body.appendChild(  moviesContainer.render());
     // Create a new instance of the Button class for a button to Load More Movies
    const loadMoreMoviesButton = new Button('Load More', () => {});



    const buttonsContainer2= document.createElement('div');
    buttonsContainer2.style.display = 'flex';
    buttonsContainer2.style.justifyContent = 'center';
    buttonsContainer2.style.alignItems = 'center';
    buttonsContainer2.style.flexDirection = 'row'; 
    buttonsContainer2.style.gap = '10px'; 
    buttonsContainer2.appendChild(loadMoreMoviesButton.buttonElement);
    document.body.appendChild(buttonsContainer2);
}


// Call the function to render the app
renderApp();
