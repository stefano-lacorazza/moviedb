import { PopularMovieResponse, Movie, SimplifiedMovie } from '../models/types';
import { Banner } from '../components/banner';
import { Button } from '../components/button';
import { MoviesContainer } from '../components/movie-container';
import { MoviePreview } from '../components/movie-preview';


function simplifyPopularMovies(data: PopularMovieResponse): SimplifiedMovie[] {
    const imgurl:string = 'https://image.tmdb.org/t/p/w500';
    return data.results.map((movie: Movie) => ({
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: imgurl+movie.poster_path
    }));
}

function randomMovieBanner(movieList : SimplifiedMovie[]): Banner {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const randomMovie = movieList[randomIndex];
    return new Banner(randomMovie.title, randomMovie.overview, randomMovie.poster_path);
}

function orderedButtons(buttons: Button[]): HTMLElement {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'center';
    buttonsContainer.style.alignItems = 'center';
    buttonsContainer.style.flexDirection = 'row'; 
    buttonsContainer.style.gap = '10px'; 
    buttons.forEach(button => buttonsContainer.appendChild(button.buttonElement));
    return buttonsContainer;
}

function appendMoviesToContainer(movies: SimplifiedMovie[], moviesContainer:MoviesContainer ): void {
    movies.forEach(movie => {
        const moviePreview = new MoviePreview(
            movie.title,
            movie.poster_path,
            movie.overview,
            movie.release_date
        );
        moviesContainer.appendMovie(moviePreview.render());
    });
}


export { simplifyPopularMovies, randomMovieBanner, orderedButtons, appendMoviesToContainer};
