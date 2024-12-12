-   tailwind
-   react
-   testimonials carousel
-   accessiblity
-   keyboard nav

-   possibly do image optimizations



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