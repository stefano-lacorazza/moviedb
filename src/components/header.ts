/**
 * Represents a Header component for a web application.
 * 
 * This class encapsulates the functionality and structure of a Header component, including a title and a clickable button. 
 * The header is styled using Bootstrap's navbar component classes to ensure a consistent and responsive design. The button 
 * within the header is configured to toggle an offcanvas component, making it suitable for use in applications with 
 * offcanvas navigation or information panels.
 * 
 */
class Header {
    // Constructor to initialize the component
    constructor(private title: string, private onClick: () => void) {
        this.title = title;
        this.onClick = onClick;
    }

    // Method to render the component
    render(): HTMLElement {
        const navbar = document.createElement('div');
        navbar.className = 'navbar navbar-dark bg-dark shadow-sm';

        const container = document.createElement('div');
        container.className = 'container';

        const brandLink = document.createElement('a');
        brandLink.href = '#';
        brandLink.className = 'navbar-brand d-flex align-items-center';
        brandLink.innerHTML = `<img src="/images/logo.png" style="height: 60px; margin-right: 10px;"><strong>${this.title}</strong>`;

        const button = document.createElement('button');
        button.className = 'navbar-toggler';
        button.type = 'button';
        button.dataset.bsToggle = 'offcanvas';
        button.dataset.bsTarget = '#offcanvasRight';
        button.setAttribute('aria-controls', 'offcanvasRight');
        button.innerHTML = '<span class="navbar-toggler-icon"></span>';

         // Add an event listener to the button
         button.addEventListener('click', this.onClick);

        container.appendChild(brandLink);
        container.appendChild(button);
        navbar.appendChild(container);

        return navbar;
    }
}

export { Header };
