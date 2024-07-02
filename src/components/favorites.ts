/**
 * Represents a favorites component using an offcanvas layout.
 * 
 * This class encapsulates the functionality for creating and managing a favorites component,
 * which is designed to display a list of favorite items (e.g., movies) in an offcanvas container.
 * The offcanvas container is positioned at the end of the viewport and can be toggled to show or hide.
 * It includes a header with a title and a close button, and a body where favorite items are appended.
 * 
 */
class Favourites {
    /**
     * The main container element for the favorites offcanvas.
     */
    private container: HTMLElement;

    /**
     * The body element of the offcanvas where favorite items are appended.
     */
    private bodyDiv: HTMLElement;

    /**
     * Constructs a new Favourites instance by setting up the offcanvas layout.
     */
    constructor() {
        // Initialize the offcanvas container with appropriate classes and attributes
        this.container = document.createElement('div');
        this.container.className = 'offcanvas offcanvas-end';
        this.container.tabIndex = -1;
        this.container.id = 'offcanvasRight';
        this.container.setAttribute('aria-labelledby', 'offcanvasRightLabel');

        // Set up the offcanvas header with a title and close button
        const headerDiv = document.createElement('div');
        headerDiv.className = 'offcanvas-header';

        const headerTitle = document.createElement('h5');
        headerTitle.id = 'offcanvasRightLabel';
        headerTitle.textContent = 'FAVORITE';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close text-reset';
        closeButton.setAttribute('data-bs-dismiss', 'offcanvas');
        closeButton.setAttribute('aria-label', 'Close');

        headerDiv.appendChild(headerTitle);
        headerDiv.appendChild(closeButton);

        // Initialize the offcanvas body for appending favorite items
        this.bodyDiv = document.createElement('div');
        this.bodyDiv.id = 'favorite-movies';
        this.bodyDiv.className = 'offcanvas-body';

        this.container.appendChild(headerDiv);
        this.container.appendChild(this.bodyDiv);
    }

    /**
     * Renders the favorites component and returns the container element.
     * 
     * @returns {HTMLElement} The container element of the favorites component.
     */
    render(): HTMLElement {
        // Additional content can be created and appended to `this.bodyDiv` here if needed
        return this.container;
    }

    /**
     * Toggles the visibility of the favorites component by adding or removing a 'hidden' class.
     */
    toggleVisibility(): void {
        this.container.classList.toggle('hidden');
    }

    /**
     * Appends a movie element to the favorites component's body.
     * 
     * @param {HTMLElement} movie - The movie element to append.
     */
    appendMovie(movie: HTMLElement): void {
        this.bodyDiv.appendChild(movie);
    }
}

export { Favourites };