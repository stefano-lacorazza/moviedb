
/**
 * Defines enums used for movie categorization and heart icon fill state in a web application.
 * 
 * The `MovieType` enum categorizes movies into four types: popular, upcoming, top rated, and search results. This categorization
 * is used throughout the application to filter or request movies based on their type from an API or a local dataset.
 * 
 * The `FillHeart` enum represents the fill state of a heart icon, typically used to indicate a user's liking or disliking of a movie.
 * It includes two states: filled (red) to indicate a liked movie, and unfilled (transparent) to indicate no preference.
 * 
 * These enums are exported for use in other parts of the application, ensuring consistency in the representation of movie types
 * and heart icon states.
 */
enum MovieType {
    POPULAR = 'popular',
    UPCOMING = 'upcoming',
    TOP_RATED = 'top_rated',
    SEARCH = 'search'
}

enum FillHeart {
    FILLED = 'red',
    UNFILLED = "transparent",
}

export { MovieType, FillHeart };