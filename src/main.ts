import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';

// TODO render your app here

// Function to render the app
function renderApp() {
    // Create a div element
    const appElement = document.createElement('div');
    // Add some text or HTML content to the div
    appElement.innerHTML = `<h1>Hello, World!</h1><p>Welcome to my app.</p>`;
    // Add Bootstrap classes for styling
    appElement.className = 'container mt-5';
    // Append the div to the body of the document
    document.body.appendChild(appElement);
}

// Call the function to render the app
renderApp();
