import { PopularMovieResponse, Movie, SimplifiedMovie } from '../models/types';

export function simplifyPopularMovies(data: PopularMovieResponse): SimplifiedMovie[] {
    const imgurl:string = 'https://image.tmdb.org/t/p/w500';
    return data.results.map((movie: Movie) => ({
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: imgurl+movie.poster_path
    }));
}

