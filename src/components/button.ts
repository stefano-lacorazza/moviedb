class Button {
  private text: string;
  
  private styleClass: string;

  private onClick: () => void; // Callback function type

  public buttonElement: HTMLButtonElement; // To access the button outside the class

  constructor(text: string, onClick: () => void, styleClass: string = 'btn-primary') {
    this.text = text;
    this.onClick = onClick;
    this.styleClass = styleClass;
    this.buttonElement = this.createButton(); // Create the button upon instantiation
    this.addButtonClickListener(); // Add click event listener
  }

  // Method to create and return a Bootstrap-styled button
  private createButton(): HTMLButtonElement {
    // Create a button element
    const button = document.createElement('button');
    // Add Bootstrap button classes
    button.className = `btn ${this.styleClass}`;
    // Set button text
    button.textContent = this.text;
    // Return the button element
    return button;
  }

  // Method to add click event listener to the button
  private addButtonClickListener(): void {
    this.buttonElement.addEventListener('click', this.onClick);
  }
}
export { Button };