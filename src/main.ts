import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';
import { MoviePreview } from './components/movie-preview';
import { Header } from './components/header';
import { Banner } from './components/banner';
import { Button } from './components/button';
import { MoviesContainer } from './components/movie-container';
import { SearchBar } from './components/search-bar';

function renderApp() {
 
    // Create a new instance of the Header class and append it to the body of the document
    const header = new Header('Movie App');
    document.body.appendChild(header.render());

    // Create a new instance of the Banner class and append it to the body of the document
    const banner = new Banner(
        'Inception',
        'A thief who enters the dreams of others to steal their secrets.',
        'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
    );
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

    // Create a new instance of the MoviePreview class and append it to the body of the document
    const inceptionMovie = new MoviePreview(
        'Inception',
        'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
        'A thief who enters the dreams of others to steal their secrets.',
        '2010-07-16'
    );

    moviesContainer.appendMovie(inceptionMovie.render());
    moviesContainer.appendMovie(inceptionMovie.render());
    moviesContainer.appendMovie(inceptionMovie.render());
    moviesContainer.appendMovie(inceptionMovie.render());
    moviesContainer.appendMovie(inceptionMovie.render());
    moviesContainer.appendMovie(inceptionMovie.render());
    moviesContainer.appendMovie(inceptionMovie.render());
    moviesContainer.appendMovie(inceptionMovie.render());

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
