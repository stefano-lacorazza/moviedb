class Banner {
    constructor(private title: string, private description: string, private img: string) {
        this.title = title;
        this.description = description;
        this.img = img;
    }
    

// Method to render the component
render(): HTMLElement {
    const section = document.createElement('section');
    section.id = 'random-movie';
    section.className = 'py-5 text-center container-fluid';

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row py-lg-5';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'col-lg-6 col-md-8 mx-auto';
    contentDiv.style.backgroundColor = '#2525254f';
    // Add an image background
    section.style.backgroundImage = `url("${this.img}")`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';

    const movieName = document.createElement('h1');
    movieName.id = 'random-movie-name';
    movieName.className = 'fw-light text-light';
    movieName.textContent = `${this.title}`;

    const movieDescription = document.createElement('p');
    movieDescription.id = 'random-movie-description';
    movieDescription.className = 'lead text-white';
    movieDescription.textContent = `${this.description}`;

    contentDiv.appendChild(movieName);
    contentDiv.appendChild(movieDescription);
    rowDiv.appendChild(contentDiv);
    section.appendChild(rowDiv);

    return section;
}

}

export { Banner };