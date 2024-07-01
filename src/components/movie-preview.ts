class MoviePreview {
    title: string;
    img: string;
    description: string;
    releaseDate: string;

    constructor(title: string, img: string, description: string, releaseDate: string) {
        this.title = title;
        this.img = img;
        this.description = description;
        this.releaseDate = releaseDate;
    }

displayInfo(): string {
    return `


<div class="col-lg-3 col-md-4 col-12 p-2">
                            <div class="card shadow-sm">
                                <img
                                    src=${this.img}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="red"
                                    fill="red"
                                    width="50"
                                    height="50"
                                    class="bi bi-heart-fill position-absolute p-2"
                                    viewBox="0 -2 18 22"
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
                        </div>

    `;
}
}
/*
// Example usage:
const myFavoriteMovie = new MoviePreview("Inception", "Christopher Nolan", 2010);
myFavoriteMovie.displayInfo();

// Assuming you have an element with the ID 'movie-info' in your HTML
document.getElementById('movie-info').innerHTML = myFavoriteMovie.displayInfo();
*/