/**
 * Represents a banner component.
 * 
 * This class is designed to encapsulate the properties and functionality of a banner component,
 * which includes a title, a description, and an image. The banner is intended to show a random movie information
 * showcasing information such as movie details.
 * 
 */
class Banner {
        /**
     * Creates an instance of the Banner class.
     * 
     * @param {string} title - The title of the banner.
     * @param {string} description - The description for the banner.
     * @param {string} img - The image URL for the banner background.
     */
    constructor(private title: string, private description: string, private img: string) {
        this.title = title;
        this.description = description;
        this.img = img;
    }
    

    /**
     * Renders the banner component as an HTMLElement.
     * 
     * This method constructs the HTML structure of the banner component, applying styles
     * and attributes as necessary. It uses the class properties `title`, `description`,
     * and `img` to populate the content and styles of the banner.
     * 
     * @returns {HTMLElement} The banner component as an HTMLElement.
     */
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