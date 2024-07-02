import { FillHeart } from "../models/enums";
import { SimplifiedMovie } from "../models/types";


/**
 * Represents a preview of a movie in a web application.
 * 
 * This class encapsulates the properties and functionality of a movie preview, including its title, image, description,
 * release date, and a heart icon to indicate user preference. The heart icon can be toggled between filled and unfilled
 * states, representing a user's liking or disliking of the movie. The class also provides a method to return a simplified
 * version of the movie's data, suitable for use in other parts of the application.
 * 
 * The constructor initializes the movie preview with the provided details and an onClick callback function, which is
 * called when the heart icon is clicked. The `toggleHeartState` method updates the heart icon's fill state in the DOM,
 * and the `render` method generates the HTML structure for the movie preview, including setting up the click event
 * listener for the heart icon.
 * 
 */
class MoviePreview {
    id: number;

    title: string;

    img: string;

    description: string;

    releaseDate: string;

    fillHeart: FillHeart;

    private onClick: (movie: SimplifiedMovie) => void;

    constructor(id:number, title: string, img: string, description: string, releaseDate: string, onClick: (movie:SimplifiedMovie) => void) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.description = description;
        this.releaseDate = releaseDate;
        this.fillHeart = FillHeart.UNFILLED;
        this.onClick = onClick;
    }
    
    toggleHeartState(): void {
        this.fillHeart = this.fillHeart === FillHeart.UNFILLED ? FillHeart.FILLED : FillHeart.UNFILLED;
        // Update the heart icon in the DOM to reflect the new state.
        const heartIcon = document.querySelector(`#heartIcon-${this.id}`) as SVGElement;
        if (heartIcon) {
            heartIcon.setAttribute("fill", this.fillHeart);
        }
    }

    returnMovie(): SimplifiedMovie {
    
        return {
            id: this.id,
            title: this.title,
            overview: this.description,
            release_date: this.releaseDate,
            poster_path: this.img
        };
    }
    
    render(): HTMLDivElement {
        const div = document.createElement('div');
        div.className = "col-lg-3 col-md-4 col-12 p-2";
        div.id = `movie-${this.id.toString()}`;
        div.innerHTML = `
                            <div class="card shadow-sm">
                                <img
                                    src=${this.img}
                                />
                                <svg
                                id="heartIcon-${this.id}"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="red"
                                fill=${this.fillHeart}
                                width="50"
                                height="50"
                                class="bi bi-heart-fill position-absolute p-2"
                                viewBox="0 -2 18 22"
                                style="pointer-events: auto;"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                            </svg>
                                <div class="card-body">
                                    <p class="card-text truncate">
                                    ${this.description}
                                    </p>
                                    <div
                                        class="
                                            d-flex
                                            justify-content-between
                                            align-items-center
                                        "
                                    >
                                        <small class="text-muted">${this.releaseDate}</small>
                                    </div>
                                </div>
                            </div>
    `;
    // Add the click event listener to the heart icon
    const heartIcon = div.querySelector(`#heartIcon-${this.id}`);
    if (heartIcon) {
        heartIcon.addEventListener('click', () => {
            this.toggleHeartState();
            this.onClick(this.returnMovie());
        });
 }

    return div;
}


}

export { MoviePreview };


