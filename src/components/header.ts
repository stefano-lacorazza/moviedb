// Define a Header component
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
        brandLink.innerHTML = `<strong>${this.title}</strong>`;

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
/*
// Example usage:
const headerComponent = new Header("My App");
document.body.innerHTML = headerComponent.render();
*/