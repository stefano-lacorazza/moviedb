// Ensure you have the TypeScript type definitions for Bootstrap if you're using TypeScript features.
// This example assumes you're working in a plain TypeScript environment without a specific framework like React or Angular.

class SearchBar {
  placeholder: string;

  searchButton: HTMLButtonElement;

  searchInput: HTMLInputElement;

  constructor( onClick: (query:string) => Promise<void>, placeholder: string = "Search...") {
    this.placeholder = placeholder;
     // Create search input
     this.searchInput = document.createElement("input");
     this.searchInput.setAttribute("type", "text");
     this.searchInput.className = "form-control";
     this.searchInput.placeholder = this.placeholder;
 
     // Create search button
     this.searchButton = document.createElement("button");
     this.searchButton.className = "btn btn-outline-secondary";
     this.searchButton.textContent = "Search";
     this.searchButton.onclick = () => onClick(this.getSearchInputValue());
 

  }

  public getSearchInputValue(): string {
    return this.searchInput.value;
  }

render(): HTMLElement {
  // Create the container for the search bar using Bootstrap classes
  const container = document.createElement("div");
  container.className = "input-group mb-3 input-group-sm"; // Smaller size

  const inputGroupAppend = document.createElement("div");
  inputGroupAppend.className = "input-group-append";

  // Smaller search button
  this.searchButton.className += " btn-sm";

  // Smaller search input
  this.searchInput.className += " form-control-sm";

  // Append the search button to the input group append element
  inputGroupAppend.appendChild(this.searchButton);

  // Append the search input and input group append element to the container
  container.appendChild(this.searchInput);
  container.appendChild(inputGroupAppend);

  // Create a wrapper div for centering with a fixed width
  const wrapper = document.createElement("div");
  wrapper.className = "d-flex justify-content-center"; // Centering
  wrapper.style.maxWidth = "600px"; // Fixed width for the search bar
  wrapper.style.margin = "auto"; // Ensure it stays centered

  wrapper.appendChild(container); // Add the search bar container to the wrapper

  // Append the wrapper to the body or a specific element in your document
  document.body.appendChild(wrapper);

  return wrapper; // Return the wrapper for further manipulation if needed
}

}

// Usage
export { SearchBar };