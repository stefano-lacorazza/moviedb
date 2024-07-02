/**
 * Represents a container for displaying movies in a web application.
 * 
 * This class encapsulates the functionality for creating and managing a movie display container. It is designed to hold
 * individual movie elements, organizing them in a grid layout. The container itself is styled to be visually distinct
 * and user-friendly, with a light background and padding. Movies are added to the container through the `appendMovie`
 * method, allowing for dynamic content management.
 * 
 * The `MoviesContainer` class creates a primary `div` element (`filmContainerDiv`) with a 'row' class for grid layout,
 * and wraps it within a 'container' class `div` and an 'album py-5 bg-light' class `div` for styling. The `render` method
 * appends the constructed container to the document body and returns the outermost `div` element, making it ready for
 * display in the DOM.
 * 
 * */
class MoviesContainer {
  private filmContainerDiv: HTMLDivElement;

  constructor() {
    this.filmContainerDiv = document.createElement('div');
    this.filmContainerDiv.className = 'row';
    this.filmContainerDiv.id = 'film-container';
    this.filmContainerDiv.style.pointerEvents = 'none';
  }

  render() : HTMLElement{
    const albumDiv = document.createElement('div');
    albumDiv.className = 'album py-5 bg-light';
    albumDiv.id = 'movie-container';

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    containerDiv.appendChild(this.filmContainerDiv);
    albumDiv.appendChild(containerDiv);
    document.body.appendChild(albumDiv);
    return albumDiv;
  }

  appendMovie(child: HTMLElement) {
    this.filmContainerDiv.appendChild(child);
  }
  
}

export { MoviesContainer };


