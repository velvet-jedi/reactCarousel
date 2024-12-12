-   tailwind
-   react
-   testimonials carousel
-   accessiblity
-   keyboard nav

-   possibly do image optimizations

Logical Decisions:

-   Some state for the index being shown
-   lucide-react library for icons

Note on Approaches to Image Carousel Implementation
Approach 1: Direct Implementation in Parent Component
Pros:

Simplicity for small projects.

Direct access to logic and rendering.

Cons:

Code clutter in the parent component.

Poor reusability across the application.

Limited maintainability and scalability.

Approach 2: Using a Child Component (ImageSlider)
Pros:

Separation of concerns enhances readability and maintainability.

High reusability for different parts of the application.

Modularity allows independent development and testing.

Better scalability for growing applications.

Cons:

Slightly more initial setup required.

--- as I introduced the state variable for active index, I removed the map, but later I decided to load all the images into the DOM at once (coz I only have 12 images) and brought back map. Also to create smooth animations you need them in the DOM already
