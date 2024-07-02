class Favourites {
    private container: HTMLElement; // Define container as a class property

    private bodyDiv: HTMLElement;

    constructor() {
        // Create the offcanvas container
        this.container = document.createElement('div');
        this.container.className = 'offcanvas offcanvas-end';
        this.container.tabIndex = -1;
        this.container.id = 'offcanvasRight';
        this.container.setAttribute('aria-labelledby', 'offcanvasRightLabel');

        // Create the offcanvas header
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

        // Append the title and close button to the header
        headerDiv.appendChild(headerTitle);
        headerDiv.appendChild(closeButton);

        // Create the offcanvas body
        this.bodyDiv = document.createElement('div');
        this.bodyDiv.id = 'favorite-movies';
        this.bodyDiv.className = 'offcanvas-body';

        // Append the header and body to the container
        this.container.appendChild(headerDiv);
        this.container.appendChild(this.bodyDiv);
    }

    // Render the favourites component
    render(): HTMLElement {
        // Create the content inside the offcanvas body
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 p-2';


        return this.container;
    }

    
    // Toggle the visibility of the component
    toggleVisibility(): void {
        // Option 1: Using a CSS class to toggle visibility
        this.container.classList.toggle('hidden');
    }

    appendMovie(movie: HTMLElement): void {
        this.bodyDiv.appendChild(movie);
    }

}

export { Favourites };