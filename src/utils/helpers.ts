import { PopularMovieResponse, UpcomingMovieResponse, Movie, SimplifiedMovie } from '../models/types';
import { Banner } from '../components/banner';
import { Button } from '../components/button';



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




export { simplifyPopularMovies, simplifyUpcomingMovies, randomMovieBanner, orderedButtons};
