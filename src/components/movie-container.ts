class MoviesContainer {
  private filmContainerDiv: HTMLDivElement;

  constructor() {
    this.filmContainerDiv = document.createElement('div');
    this.filmContainerDiv.className = 'row';
    this.filmContainerDiv.id = 'film-container';
  }

  render() : HTMLElement{
    const albumDiv = document.createElement('div');
    albumDiv.className = 'album py-5 bg-light';

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


