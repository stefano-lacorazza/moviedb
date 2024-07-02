/**
 * Represents a button component.
 * 
 * This class encapsulates the properties and functionality of a button component, including its text,
 * style, and click event handler. The button is styled using Bootstrap classes by default, but allows
 * for customization through the `styleClass` parameter. The click event handler is specified as a
 * callback function that can optionally be asynchronous.
 * 
 * @example
 * const myButton = new Button("Click Me", async () => {
 *   console.log("Button clicked!");
 * }, "btn-success");
 * document.body.appendChild(myButton.buttonElement);
 */
class Button {
    /**
   * The text displayed on the button.
   */
  private text: string;
  
    /**
   * The CSS class applied to the button for styling. Defaults to 'btn-primary'.
   */
  private styleClass: string;

    /**
   * The callback function executed when the button is clicked. Can be asynchronous.
   */
  private onClick: () => void; // Callback function type

    /**
   * The HTMLButtonElement instance representing the button in the DOM.
   * This allows for direct manipulation and access outside the class.
   */
  public buttonElement: HTMLButtonElement; // To access the button outside the class

    /**
   * Constructs a new Button instance.
   * 
   * @param {string} text - The text to display on the button.
   * @param {() => Promise<void>} onClick - The callback function to execute on button click.
   * @param {string} styleClass - The CSS class for styling the button. Defaults to 'btn-primary'.
   */

  constructor(text: string, onClick: () => Promise<void>, styleClass: string = 'btn-primary') {
    this.text = text;
    this.onClick = onClick;
    this.styleClass = styleClass;
    this.buttonElement = this.createButton(); // Create the button upon instantiation
    this.addButtonClickListener(); // Add click event listener
  }

  /**
   * Creates and returns a Bootstrap-styled button element.
   * 
   * @returns {HTMLButtonElement} The created button element.
   */
  private createButton(): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = `btn ${this.styleClass}`;
    button.textContent = this.text;
    return button;
  }

  /**
   * Adds a click event listener to the button, binding it to the `onClick` callback.
   */
  private addButtonClickListener(): void {
    this.buttonElement.addEventListener('click', this.onClick);
  }
}
export { Button };