# Layout

[Entire Slider Container - Wide, Centered] The main container is like the stage
│
├── [Left Navigation Arrow] ←── Floating on left side Nav arrows are like side curtains we can pull
│
├── [Slider Window] The slider window is like a moving spotlight
│ │
│ └── [Sliding Track]
│ │
│ ├── [Card 1] ───┐
│ ├── [Card 2] │ All cards lined up horizontally Like an actor waiting to slide into view
│ └── [Card 3] ───┘
│
│
└── [Right Navigation Arrow] ←── Floating on right side

When you click next/previous:

The entire "sliding track" shifts left or right
Only one card is fully visible at a time
The transition is smooth, like a gentle camera pan

The translateX property works by moving the entire card container horizontally based on the current imageIndex.

The magic happens with translateX, which literally pushes the entire track of cards horizontally, creating the illusion of navigation while keeping everything aligned and centered.

The transition property is crucial in providing the sense of direction and smoothness in the sliding animation.

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

-   important css properties utilized: flex-shrink-0 (prevents the card containing div from collapsing horizontally and not stick to each other), object-cover

-   animated buttons using keyframes animation

Accessibility improvements:

-   Hover styles must be and are also applied to focus states improves accessibility, especially for users who navigate with a keyboard or assistive devices.

-   :focus applies whenever an element gains focus, regardless of how (keyboard, mouse, or programmatically).
    :focus-visible applies only when focus is obvious or expected (e.g., via keyboard Tab or screen reader, but not mouse).

Key difference: :focus-visible is better for accessibility as it avoids showing focus styles for mouse clicks.

-   aria-label to label elements for screen readers only

-   Using aria-hidden="true" on images inside icons because the label text for the button already describes the action (no need for screen reader to read the image of the icon)

-   hide hidden inactive images from screen readers using aria-hidden
